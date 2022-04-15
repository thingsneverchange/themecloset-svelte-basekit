<script type="ts">
import '$lib/assets/css/global.css'
import '$lib/assets/css/reset.css'
import { store } from '$lib/store'
import Notification from '$lib/ui/Notification.svelte'
</script>
<div id="themecloset_app" style="font-family: {$store.fontFamily};font-size: {$store.fontSize}{$store.fontSizeUnit}">
  <Notification/>
  <slot />
</div>
