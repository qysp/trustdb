import { mkdir } from 'fs/promises';
import { dirname } from 'path';
import { deserialize, serialize } from 'v8';
import { PlainObject } from './types';

export const mkdirp = async (filepath: string): Promise<void> => {
  const name = dirname(filepath);
  if (name.length > 1) {
    await mkdir(name, { recursive: true });
  }
};

export const has = <O extends {}, P extends string | number>(obj: O, prop: P): obj is O & Record<P, unknown> => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

export const isObject = <T = PlainObject>(obj: unknown): obj is T => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

export const clone = <T>(value: T): T => deserialize(serialize(value));

export const flatten = <T>(array: T[]): T[] => {
  return array.reduce((flattened, value) => {
    const flattenedValue: T[] = Array.isArray(value) ? flatten(value) : [value];
    return flattened.concat(flattenedValue);
  }, [] as T[]);
};
