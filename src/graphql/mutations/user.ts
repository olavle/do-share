import { IUserInput } from "../../collectionSchemas/user/models";
import { loggedInResolver } from "../resolvers/lib/loggedInResolver";

export const addUser = loggedInResolver(
  async (_root, { user }: { user: IUserInput }, context) =>
    await context.collection.user.create(user)
);

export const patchUser = loggedInResolver(
  async (_root, { id, user }: { id: string; user: IUserInput }, context) =>
    await context.collection.user.patch(id, user)
);
