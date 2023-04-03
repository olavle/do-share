import { model } from 'mongoose';
import { createBasicCollection, createMongoSchema } from '../lib';
import { IGroup } from './models';

const GroupSchema = createMongoSchema<IGroup>({
  name: String,
  createdById: String,
  memeberIds: [String],
});

const GroupModel = model<IGroup>('Group', GroupSchema);
export const groupCollection = createBasicCollection(GroupModel);
