<script type="ts">
import dayjs from 'dayjs'
import('dayjs/plugin/relativeTime').then( (d) => {
  dayjs.extend(d.default)
})

export let unix : number = 0

const timeago = (unix: number)  : number | string => {

  try{
    return dayjs(unix * 1000).fromNow()
  }catch(err){
    return 0
  }

}
</script>

{#if unix != 0}
  {timeago(unix)}
{:else}
  0 Second ago
{/if}
