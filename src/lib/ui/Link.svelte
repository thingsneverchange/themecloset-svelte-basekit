<script type="ts">
import { goto } from '$app/navigation'
 export let href : string;
 export let target: string = undefined;

 const sendLink = (event: MouseEvent) : void => {
   event.preventDefault()
   if(href){
     goto(href)
   }
 }
</script>
<a {href} {target} on:click="{sendLink}">
  <slot/>
</a>
