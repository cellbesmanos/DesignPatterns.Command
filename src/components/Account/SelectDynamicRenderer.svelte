<script lang="ts">
  import type { SelectOptions } from "../../core/Account/Contracts/SelectOptions";
  import type { ComponentDictionary } from "../../core/Account/Contracts/ComponentDictionary";
  
  import Select from "./Select.svelte";

  export let id: string;
  export let label: string;
  export let name: string;
  export let values: SelectOptions[]; 
  export let components: ComponentDictionary;

  let activeComponent: ConstructorOfATypedSvelteComponent;

  function updateRenderedComponent(e: Event) {
    const target = e.target as HTMLSelectElement;
    activeComponent = components[target.value];
  }
</script>

<Select {id} {name} {label} {values} on:change={updateRenderedComponent} />

<svelte:component this={activeComponent} />





