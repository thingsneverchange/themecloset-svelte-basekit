<script>
import Initialize from '$lib/Initialize.svelte'
import Modal from '$lib/ui/Modal.svelte'
import { store } from '$lib/store'

store.update((data) => {
	data.loading.show = false
	return data
})
</script>
<Initialize theme="light">
</Initialize>
