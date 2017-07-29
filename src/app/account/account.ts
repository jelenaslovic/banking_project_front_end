import {Bank} from "../bank/Bank";
import {Client} from "../client/client";

export class Account {
  id: number;
  balance: number;
  limit: number;
  number: number;
  bank: Bank;
  client: Client;
}
