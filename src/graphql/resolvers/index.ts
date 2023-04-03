import { IContext } from '../../context/models';
import { IUserInput } from '../../collectionSchemas/user/models';
import { usersResolver } from './user';

export const resolvers = {
  Query: {
    users: usersResolver,
  },
  Mutation: {
    addUser: async (_root: any, input: IUserInput, context: IContext) =>
      await context.collection.user.create(input),
  },
};
