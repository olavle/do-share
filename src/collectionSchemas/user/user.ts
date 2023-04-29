import { model } from "mongoose";
import { IUser } from "./models";
import { createBasicCollection, createMongoSchema } from "../builders";

const userProfile = {
  firstName: String,
  lastName: String,
  email: String,
};

const UserSchema = createMongoSchema<IUser>({
  profile: userProfile,
});

export const UserModel = model<IUser>("User", UserSchema);
export const userCollection = createBasicCollection(UserModel);
