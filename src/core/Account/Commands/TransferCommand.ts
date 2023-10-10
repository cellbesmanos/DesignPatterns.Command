import type ICommand from "../../Contracts/ICommand";
import type Account from "../Contracts/Account";

export default class TransferCommand implements ICommand {
  _sourceAccount: Account;
  _transferAccount: Account;
  _amount: number;

  constructor(sourceAccount: Account, transferAccount: Account, amount: number) {
    this._sourceAccount = sourceAccount;
    this._transferAccount = transferAccount;
    this._amount = amount;
  }

  get sourceAccount() : Account {
    return this._sourceAccount;
  }

  get transferAccount() : Account {
    return this._transferAccount;
  }

  get amount() : number {
    return this._amount;
  }

  execute(): void {
    if(this.sourceAccount === this.transferAccount) {
      throw new Error("InvalidOperation: Cannot transfer funds to the same account.");
    }

    if(this.sourceAccount.balanceRemaining < this._amount) {
      throw new Error("InvalidOperation: Insufficient funds.");
    }

    this.sourceAccount.balanceRemaining -= this._amount;
    this.transferAccount.balanceRemaining += this.amount;
  }

  undo(): void {
    this.sourceAccount.balanceRemaining += this._amount;
    this.transferAccount.balanceRemaining -= this.amount;
  }
}