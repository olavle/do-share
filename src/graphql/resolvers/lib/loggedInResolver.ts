import { IContext } from "../../../context/models";

export const loggedInResolver =
  <T, I, R>(resolverFunc: (root: T, input: I, context: IContext) => R) =>
  (root: T, input: I, context: IContext) => {
    const user = context.identity.user;

    if (!user) {
      throw new Error("Unauthorized");
    }

    return resolverFunc(root, input, context);
  };
