<script type="ts">
import { goto } from '$app/navigation'
import { createEventDispatcher } from 'svelte';
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
<a {href} {target} on:click="{sendLink}">
  <slot/>
</a>
