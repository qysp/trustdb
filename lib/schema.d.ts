import { PlainObject } from './types';
export declare enum SchemaType {
    Any = "any",
    Mixed = "any",
    String = "string",
    Number = "number",
    Boolean = "boolean",
    Date = "date"
}
export declare class Schema {
    private schema;
    private template;
    private errors;
    readonly reservedProperties: string[];
    /**
     * Creates a Schema instance.
     */
    constructor(schema: PlainObject);
    /**
     * Creates a Schema instance.
     */
    static from(schema: PlainObject): Schema;
    /**
     * Validate a document.
     */
    validate(document: PlainObject): boolean;
    /**
     * Get the validation errors (if present).
     */
    get validationErrors(): string[];
    /**
     * Parse an object into a validation schema.
     */
    private parseSchema;
    /**
     * Internal validation wrapper for recursive calls.
     */
    private applySchema;
    /**
     * Choose a fitting validator based on the value and other parameters.
     *
     * @private
     * @param {string|object} value Value to build the validator for.
     * @param {boolean} [isArray=false] Whether `value` is inside an array.
     * @return {function} Validation function matched to the parameters.
     */
    private chooseValidator;
    /**
     * Check if the schema and an object differ from each other.
     */
    private checkDeviations;
    private log;
    /**
     * Return the necessary properties for the export.
     */
    export(): Record<string | number, string | number | boolean | {} | (string | number | boolean | {})[]>;
}
