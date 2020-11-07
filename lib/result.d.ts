import { PlainObject } from './types';
export default class Result {
    private docs;
    constructor(documents: PlainObject[]);
    /**
     * Sort the results given a specific property.
     * Supported property value types are string, number, boolean or Date.
     */
    simpleSort(prop: string, desc?: boolean): this;
    /**
     * Sort the results using your own custom sort function.
     */
    sort(callback: (a: PlainObject, b: PlainObject) => number): this;
    /**
     * Map the results using your own custom map function.
     */
    map(callback: (doc: PlainObject, index: number) => any): this;
    /**
     * Limit the number of results.
     */
    limit(value: number): this;
    /**
     * Get the filtered and possibly altered documents.
     */
    get documents(): Record<string | number, string | number | boolean | {} | (string | number | boolean | {})[]>[];
}
