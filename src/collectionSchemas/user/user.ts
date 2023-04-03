import { Schema, model } from 'mongoose';
import { createBasicCollection, createMongoSchema } from '../lib';
import { IUser, IUserProfile } from './models';

const userProfile = new Schema<IUserProfile>({
  firstName: String,
  lastName: String,
  email: String,
});

const UserSchema = createMongoSchema<IUser>({
  profile: {
    type: userProfile,
  },
});

export const UserModel = model<IUser>('User', UserSchema);
export const userCollection = createBasicCollection(UserModel);
