<script type="ts">
import { store } from '$lib/store'
import Icon from '$lib/ui/Icon.svelte'
import Flexbox from '$lib/ui/FlexBox.svelte'
import { createEventDispatcher } from 'svelte';
import { onMount } from 'svelte';

interface selectInput{
  name: string,
  value: number
}

export let options : selectInput[];
export let value : number | string;
export let withTitle : string = '';
export let placeholder : string = 'Select Option'
export let size : 'big' | 'normal' | 'small' = 'normal';
export let chooseFirstDefault: boolean = false

let opened : boolean = false;

options = [
  ...options
]

const dispatch = createEventDispatcher();
const change = () => dispatch('change');
const changeValue = (val: any) :void => {
  value = val.value
  placeholder = val.name
  change();
}
const toggle = () => {
  dispatch('click');
  opened = opened ? false : true
}

onMount( () => {

  if(options.length > 0 && chooseFirstDefault){
    if(value == 0 || value == null){
      changeValue(options[0].value)
    }
  }

})

</script>

{#if withTitle != ''}
  <span class="input_title">
    { withTitle }
  </span>
{/if}
<div data-theme="{$store.theme}" class="select {size}">
  <Flexbox on:click="{toggle}" justifyContent="space-between" class="placeholder">
    {placeholder}
    {#key opened}
      <Icon color="{$store.theme == 'dark' ? '#fff' : '#222'}"
            width="{size == 'big' ? 20 : 10}"
            height="{size == 'big' ? 20 : 10}"
            name="{opened ? 'DropdownTop' : 'DropdownBottom'}" />
    {/key}
  </Flexbox>
  {#if opened}
    <ol>
      {#each options as option}
        <li on:click="{(() => {
          changeValue(option); toggle();
        })}">{option.name}</li>
      {/each}
    </ol>
  {/if}
</div>


<style>
.select{width:100%;border-radius:5px;cursor:pointer;  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.select{background-color:#222;font-size:11pt;padding:15px;color:#fff;font-family:arial}
.select[data-theme="light"]{background-color:#fff;border:1px solid #efefef;color:#222}
.select.small{padding:10px;font-size:10pt;}
.select.big{padding:20px;font-size:16pt;}
*{margin:0px;padding:0px;}
ol,li{list-style:none;margin:0px;}
ol li{margin:12px 0px;}
ol li:last-child{margin-bottom:0px;}
.input_title{opacity:0.6;font-weight:600;padding:10px 12px;font-size:8pt;display:block;}
</style>
