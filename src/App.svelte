<script lang="ts">
  import DepositCommand  from "./core/Account/Commands/DepositCommand";
  import TransferCommand  from "./core/Account/Commands/TransferCommand";
  import WithdrawCommand  from "./core/Account/Commands/WithdrawCommand";
  import Account  from "./core/Account/Contracts/Account";
  import AccountContext  from "./core/Application/AccountContext";
  import CommandHistory from "./core/Contracts/CommandHistory";

  /*
    The core parts of the Command Design Pattern are:
      - Client (anything external that the user could interact with) 
      - Sender (Invoker)
      - Concrete Command
      - Abstract Command
      - Receiver (another class that contains the business logic)
  */

  console.log("creating new AccountContext...");
  const accountContext = AccountContext.createInstance(new CommandHistory());

  console.log("creating demo accounts...");
  // demo accounts
  const account1 = new Account("Max", true, 5000);
  const account2 = new Account("John", true, 10000);

  accountContext.execute(new DepositCommand(account1, 5000));
  console.log(`Deposited 5000 to account1. New balance is: ${account1.balanceRemaining}`);

  accountContext.execute(new WithdrawCommand(account2, 8000));
  console.log(`Withdrawn 8000 to account2. New balance is: ${account2.balanceRemaining}`);

  accountContext.execute(new TransferCommand(account1, account2, 8000));
  console.log(`account1 transferred 8000 to account2. account1 new balance is: ${account1.balanceRemaining}, account2 new balance is: ${account2.balanceRemaining}`);

  accountContext.undo();
  console.log(`Undo transfer. account1 balance is: ${account1.balanceRemaining}, account2 balance is: ${account2.balanceRemaining}`);

  accountContext.undo();
  console.log(`Undo account2 withdraw. New balance is: ${account2.balanceRemaining}`);

  accountContext.undo();
  console.log(`Undo account1 deposit. New balance is: ${account1.balanceRemaining}`);
</script>

<main class="container">
  <h1>Sample implementation of Command Design Pattern</h1>
</main>