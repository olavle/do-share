import { IBaseSchema, IBasicCollection } from "../../types/root";

export interface IGroup extends IBaseSchema {
  name: string;
  createdById: string;
  memberIds: string[];
}

export type TGroupInput = Pick<IGroup, "memberIds" | "name">;

export type TGroupCollection = IBasicCollection<IGroup, TGroupInput>;
