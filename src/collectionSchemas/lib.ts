import R from "ramda";
import { FlatObject } from "./lib.models";

export const toMongoFields = <T extends Record<string, any>>(
  obj: T
): FlatObject<T> => {
  const reducer = (prefix: string, obj: Record<string, any>) =>
    Object.entries(obj).reduce((acc, [key, value]) => {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (value && typeof value === "object") {
        Object.assign(acc, reducer(fullKey, value));
      } else {
        acc = R.assocPath([fullKey], value)(acc) as FlatObject<T>; // not sure how safe this is ":D" but has to do for now. "I'll refactor it __later__"
      }
      return acc;
    }, {} as FlatObject<T>);

  return reducer("", obj);
};
