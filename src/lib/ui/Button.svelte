<script type="ts">
import { store } from '$lib/store'
import { createEventDispatcher } from 'svelte';
import { goto, afterNavigate } from '$app/navigation';
import Loading from '$lib/ui/Loading.svelte';

export let href : string = '#!';
export let color : string = '';
export let backgroundColor : string = '';
export let active : boolean = false;
export let full : boolean = false;
export let spaced : boolean = false;
export let rounded : boolean = true;
export let goBack : boolean = false;
export let faded : boolean = false;
export let blankLink : boolean = false;
export let offsetTop : number = 0;
export let offsetLeft : number = 0;
export let offsetRight : number = 0;
export let offsetBottom : number = 0;
export let size : 'big' | 'small' | 'normal' = 'normal';
export let showLoading : boolean  = false;
export let alignLeft : boolean = false
export let width : number = 0
export let circled : boolean = false;
export let border : string = "";

const dispatch = createEventDispatcher();
let style = {
  'margin-top': offsetTop + 'px',
  'margin-left': offsetLeft + 'px',
  'margin-right': offsetRight + 'px',
  'margin-bottom': offsetBottom + 'px',
  'text-align': alignLeft ? 'left' : 'center'
}

if(border != ''){
  style['border'] = border
}
if(color != ''){
  style['color'] = color
}

if(backgroundColor != ''){
  style['background-color'] = backgroundColor
}

if(active){
  style['background-color'] = 'transparent'
}

if(full){
  style['width'] = '100%'
}

if(spaced){
  style['margin'] = '0px 5px'
}

if(rounded){
  style['border-radius'] = '5px'
}

if(circled){
  style['border-radius'] = '500px'
}

if(faded){
  style['opacity'] = '0.6'
}
if(width != 0){
  style['width'] = width + 'px'
}

const makeStyle = () => {
  return Object.entries(style).map(([k, v]) => `${k}:${v}`).join(';')
}

afterNavigate((navigaton) => {
  if(navigaton.from && goBack){
    href = navigaton.from.pathname
  }
})

const click = async (event: ClickEvent) :Promise<void> => {

  event.preventDefault()
  if(! showLoading){
    dispatch('click')

    if(href != ''){
      if(!blankLink && href != '#!'){
        goto(href)
      }
      if(blankLink){
        window.open(href, '_blank')
      }
    }
  }

};
</script>

<a style="{makeStyle()}" class="button {size}" href="{href}" on:click="{click}">
  {#if showLoading}
    <Loading size="{13}"/>
  {:else}
    <slot/>
  {/if}
</a>

<style>
*{box-sizing:border-box;margin:0px;padding:0px;    white-space: nowrap;}
.button{display:inline-block;font-size:11pt;font-weight:600;padding:10px 15px;text-decoration:none;border:0px;border-radius:5px;font-family:arial;}
.button.big{padding:15px 25px;font-size:12pt;border-radius:3px;}
.button.small{padding:6px 9px;font-size:9pt;border-radius:6px;}
:global(.theme-dark .button){background-color: #222;color:#fff}
:global(.theme-light .button){background-color: #efefef;color:#222}
</style>
