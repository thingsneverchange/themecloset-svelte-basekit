<script type="ts">

import { store } from '$lib/store'
export let as : 'p' | 'paragraph' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' = 'p'
export let size : string = $store.fontSize.toString()
export let faded: boolean = false;
export let spacing: number = 0
export let capitalize: boolean = false;

if(as == 'h4') size = size + 6
if(as == 'h3') size = size + 12
if(as == 'h2') size = size + 24
if(as == 'h1') size = size + 36

let fontSize: string = size + $store.fontSizeUnit
</script>

<svelte:element
  this="{as}" class="{faded ? 'faded': ''} {capitalize ? 'capitalize' : ''}"
  style="font-size: {fontSize};margin:{spacing}px 0px">
  <slot/>
</svelte:element>

<style>
  *{box-sizing:border-box;margin:0px;padding:0px;}
  .faded{opacity:0.7}
  .capitalize{text-transform: capitalize;}
</style>
