import { model } from "mongoose";
import { IGroup } from "./models";
import { createBasicCollection, createMongoSchema } from "../builders";

const GroupSchema = createMongoSchema<IGroup>({
  name: String,
  createdById: String,
  memberIds: [String],
});

const GroupModel = model<IGroup>("Group", GroupSchema);
export const groupCollection = createBasicCollection(GroupModel);
