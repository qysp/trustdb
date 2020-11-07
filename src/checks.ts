import { isDeepStrictEqual } from 'util';
import { PlainObject, QueryObject } from './types';
import { clone, has, isObject } from './util';

const chooseOperation = (operator?: string): 'some' | 'every' => (operator === 'or' || operator === 'nor') ? 'some' : 'every';
const useNegation = (operator?: string): boolean => operator === 'not' || operator === 'nor';

export const checks = {
  /**
   * Whether `a` is equal to `b`.
   */
  equal: (a: unknown, b: any): boolean => a == b,
  /**
   * Whether `a` is not equal to `b`.
   */
  notEqual: (a: unknown, b: any): boolean => a != b,
  /**
   * Whether `a` is strict equal to `b`.
   */
  strictEqual: (a: unknown, b: any): boolean => a === b,
  /**
   * Whether `a` is strict not equal to `b`.
   */
  strictNotEqual: (a: unknown, b: any): boolean => a !== b,
  /**
   * Whether `a` is deep strict equal to `b`.
   */
  deepStrictEqual: (a: unknown, b: any): boolean => isDeepStrictEqual(a, b),
  /**
   * Whether `a` is deep strict not equal to `b`.
   */
  deepStrictNotEqual: (a: unknown, b: any): boolean => !isDeepStrictEqual(a, b),
  /**
   * Whether `a` is greater than `b`.
   */
  greaterThan: (a: unknown, b: number): boolean => typeof a === 'number' && a > b,
  /**
   * Whether `a` is less than `b`.
   */
  lessThan: (a: unknown, b: number): boolean => typeof a === 'number' && a < b,
  /**
   * Whether `a` is greater than or equal to `b`.
   */
  greaterThanOrEqual: (a: unknown, b: number): boolean => typeof a === 'number' && a >= b,
  /**
   * Whether `a` is less than or equal to `b`.
   */
  lessThanOrEqual: (a: unknown, b: number): boolean => typeof a === 'number' && a <= b,
  /**
   * Whether the string `a` starts with `b`.
   */
  startsWith: (a: unknown, b: string): boolean => typeof a === 'string' && a.startsWith(b),
  /**
   * Whether the string `a` ends with `b`.
   */
  endsWith: (a: unknown, b: string): boolean => typeof a === 'string' && a.endsWith(b),
  /**
   * Whether the type of `a` equals `b`.
   * All primitive types and 'array' are supported.
   */
  typeOf: (a: unknown, b: string): boolean => {
    if (b === 'object') {
      return isObject(a);
    }
    if (b === 'array') {
      return Array.isArray(a);
    }
    return typeof a === b;
  },
  /**
   * Whether an string, array or set `a` has the length of `b`.
   */
  lengthOf: (a: unknown, b: number): boolean => {
    if (typeof a === 'string' || Array.isArray(a)) {
      return a.length === b;
    }
    if (a instanceof Set) {
      return a.size === b;
    }
    return false;
  },
  /**
   * Whether `a` is between the min and max of `b`.
   * Parameter `b` has to be an array.
   */
  between: (a: unknown, b: number[]): boolean => {
    if (typeof a !== 'number') {
      return false;
    }
    return Array.isArray(b) &&
      a > Math.min(...b) &&
      a < Math.max(...b);
  },
  /**
   * Whether `a` matches the pattern of the regex `b`.
   * Parameter `b` can be an RegExp instance, an Array or a string.
   */
  regExp: (a: unknown, b: RegExp | string | [string, string | undefined]): boolean => {
    if (Array.isArray(b)) {
      b = new RegExp(...b);
    } else if (typeof b === 'string') {
      b = new RegExp(b);
    }
    if (!(b instanceof RegExp) || typeof a !== 'string') {
      return false;
    }
    return b.test(a as string);
  },
  /**
   * Whether the dates `a` and `b` are strict equal.
   * Parameter `a` as well as `b` can an instance of Date or a string.
   */
  dateCompare: (a: unknown, b: string | number | Date): boolean => {
    if (typeof a !== 'number' && typeof a !== 'string' && !(a instanceof Date)) {
      return false;
    }
    return new Date(a).getTime() === new Date(b).getTime();
  },
  /**
   *  Whether a document has specific `key`; determined by `b`.
   */
  hasProperty: (_: unknown, b: boolean, doc: PlainObject, key: string | number): boolean => {
    return b
      ? has(doc, key)
      : !has(doc, key);
  },
  /**
   * Whether an array or set `a` includes `b`.
   */
  includes: (a: unknown, b: any): boolean => {
    return (
      (Array.isArray(a) && a.includes(b)) ||
      (a instanceof Set && a.has(b))
    );
  },
  /**
   * Whether an array or set `a` does not include `b`.
   */
  notIncludes: (a: unknown, b: any): boolean => {
    return (
      (Array.isArray(a) && !a.includes(b)) ||
      (a instanceof Set && !a.has(b))
    );
  },
  /**
   * Whether `a` is an instance of `b`.
   */
  instanceOf: (a: unknown, b: InstanceType<any>): boolean => a instanceof b,
  /**
   * Whether an array or set `b` includes `a`.
   */
  includedIn: (a: unknown, b: any[] | Set<any>): boolean => {
    return (
      (Array.isArray(b) && b.includes(a)) ||
      (b instanceof Set && b.has(a))
    );
  },
  /**
   * Whether an array or set `b` does not include `a`.
   */
  notIncludedIn: (a: unknown, b: any[] | Set<any>): boolean => {
    return (
      (Array.isArray(b) && !b.includes(a)) ||
      (b instanceof Set && !b.has(a))
    );
  },
};

/**
 * Apply a query on a document.
 */
export const applyQuery = (queryObj: QueryObject, doc: PlainObject): boolean => {
  // Create a clone to not alter the original `queryObj`.
  const _queryObj = clone(queryObj);

  const resultOperation = chooseOperation(_queryObj.$op as string);
  const negateResult = useNegation(_queryObj.$op as string);
  delete _queryObj.$op;
  
  const endResult = Object.entries(_queryObj)[resultOperation](([ key, query ]): boolean => {
    if (isObject<QueryObject>(query)) {
      const queryOperation = chooseOperation(query.$op as string);
      const negateQuery = useNegation(query.$op as string);
      delete query.$op;
      
      const queryResult = Object.entries(query)[queryOperation](([ fn, val ]): boolean => {
        return checks[(fn as keyof typeof checks)](doc[key], val, doc, key);
      });

      return negateQuery
        ? !queryResult
        : queryResult;
    }

    return doc[key] === query;
  });

  return negateResult
    ? !endResult
    : endResult;
};

/**
 * Check if the query has an unknown query function property (or rather check).
 */
export const hasUnknownCheck = (queryObj: QueryObject): boolean => {
  return Object.values(queryObj).some((val): boolean => {
    if (!isObject(val)) {
      return false;
    }
    return Object.keys(val).some((fn): boolean => !has(checks, fn) && fn !== '$op');
  });
};
