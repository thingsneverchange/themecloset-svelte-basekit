<script type="ts">
export let fontFamily: string = 'arial'
export let fontSize: string  = '10pt'
export let theme: 'light' | 'dark' = 'dark'
import { store } from '$lib/store'
import './assets/css/global.css'
import './assets/css/reset.css'
import Notification from '$lib/ui/Notification.svelte'
</script>
<div id="themecloset_app" class="theme-{theme}" style="font-family: {fontFamily};font-size: {fontSize}">
  {#if $store.notification.show}
    {#key $store.notification.text}
      <Notification />
    {/key}
  {/if}
  <slot />
</div>
