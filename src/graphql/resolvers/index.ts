import { IUserInput } from '../../collectionSchemas/user/models';
import { loggedInResolver } from './lib/loggedInResolver';

export const resolvers = {
  Query: {
    users: loggedInResolver(async (_root, _input, context) => {
      return await context.collection.user.findAll();
    }),
  },
  Mutation: {
    addUser: loggedInResolver(
      async (_root, { user }: { user: IUserInput }, context) => {
        return await context.collection.user.create(user);
      }
    ),
  },
};
