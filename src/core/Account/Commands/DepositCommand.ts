import type ICommand from "../../Contracts/ICommand";
import Account from "../Contracts/Account";

export default class DepositCommand implements ICommand {
  _account;
  _amount;

  constructor(account: Account, amount: number) {
    this._account = account;
    this._amount = amount;
  }

  get account() : Account {
    return this._account;
  }

  get amount() : number {
    return this._amount;
  }

  execute(): void {
    this._account.balanceRemaining += this._amount;
  }

  undo(): void {
    this._account.balanceRemaining -= this._amount;
  }
}