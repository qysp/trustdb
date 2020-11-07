export declare type Serializable<T> = string | number | boolean | T extends (infer R) ? R : T;
export declare type LogicalOperator = {
    $op?: 'and' | 'or' | 'not' | 'nor';
};
export declare type PlainObject<T = {}> = Record<string | number, Serializable<T> | Serializable<T>[]>;
export declare type QueryObject = PlainObject<LogicalOperator> & LogicalOperator;
