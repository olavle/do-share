import { model } from "mongoose";
import { createBasicCollection, createMongoSchema } from "../builders";
import { IExpense } from "./models";

const ExpenseSchema = createMongoSchema<IExpense>({
  createdByUserId: String,
  groupId: String,
  paidByUserId: String,
  shares: [
    {
      userId: String,
      amount: Number,
      isPaid: Boolean,
    },
  ],
  title: String,
  totalAmount: Number,
});

const ExpenseModel = model<IExpense>("Expense", ExpenseSchema);
export const expenseCollection = createBasicCollection(ExpenseModel);
