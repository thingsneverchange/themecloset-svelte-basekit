<script>
import Initialize from '$lib/Initialize.svelte'
import { store } from '$lib/store'
import Input from '$lib/ui/Input.svelte'

store.update((data) => {
  data.notification.text = 'hi'
  data.notification.show = true
  return data
})
</script>


<Initialize theme="light">
</Initialize>
