import type CommandHistory from "../Contracts/CommandHistory";
import type  ICommand from "../Contracts/ICommand";

export default class AccountContext {
  _commandHistory;

  private constructor(commandHistory: CommandHistory) {
    this._commandHistory = commandHistory;
  }

  static createInstance(commandHistory: CommandHistory) : AccountContext {
    return new AccountContext(commandHistory);
  }

  execute(command: ICommand) : void {
    command.execute();
    this._commandHistory.push(command);
    console.log(this._commandHistory);
  }

  undo() : void {
    if(this._commandHistory._stack.length >= 1) {
      this._commandHistory.pop()?.undo();
    }
  }
}
