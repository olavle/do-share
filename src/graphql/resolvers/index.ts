import { IContext } from '../../context/models';
import { IUser, IUserInput } from '../../collectionSchemas/user/models';

export const resolvers = {
  Query: {
    users: async (
      _root: IUser,
      _args: any,
      context: IContext
    ): Promise<IUser[]> => await context.collection.user.findAll(),
  },
  Mutation: {
    addUser: async (_root: any, input: IUserInput, context: IContext) =>
      await context.collection.user.create(input),
  },
};
