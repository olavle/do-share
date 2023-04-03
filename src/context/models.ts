import { TUserCollection } from '../collectionSchemas/user/models';

export interface IContext {
  token?: string;
  collection: ICollection;
}

export interface ICollection {
  user: TUserCollection;
}
