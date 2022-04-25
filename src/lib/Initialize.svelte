<script type="ts">
export let fontFamily: string = 'arial'
export let fontSize: string  = '10pt'
export let googleFont : string;
export let theme: 'light' | 'dark' = 'dark'
import { store } from '$lib/store'
import './assets/css/global.css'
import './assets/css/reset.css'
import Notification from '$lib/ui/Notification.svelte'
</script>
<svelte:head>
{#if googleFont}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="{googleFont}" rel="stylesheet">
{/if}
</svelte:head>
<div id="themecloset_app" class="theme-{theme}" style="font-family: {fontFamily};font-size: {fontSize}">

      <Notification />
      
  <slot />
</div>
