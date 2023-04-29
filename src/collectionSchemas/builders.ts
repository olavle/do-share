import { Model, Schema, SchemaTypeOptions } from "mongoose";
import { IBaseSchema, IBasicCollection } from "../types/root";
import { toMongoFields } from "./lib";

export const createMongoSchema = <T extends IBaseSchema>(
  input: Record<keyof Omit<T, "_id" | "createdAt">, SchemaTypeOptions<T>>
) =>
  new Schema<T>(
    {
      ...input,
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

const findOne = async <T>(id: string, Model: Model<T>) =>
  (await Model.find({ _id: id })).at(0) ?? undefined;

/**
 * Need to extract the functions into separate functions
 * just to make this less of a cluster fuck
 */
export const createBasicCollection = <T, I extends Record<string, any>>(
  Model: Model<T>
): IBasicCollection<T, I> => ({
  create: (input) =>
    new Model({
      ...input,
    }).save(),
  findAll: () => Model.find({}),
  findOne: (id) => findOne(id, Model),
  patch: async (id, payload) => {
    const updatePayload = toMongoFields(payload);

    return Model.findOneAndUpdate(
      {
        _id: id,
      },
      updatePayload,
      {
        new: true,
      }
    );
  },
});
