import { IGroup } from '../../../collectionSchemas/group/models';
import { IContext } from '../../../context/models';

export const groupsResolver = async (
  _root: IGroup,
  _args: any,
  context: IContext
): Promise<IGroup[]> => await context.collection.group.findAll();
