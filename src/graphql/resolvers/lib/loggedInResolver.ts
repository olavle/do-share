import { IContext } from '../../../context/models';

export const loggedInResolver =
  <T, I, R>(resolverFunc: (root: T, input: I, context: IContext) => R) =>
  (root: T, input: I, context: IContext) => {
    const token = context.token;

    if (!token) {
      throw new Error('no token');
    }

    return resolverFunc(root, input, context);
  };
