import { IBaseSchema } from '../../types/root';

export interface IUserProfile {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUser extends IBaseSchema {
  profile: IUserProfile;
}

export interface IUserInput extends IUserProfile {}

export interface IUserCollection {
  findOne: (id: string) => Promise<IUser | undefined>;
  findAll: () => Promise<IUser[]>;
  create: (input: IUserInput) => Promise<IUser>;
}
