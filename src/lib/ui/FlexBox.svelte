<script type="ts">
import { createEventDispatcher } from 'svelte';
export let justifyContent : string = 'initial'
export let alignItems : string = 'center'

let classNames : string;
export { classNames as class }


const dispatch = createEventDispatcher();
const makeClick = () :void => {
  dispatch('click')
}

</script>

<div on:click="{makeClick}" class="{classNames} flexbox" style="justify-content:{justifyContent}; align-items:{alignItems}">
  <slot/>
</div>
<style>
.flexbox{display:flex;}
</style>
