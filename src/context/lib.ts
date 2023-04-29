import jwt from "jsonwebtoken";
import { Request } from "express";
import { TJwtUser } from "../collectionSchemas/user/models";

const validateJwtUser = (token: string): TJwtUser => {
  if (!token) {
    throw new Error("token error");
  }

  /**
   * Wonder if here should be checked the user doing the request matches with
   * a user in the db
   * and the user in the db has correlating session token saved
   * this _should_ prevent impersonating
   * and not force extra checks later in the flow, maybe?
   * Not sure what those extra checks might be, so leave this as is for now
   * and if stuff starts to seem difficulty it's time to take a look at this
   */
  const decodedToken = jwt.decode(token) as any & TJwtUser; // there might be bunch of shit but also JwtUser stuff

  return {
    _id: decodedToken._id,
    email: decodedToken.email,
  };
};

export const extractToken = (req: Request) => {
  const token = req.headers.token;

  if (!token) {
    return undefined;
  }

  if (Array.isArray(token)) {
    return token.at(0);
  }

  return token;
};

export const extractIdentity = (req: Request) => {
  const token = extractToken(req);

  if (!token) {
    return {
      user: undefined,
    };
  }

  const user = validateJwtUser(token);

  return {
    user: {
      _id: user._id,
      email: user.email,
    },
  };
};
