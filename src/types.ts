export type Serializable<T> = string | number | boolean | T extends (infer R) ? R : T;
export type LogicalOperator = { $op?: 'and' | 'or' | 'not' | 'nor' };
export type PlainObject<T = {}> = Record<string | number, Serializable<T> | Serializable<T>[]>;
export type QueryObject = PlainObject<LogicalOperator> & LogicalOperator;
