import { mutations } from "../mutations";
import { usersResolver } from "./user";

export const resolvers = {
  Query: {
    users: usersResolver,
  },
  Mutation: mutations,
};
