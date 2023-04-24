import { model } from 'mongoose';
import { createBasicCollection, createMongoSchema } from '../lib';
import { IUser } from './models';

const userProfile = {
  firstName: String,
  lastName: String,
  email: String,
};

const UserSchema = createMongoSchema<IUser>({
  profile: userProfile,
});

export const UserModel = model<IUser>('User', UserSchema);
export const userCollection = createBasicCollection(UserModel);
