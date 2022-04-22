<script type="ts">
import { createEventDispatcher } from 'svelte';
export let justifyContent : string = 'initial'
export let alignItems : string = 'center'
export let fixedWidth : number = 4;

let classNames : string;
export { classNames as class }


const dispatch = createEventDispatcher();
const makeClick = () :void => {
  dispatch('click')
}

</script>
<div on:click="{makeClick}" class="{classNames} flexbox" style="justify-content:{justifyContent}; align-items:{alignItems};--fixedWidth:0 0 {100/fixedWidth}%;">
  <slot/>
</div>
<style>
.flexbox{display:flex;}
.flexbox > *{flex:var(--fixedWidth);}
</style>
