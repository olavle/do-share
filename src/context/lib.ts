import { Request } from 'express';

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
