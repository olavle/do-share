import { Request } from "express";
import { userCollection } from "../collectionSchemas/user/user";
import { ICollection, IContext } from "./models";
import { extractIdentity, extractToken } from "./lib";
import { groupCollection } from "../collectionSchemas/group/group";
import { expenseCollection } from "../collectionSchemas/expense/expense";

const collection: ICollection = {
  user: userCollection,
  group: groupCollection,
  expense: expenseCollection,
};

export const buildContext = (req: Request): IContext => ({
  token: extractToken(req),
  identity: extractIdentity(req),
  collection,
});
