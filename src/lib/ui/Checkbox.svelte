<script type="ts">
  import { createEventDispatcher } from 'svelte';

  export let checked : boolean = false;
  export let size : 'small' | 'normal' | 'big' = 'normal';

  const toggle = () => {
   checked = checked ? false : true;
   dispatch('change');
  }

  const dispatch = createEventDispatcher();

</script>
<div class="checkbox_container selectionDisabled {size}" on:click="{toggle}">
  <span class="checkbox">
    {#if checked}
      <span class="checked"></span>
    {/if}
  </span>
  <span class="slot">
    <slot />
  </span>
</div>
<style>
.checkbox{
  background-color:#343434;
  border:1px solid #222;
  display:inline-block;
  border-radius:3px;
}
.slot{position:relative;top:-1px;}
.checkbox_container{display:flex;align-items:center;margin:8px 0px;cursor:pointer !important;}
.checkbox_container.small .checkbox{width:8px;height:8px;}
.checkbox_container.normal .checkbox{width:14px;height:14px;}
.checkbox_container.big .checkbox{width:18px;height:18px;}
.checkbox_container .checkbox{margin-right:10px;}
.checked{background-color:#aeaeae;width:100%;height:100%;display:block;border-radius:10px}
.checkbox{padding:3px;}
.checkbox_container *{line-height:100%}
:global(.theme-light .checkbox_container .checkbox){background-color:#e2e2e2;border:1px solid #efefef;color:#222}
</style>
