import { Request } from 'express';
import { userCollection } from '../collectionSchemas/user/user';
import { IContext } from './models';
import { extractToken } from './lib';

const collection = {
  user: userCollection,
};

export const buildContext = (req: Request): IContext => ({
  token: extractToken(req),
  collection,
});
