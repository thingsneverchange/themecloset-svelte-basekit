<script type="ts">
import Initialize from '$lib/Initialize.svelte'
import { store } from '$lib/store'
let value = 0;
const showda = () => {
  store.update( (data) => {
    data.notification.show = true
    data.notification.text = 'New password are now in sync.'
    return data
  })
}
</script>

<Initialize>

<div class="" on:click="{showda}">
asdfasdf
</div>
</Initialize>
