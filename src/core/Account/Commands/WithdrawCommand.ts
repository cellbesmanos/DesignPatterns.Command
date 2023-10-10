import type ICommand  from "../../Contracts/ICommand";
import type Account  from "../Contracts/Account";

export default class WithdrawCommand implements ICommand {
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
    if(this.account.balanceRemaining < this._amount) {
      throw new Error("InvalidOperation: Cannot withdraw amount that is higher than the current balance.");
    }

    this._account.balanceRemaining -= this._amount;
  }

  undo(): void {
    this._account.balanceRemaining += this._amount;
  }
}