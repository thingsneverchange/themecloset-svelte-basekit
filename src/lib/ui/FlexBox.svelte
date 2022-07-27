 <script type="ts">
import { createEventDispatcher } from 'svelte';
export let justifyContent : string = 'initial'
export let alignItems : string = 'center'
export let fixedWidth : number = undefined;
export let ellipsis : boolean = true;

let classNames : string = '';
export { classNames as class }


const dispatch = createEventDispatcher(); 
const makeClick = () :void => {
  dispatch('click')
}

</script>
<div on:click="{makeClick}" class="{classNames ? classNames : ''} {ellipsis ? ' ellipsis ' : ''} flexbox {fixedWidth ? 'fixed-width-' + fixedWidth : ''}" style="justify-content:{justifyContent}; align-items:{alignItems};">
  <slot/>
</div>

<style>
.flexbox{display:flex;}
:global(.fixed-width-4 > *){flex:0 0 25%;}
:global(.fixed-width-2 > *){flex:0 0 50%;}
:global(.fixed-width-1 > *){flex:0 0 100%;}
:global(.fixed-width-3 > *){flex:0 0 33.3333%;}
:global(.fixed-width-5 > *){flex:0 0 20%;}
:global(.fixed-width-6 > *){flex:0 0 16.6666%;}
:global(.flexbox.ellipsis > *){white-space: nowrap;text-overflow:ellipsis;overflow:hidden}
</style>
