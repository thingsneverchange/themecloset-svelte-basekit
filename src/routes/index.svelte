<script>
import Initialize from '$lib/Initialize.svelte'
import Select from '$lib/ui/Select.svelte'

</script>
<Initialize>
<Select options="{[{name: 1, value: 1}, {name: 2, value: 2}]}" value="{1}" />
</Initialize>
