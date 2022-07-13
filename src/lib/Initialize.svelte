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
import { isArray } from 'lodash-es'

if(theme == 'dark'){
  backgroundColor = '#222'
}
if(isArray(fontFamily)){
  fontFamily = fontFamily.map(d => `'${d}'`).join(',');
}
</script>
<svelte:head>
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
:global(body, html, #themecloset_app, body > div){min-height:100%;height:100%}
</style>
