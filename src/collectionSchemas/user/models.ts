import { IBaseSchema, IBasicCollection } from "../../types/root";

export interface IUserProfile {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUser extends IBaseSchema {
  profile: IUserProfile;
}

export interface IUserInput extends IUserProfile {}

export type TUserCollection = IBasicCollection<IUser, IUserInput>;

export type TJwtUser = Pick<IUser, "_id"> & Pick<IUser["profile"], "email">;
