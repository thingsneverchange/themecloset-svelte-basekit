<script type="ts">
import { goto, afterNavigate } from '$app/navigation'
import { createEventDispatcher } from 'svelte';

export let withLine :boolean = false;
export let goBack : boolean = false;
export let href : string = '';
export let target: string = undefined;
export let prefetch: boolean = false;
export let forceful: boolean = false
afterNavigate((navigaton) => {
 if(navigaton.from && goBack){
   href = navigaton.from.pathname
 }
})

const dispatch = createEventDispatcher();

const sendLink = (event: MouseEvent) : void => {
  if(forceful == false){
   event.preventDefault()
 }else{
   window.location.href = href
 }
 dispatch('click')
 if(href && target != '_blank' && forceful == false){
   goto(href)
 }else{
  window.open(href)
 }
}
</script>
{#if prefetch}
  <a sveltekit:prefetch class:withLine="{withLine}" {href} {target} on:click="{sendLink}">
    <slot/>
  </a>
{:else}
  <a class:withLine="{withLine}" {href} {target} on:click="{sendLink}">
    <slot/>
  </a>
{/if}
<style>
.withLine{border-bottom:1px solid #2933ff;color:#2933ff}
</style>
