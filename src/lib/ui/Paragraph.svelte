<script type="ts">

import { scan } from '$lib/interface'
export let as : 'p' | 'paragraph' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' = 'p'
export let size : number = $store.fontSize
export let faded: boolean = false;
export let spacing: number = 0
export let spacingHorizontal: number = 0
export let color: string = '#222'
export let capitalize: boolean = false;
export let align : string = 'left'
export let fontFamily: string = 'inherit'

size = parseInt(size)
if(as == 'h4') size = size + 6
if(as == 'h3') size = size + 12
if(as == 'h2') size = size + 24
if(as == 'h1') size = size + 36

let fontSize: string = size.toString() + scan().fontSizeUnit
</script>
<svelte:element
  this="{as}" class="paragraph {faded ? 'faded': ''} {capitalize ? 'capitalize' : ''}"
  style="font-family:{fontFamily}; font-size: {fontSize};margin:{spacing}px {spacingHorizontal}px;color:{color};text-align:{align}">
  <slot/>
</svelte:element>

<style>
  *{box-sizing:border-box;margin:0px;padding:0px;}
  .faded{opacity:0.7}
  .capitalize{text-transform: capitalize;}
</style>
