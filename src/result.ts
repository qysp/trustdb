import { simpleSorting } from './sorting';
import { PlainObject } from './types';

export default class Result {
  private docs: PlainObject[];

  constructor(documents: PlainObject[]) {
    this.docs = documents;
  }

  /**
   * Sort the results given a specific property.
   * Supported property value types are string, number, boolean or Date.
   */
  simpleSort(prop: string, desc: boolean = false) {
    this.docs.sort((a, b) => simpleSorting(a[prop], b[prop]));

    if (desc === true) {
      this.docs.reverse();
    }

    return this;
  }

  /**
   * Sort the results using your own custom sort function.
   */
  sort(callback: (a: PlainObject, b: PlainObject) => number) {
    this.docs.sort(callback);
    return this;
  }

  /**
   * Map the results using your own custom map function.
   */
  map(callback: (doc: PlainObject, index: number) => any) {
    this.docs = this.docs.map(((doc, index) => callback(doc, index)));
    return this;
  }

  /**
   * Limit the number of results.
   */
  limit(value: number) {
    this.docs = this.docs.slice(0, value);
    return this;
  }

  /**
   * Get the filtered and possibly altered documents.
   */
  get documents() {
    return this.docs;
  }
}
