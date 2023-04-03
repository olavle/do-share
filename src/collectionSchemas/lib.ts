import { Model, Schema, SchemaTypeOptions } from 'mongoose';
import { IBaseSchema, IBasicCollection } from '../types/root';

export const createMongoSchema = <T extends IBaseSchema>(
  input: Record<keyof Omit<T, '_id' | 'createdAt'>, SchemaTypeOptions<T>>
) =>
  new Schema<T>(
    {
      ...input,
    },
    {
      timestamps: true,
    }
  );

const findOne = async <T>(id: string, Model: Model<T>) =>
  (await Model.find({ _id: id })).at(0) ?? undefined;

export const createBasicCollection = <T, I>(
  Model: Model<T>
): IBasicCollection<T, I> => ({
  create: (input) =>
    new Model({
      input,
    }).save(),
  findAll: () => Model.find({}),
  findOne: (id) => findOne(id, Model),
});
