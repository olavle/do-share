import { IBaseSchema, IBasicCollection } from '../../types/root';

export interface IGroup extends IBaseSchema {
  name: string;
  createdById: string;
  memeberIds: string[];
}

export type TGroupInput = Pick<IGroup, 'memeberIds' | 'name'>;

export type TGroupCollection = IBasicCollection<IGroup, TGroupInput>;
