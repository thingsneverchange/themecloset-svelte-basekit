<script type="ts">
import './assets/css/global.css'
import './assets/css/reset.css'
import { scan } from '$lib/store'
import Notification from '$lib/ui/Notification.svelte'
</script>
<div id="themecloset_app" style="font-family: {scan().fontFamily};font-size: {scan().fontSize}{scan().fontSizeUnit}">
  <Notification/>
  <slot />
</div>
