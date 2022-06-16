<script>
import Initialize from '$lib/Initialize.svelte'
import Modal from '$lib/ui/Modal.svelte'
import Paragraph from '$lib/ui/Paragraph.svelte'
import Border from '$lib/ui/Border.svelte'
import { store } from '$lib/store'

store.update((data) => {
	data.loading.show = false
	return data
})
</script>
<Initialize theme="dark">
	<Border />
	<Paragraph>sadfsadafd</Paragraph>
</Initialize>
