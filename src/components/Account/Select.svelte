<script lang="ts">
  import type { SelectOptions } from "../../core/Account/Contracts/SelectOptions";

  export let id: string;
  export let label: string;
  export let name: string;
  export let values: SelectOptions[]; 
</script>


<div>
  <label for={id}>{label}</label>
  
  <select {id} {name} on:change>
    {#each values as value}
      <option value={value.key} disabled={value.disabled} selected={value.selected}>{value.label}</option>
    {/each}
  </select>
</div>