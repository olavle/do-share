import { IUserCollection } from '../collectionSchemas/user/models';

export interface IContext {
  token?: string;
  collection: ICollection;
}

export interface ICollection {
  user: IUserCollection;
}
