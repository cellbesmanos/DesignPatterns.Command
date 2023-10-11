<script lang="ts">
  import type { SelectOptions } from "./core/Account/Contracts/SelectOptions";
  import type { ComponentDictionary } from "./core/Account/Contracts/ComponentDictionary";
  
  import SelectDynamicRenderer from "./components/Account/SelectDynamicRenderer.svelte";
  import DepositForm from "./components/Account/DepositForm.svelte";
  import WithdrawForm from "./components/Account/WithdrawForm.svelte";
  import TransferForm from "./components/Account/TransferForm.svelte";

  const transactionTypes: SelectOptions[] = [
    {
      key: "",
      label: "Select transaction",
      disabled: false,
      selected: true
    },
    {
      key: "deposit",
      label: "Deposit",
      disabled: false,
      selected: false
    },
    {
      key: "withdraw",
      label: "Withdraw",
      disabled: false,
      selected: false
    },
    {
      key: "transfer",
      label: "Transfer",
      disabled: false,
      selected: false
    },
  ]

  const transactionForms : ComponentDictionary = {
    "deposit": DepositForm,
    "withdraw": WithdrawForm,
    "transfer": TransferForm
  }
</script>

<main class="container">
  <h1>Command Design Pattern</h1>

  <div class="dashboard">
    <form action="./" method="POST">
      <SelectDynamicRenderer id="transaction-type" name="transactionType" label="What transaction do you want to perform?" values={transactionTypes} components={transactionForms} />
    </form>
  </div>
</main>