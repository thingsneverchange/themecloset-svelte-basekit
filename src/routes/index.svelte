<script>
import Initialize from '$lib/Initialize.svelte'
import { store } from '$lib/store'
import Button from '$lib/ui/Button.svelte'

store.update( (data) => {
  data.notification.text = 'hi'
  return data
})
</script>


<Initialize theme="light">
  <Button>hi</Button>
</Initialize>
