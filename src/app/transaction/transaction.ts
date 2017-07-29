import {Account} from "../account/account";

export class Transaction {
  id: number;
  amount: number;
  senderAccount: Account;
  receiverAccount: Account;
  purpose: string;
  date: string;
}
