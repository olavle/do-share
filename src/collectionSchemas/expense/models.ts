import { IBaseSchema } from '../../types/root';

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
