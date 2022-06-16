<script type="ts">
export let fontFamily: string = 'arial'
export let fontSize: string  = '10pt'
export let googleFont : string;
export let theme: 'light' | 'dark' = 'dark'
export let backgroundColor: string = '#fff'
import { store } from '$lib/store'
import './assets/css/global.css'
import './assets/css/reset.css'
import Notification from '$lib/ui/Notification.svelte'
import FullLoading from '$lib/ui/FullLoading.svelte'
import Prompt from '$lib/ui/Prompt.svelte'

store.update((data) => {
  data.theme = theme
  return data
})
if(theme == 'dark'){
  backgroundColor = '#222'
}
</script>
<svelte:head>
{#if theme == 'dark'}
  <style>
    body, html {background-color:#222;color:#fff}
  </style>
{/if}
{#if googleFont}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="{googleFont}" rel="stylesheet">
{/if}
</svelte:head>

<div id="themecloset_app" class="theme-{theme}" style="font-family: {fontFamily};font-size: {fontSize};background-color:{backgroundColor}">

  <FullLoading/>
  <Notification />
  <Prompt />

  <slot />
</div>

<style>
:global(body, html){min-height:100%;height:100%}
#themecloset_app{min-height:100%;}
</style>
