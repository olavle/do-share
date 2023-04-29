import {
  IBaseSchema,
  IBasicCollection,
  BASE_SCHEMA_ITEMS,
} from "../../types/root";

export interface IShare {
  userId: string;
  amount: number;
  isPaid: number;
}

export interface IExpense extends IBaseSchema {
  groupId: string;
  title?: string;
  createdByUserId: string;
  paidByUserId: string;
  totalAmount: number;
  shares: IShare[];
}

export type TExpenseInput = Omit<IExpense, keyof typeof BASE_SCHEMA_ITEMS>;

export type TExpenseCollection = IBasicCollection<IExpense, TExpenseInput>;
