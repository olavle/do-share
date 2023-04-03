import root from './schemas/root';
import user from './schemas/user';
import { resolvers } from '../graphql/resolvers';
import R from 'ramda';

export const gqlSchema = R.flatten([root, user]);
export const gqlResolvers = resolvers;
