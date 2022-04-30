<script>
import Initialize from '$lib/Initialize.svelte'
import Input from '$lib/ui/Input.svelte'

const confirm = () =>{
  alert('d')
  console.log('asdf')
}
</script>
<Initialize theme="light">
  <Input accept="number" />
</Initialize>
