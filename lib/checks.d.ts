import { PlainObject, QueryObject } from './types';
export declare const checks: {
    /**
     * Whether `a` is equal to `b`.
     */
    equal: (a: unknown, b: any) => boolean;
    /**
     * Whether `a` is not equal to `b`.
     */
    notEqual: (a: unknown, b: any) => boolean;
    /**
     * Whether `a` is strict equal to `b`.
     */
    strictEqual: (a: unknown, b: any) => boolean;
    /**
     * Whether `a` is strict not equal to `b`.
     */
    strictNotEqual: (a: unknown, b: any) => boolean;
    /**
     * Whether `a` is deep strict equal to `b`.
     */
    deepStrictEqual: (a: unknown, b: any) => boolean;
    /**
     * Whether `a` is deep strict not equal to `b`.
     */
    deepStrictNotEqual: (a: unknown, b: any) => boolean;
    /**
     * Whether `a` is greater than `b`.
     */
    greaterThan: (a: unknown, b: number) => boolean;
    /**
     * Whether `a` is less than `b`.
     */
    lessThan: (a: unknown, b: number) => boolean;
    /**
     * Whether `a` is greater than or equal to `b`.
     */
    greaterThanOrEqual: (a: unknown, b: number) => boolean;
    /**
     * Whether `a` is less than or equal to `b`.
     */
    lessThanOrEqual: (a: unknown, b: number) => boolean;
    /**
     * Whether the string `a` starts with `b`.
     */
    startsWith: (a: unknown, b: string) => boolean;
    /**
     * Whether the string `a` ends with `b`.
     */
    endsWith: (a: unknown, b: string) => boolean;
    /**
     * Whether the type of `a` equals `b`.
     * All primitive types and 'array' are supported.
     */
    typeOf: (a: unknown, b: string) => boolean;
    /**
     * Whether an string, array or set `a` has the length of `b`.
     */
    lengthOf: (a: unknown, b: number) => boolean;
    /**
     * Whether `a` is between the min and max of `b`.
     * Parameter `b` has to be an array.
     */
    between: (a: unknown, b: number[]) => boolean;
    /**
     * Whether `a` matches the pattern of the regex `b`.
     * Parameter `b` can be an RegExp instance, an Array or a string.
     */
    regExp: (a: unknown, b: RegExp | string | [string, string | undefined]) => boolean;
    /**
     * Whether the dates `a` and `b` are strict equal.
     * Parameter `a` as well as `b` can an instance of Date or a string.
     */
    dateCompare: (a: unknown, b: string | number | Date) => boolean;
    /**
     *  Whether a document has specific `key`; determined by `b`.
     */
    hasProperty: (_: unknown, b: boolean, doc: PlainObject, key: string | number) => boolean;
    /**
     * Whether an array or set `a` includes `b`.
     */
    includes: (a: unknown, b: any) => boolean;
    /**
     * Whether an array or set `a` does not include `b`.
     */
    notIncludes: (a: unknown, b: any) => boolean;
    /**
     * Whether `a` is an instance of `b`.
     */
    instanceOf: (a: unknown, b: InstanceType<any>) => boolean;
    /**
     * Whether an array or set `b` includes `a`.
     */
    includedIn: (a: unknown, b: any[] | Set<any>) => boolean;
    /**
     * Whether an array or set `b` does not include `a`.
     */
    notIncludedIn: (a: unknown, b: any[] | Set<any>) => boolean;
};
/**
 * Apply a query on a document.
 */
export declare const applyQuery: (queryObj: QueryObject, doc: PlainObject) => boolean;
/**
 * Check if the query has an unknown query function property (or rather check).
 */
export declare const hasUnknownCheck: (queryObj: QueryObject) => boolean;
