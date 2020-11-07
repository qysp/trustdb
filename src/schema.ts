import { isObject, has } from './util';
import { PlainObject } from './types';

type SchemaProperties = {
  __validate: (value: unknown) => boolean,
  __optional: boolean,
  __skip: boolean,
};

type SchemaObject = PlainObject<SchemaProperties> & SchemaProperties;

type Validator = (value: unknown) => boolean;

const typeValidator = (type: SchemaType): Validator => (value) => type === 'any' || typeof value === type;
const instanceValidator = (instance: InstanceType<any>): Validator => (value) => value instanceof instance;
const customValidator = (predicate: Validator): Validator => predicate;
const arrayValidator = (validator: Validator): Validator =>
  (value) => Array.isArray(value) && value.every((element) => validator(element));

export enum SchemaType {
  Any = 'any',
  Mixed = Any,
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Date = 'date',
}

export class Schema {
  private schema: SchemaObject;
  private template: PlainObject;
  private errors: string[] = [];

  public readonly reservedProperties = [
    '__value',
    '__optional',
    '__validate',
    '__skip',
  ];
  /**
   * Creates a Schema instance.
   */
  constructor(schema: PlainObject) {
    this.schema = this.parseSchema(schema);
    this.template = schema;
  }

  /**
   * Validate a document.
   */
  validate(document: PlainObject): boolean {
    if (!isObject(document)) {
      throw new TypeError('Expected parameter `document` to be a plain object');
    }
    this.errors.length = 0;
    return this.applySchema(this.schema, document);
  }

  /**
   * Get the validation errors (if present).
   */
  get validationErrors(): string[] {
    return this.errors;
  }

  /**
   * Parse an object into a validation schema.
   */
  private parseSchema(schema: PlainObject): SchemaObject {
    return Object.entries(schema).reduce((acc, [key, value]) => {
      const parsed = {
        __validate: (_: unknown) => true,
        __optional: false,
        __skip: false,
      };
      let isArray = false;

      if (Array.isArray(value)) {
        isArray = true;
        value = value.length > 0 ? value[0] : SchemaType.Any;
      }

      let type: any = value;
      if (isObject(value) && Object.keys(value).some(
          (key) => this.reservedProperties.includes(key))) {
        if (has(value, '__optional')) {
          parsed.__optional = !!value.__optional;
        }
        type = has(value, '__value') ? value.__value : SchemaType.Any;
        if (Array.isArray(type)) {
          isArray = true;
          type = type.length > 0 ? type[0] : SchemaType.Any;
        }
      }

      if (isObject(type)) {
        Object.assign(parsed, this.parseSchema(type));
      }

      parsed.__validate = this.chooseValidator(type, isArray);
      if (value === SchemaType.Any) {
        parsed.__skip = true;
      }

      acc[key] = parsed;
      return acc;
    }, {} as SchemaObject);
  }

  /**
   * Internal validation wrapper for recursive calls.
   */
  private applySchema(schema: SchemaObject, obj: PlainObject): boolean {
    const isValid = Object.entries(obj).every(([key, value]) => {
      if (key === '__id') {
        return true;
      }
      if (!has(schema, key)) {
        this.log(`Property '${key}' does not exist in schema`);
        return false;
      }
      const s = schema[key] as SchemaObject;
      if (!s.__validate(value)) {
        this.log(`Mismatched type for property '${key}'`);
        return false;
      }
      if (has(s, '__skip')) {
        return true;
      }
      if (isObject(value)) {
        return this.applySchema(s, value);
      }
      if (Array.isArray(value)) {
        // TODO: Find better way to check if some but not all elements are plain objects.
        const allPlainObjects = value.every(isObject);
        const somePlainObjects = value.some(isObject);
        if (somePlainObjects && !allPlainObjects) {
          this.log(`Some - but not all - elements of property '${key}' are plain objects`);
          return false;
        }
        if (allPlainObjects) {
          return (value as PlainObject[]).every((element) => this.applySchema(s, element));
        }
      }
      return true;
    });

    return isValid && !this.checkDeviations(schema, obj);
  }

  /**
   * Choose a fitting validator based on the value and other parameters.
   *
   * @private
   * @param {string|object} value Value to build the validator for.
   * @param {boolean} [isArray=false] Whether `value` is inside an array.
   * @return {function} Validation function matched to the parameters.
   */
  private chooseValidator(value: SchemaType | PlainObject, isArray: boolean = false): Validator {
    let validator = (_: unknown) => true;
    if (value === SchemaType.Date) {
      validator = instanceValidator(Date);
    } else if (isObject(value)) {
      validator = customValidator(isObject);
    } else {
      validator = typeValidator(value);
    }
    return isArray
      ? arrayValidator(validator)
      : validator;
  }

  /**
   * Check if the schema and an object differ from each other.
   */
  private checkDeviations(schema: SchemaObject, obj: PlainObject): boolean {
    return Object.entries(schema).some(([key, value]) => {
      if (this.reservedProperties.includes(key)) {
        return false;
      }
      if (has(value, '__optional') && value.__optional === true) {
        return false;
      }
      if (Array.isArray(obj)) {
        if (obj.some((element) => !has(element, key))) {
          this.log(`Elements in document are missing property '${key}'`);
          return true;
        }
        return false;
      }
      if (!has(obj, key)) {
        this.log(`Document is missing property '${key}'`);
        return true;
      }
      if (isObject(value)) {
        return this.checkDeviations(value as SchemaObject, obj[key] as PlainObject);
      }
      return false;
    });
  }

  private log(error: string) {
    this.errors.push(error);
  }

  /**
   * Return the necessary properties for the export.
   */
  export() {
    return this.template;
  }
}
