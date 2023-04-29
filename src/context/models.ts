import { TExpenseCollection } from "../collectionSchemas/expense/models";
import { TGroupCollection } from "../collectionSchemas/group/models";
import { TJwtUser, TUserCollection } from "../collectionSchemas/user/models";

export interface IContext {
  token?: string;
  collection: ICollection;
  identity: IIdentity;
}

export interface ICollection {
  user: TUserCollection;
  group: TGroupCollection;
  expense: TExpenseCollection;
}

export interface IIdentity {
  user: TJwtUser | null | undefined;
}
