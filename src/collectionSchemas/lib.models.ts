export type FlatObject<T> = T extends Record<string, any>
  ? { [K in keyof T & string as `${string & K}`]: FlatObject<T[K]> }
  : T;
