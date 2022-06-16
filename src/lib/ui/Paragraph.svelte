<script type="ts">

import { store } from '$lib/store'
export let as : 'p' | 'paragraph' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' = 'p'
export let size : number = 0
export let faded: boolean = false;
export let spacing: number = 0
export let spacingHorizontal: number = 0
export let color: string = null
export let capitalize: boolean = false;
export let align : string = 'left'
export let bold : boolean = false
export let fontFamily: string = 'inherit'
export let isContent: boolean = false


size = parseInt(size)
if(size == 0){
  if(as == 'h5') size = 13
  if(as == 'h4') size = 18
  if(as == 'h3') size = 22
  if(as == 'h2') size = 26
  if(as == 'h1') size = 30
  if(as == 'p') size = 14
}
if(isContent) as = 'div'
if(color == null){
  color = '#222'
  if($store.theme == 'dark') color = '#fff'
}

let fontSize: string = size.toString() + 'px'
</script>
{$store.theme}
{#key $store.theme}
  <svelte:element
    this="{as}" class="{isContent ? 'isContent': ''} paragraph {faded ? 'faded': ''} {capitalize ? 'capitalize' : ''}"
    style="{bold ? 'font-weight:600;': ''}font-family:{fontFamily}; font-size: {fontSize};margin:{spacingHorizontal}px {spacing}px;color:{color};text-align:{align}">
    <slot/>
  </svelte:element>
{/key}

<style>
  .isContent{line-height:190%}
  *{box-sizing:border-box;margin:0px;padding:0px;}
  .faded{opacity:0.7}
  .capitalize{text-transform: capitalize;}
</style>
