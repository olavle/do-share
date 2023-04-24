import { Request } from 'express';
import { userCollection } from '../collectionSchemas/user/user';
import { IContext } from './models';
import { extractToken } from './lib';
import { groupCollection } from '../collectionSchemas/group/group';

const collection = {
  user: userCollection,
  group: groupCollection,
};

export const buildContext = (req: Request): IContext => ({
  token: extractToken(req),
  collection,
});
