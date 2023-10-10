
export default class Account {
  username: string;
  isActive: boolean;

  balanceRemaining: number;

  constructor(username: string, isActive: boolean = false, initialDeposit: number = 0) {
    this.username = username;
    this.isActive = isActive;
    this.balanceRemaining = initialDeposit;
  }
}