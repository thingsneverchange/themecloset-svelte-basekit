<script type="ts">
import './assets/css/global.css'
import './assets/css/reset.css'
import { store } from '$lib/store'
import Notification from '$lib/ui/Notification.svelte'
</script>
<div id="themecloset_app" style="font-family: {store.data.fontFamily};font-size: {store.data.fontSize}{store.data.fontSizeUnit}">
  <Notification/>
  <slot />
</div>
