export declare const mkdirp: (filepath: string) => Promise<void>;
export declare const has: <O extends {}, P extends string | number>(obj: O, prop: P) => obj is O & Record<P, unknown>;
export declare const isObject: <T = Record<string | number, string | number | boolean | {} | (string | number | boolean | {})[]>>(obj: unknown) => obj is T;
export declare const clone: <T>(value: T) => T;
export declare const flatten: <T>(array: T[]) => T[];
