<script type="ts">
import { goto, afterNavigate } from '$app/navigation'
import { createEventDispatcher } from 'svelte';
import { goto, afterNavigate } from '$app/navigation';

export let withLine :boolean = false;
export let goBack : boolean = false;
export let href : string;
export let target: string = undefined;

afterNavigate((navigaton) => {
 if(navigaton.from && goBack){
   href = navigaton.from.pathname
 }
})

const dispatch = createEventDispatcher();

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
.withLine{border-bottom:1px solid #2933ff;color:#2933ff}
</style>
