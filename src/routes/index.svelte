<script>
import Initialize from '$lib/Initialize.svelte'
import Select from '$lib/ui/Select.svelte'

</script>
<div style="width:200px;padding:30px;">
<Select options="{[{name: 1, value: 1}, {name: 2, value: 2}]}" value="{1}" />
</div>
