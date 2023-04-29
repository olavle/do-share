import { loggedInResolver } from "./lib/loggedInResolver";

export const usersResolver = loggedInResolver(
  async (_root, _input, context) => {
    return await context.collection.user.findAll();
  }
);
