export interface IBaseSchema {
  _id?: string;
  createdAt?: string;
}

export interface IBasicCollection<T, I> {
  findOne: (id: string) => Promise<T | undefined>;
  findAll: () => Promise<T[]>;
  create: (input: I) => Promise<T>;
}
