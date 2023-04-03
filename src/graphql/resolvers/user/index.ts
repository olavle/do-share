import { IUser } from '../../../collectionSchemas/user/models';
import { IContext } from '../../../context/models';

export const usersResolver = async (
  _root: IUser,
  _args: any,
  context: IContext
): Promise<IUser[]> => await context.collection.user.findAll();
