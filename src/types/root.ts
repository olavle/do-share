export interface IBaseSchema {
  _id?: string;
  createdAt?: Date;
}

export interface IBasicCollection<T, I extends Record<string, any>> {
  findOne: (id: string) => Promise<T | undefined>;
  findAll: () => Promise<T[]>;
  create: (input: I) => Promise<T>;
  patch: (id: string, payload: DeepPartial<I>) => Promise<T | null>;
}
