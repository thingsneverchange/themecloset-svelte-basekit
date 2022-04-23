<script type="ts">
import { goto } from '$app/navigation'
import { createEventDispatcher } from 'svelte';
export let withLine :boolean = false;
const dispatch = createEventDispatcher();
 export let href : string;
 export let target: string = undefined;

 const sendLink = (event: MouseEvent) : void => {
   event.preventDefault()
   dispatch('click')
   if(href){
     goto(href)
   }
 }
</script>
<a class:withLine="{withLine}" {href} {target} on:click="{sendLink}">
  <slot/>
</a>
<style>
.withLine{border-bottom:1px solid #222;color:#2933ff}
</style>
