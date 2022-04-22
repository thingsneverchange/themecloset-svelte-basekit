<script type="ts">
import { createEventDispatcher } from 'svelte';
export let justifyContent : string = 'initial'
export let alignItems : string = 'center'
export let fixedWidth : number;

let classNames : string;
export { classNames as class }


const dispatch = createEventDispatcher();
const makeClick = () :void => {
  dispatch('click')
}

</script>
<div on:click="{makeClick}" class="{classNames} flexbox {fixedWidth ? 'fixed-width-' + fixedWidth : ''}" style="justify-content:{justifyContent}; align-items:{alignItems};">
  <slot/>
</div>

<style>
.flexbox{display:flex;}
.fixed-width-4 > *{flex:0 0 25%;}
.fixed-width-2 > *{flex:0 0 50%;}
.fixed-width-3 > *{flex:0 0 33.3333%;}
.fixed-width-5 > *{flex:0 0 20%;}
.fixed-width-6 > *{flex:0 0 16.6666%;}
</style>
