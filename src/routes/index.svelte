<script>
import Button from '$lib/ui/Button.svelte'
import { store } from '$lib/store'

store.update((data) => {
  data.theme = 'dark'
  return data
})
</script>


<Button>
  hi
</Button>
