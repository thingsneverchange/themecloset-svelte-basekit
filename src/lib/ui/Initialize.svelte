<script type="ts">
export let fontFamily: string = 'arial'
export let fontSize: string  = '10pt'
import '$lib/assets/css/global.css'
import '$lib/assets/css/reset.css'
</script>
<div id="themecloset_app" style="font-family: {fontFamily};font-size: {fontSize}">
  <slot />
</div>
