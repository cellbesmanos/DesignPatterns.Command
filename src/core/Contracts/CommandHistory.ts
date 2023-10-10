import type ICommand from "./ICommand";

export default class CommandHistory {
  _stack: ICommand[] = [];

  push(command: ICommand) : void {
    this._stack.push(command);
  }

  pop() : ICommand | null {
    if(this._stack.length > 0) {
      return this._stack.pop() ?? null;
    }

    return null;
  }
}