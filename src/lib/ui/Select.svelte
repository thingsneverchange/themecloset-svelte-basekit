<script type="ts">
import Icon from '$lib/ui/Icon.svelte'
import { createEventDispatcher } from 'svelte';
import { onMount } from 'svelte';
import { find, uniqBy } from 'lodash-es'

interface selectInput{
  name: string,
  value: number | string | boolean
}

export let options : selectInput[];
export let value : number | string;
export let name : string = null;
export let placeholder : string = 'Select Option'
export let chooseFirstDefault: boolean = false
export let valueNameIdentifier: string = 'value'

let opened : boolean = false;
let placeholderInternal = placeholder

options = [
  ...uniqBy(options, valueNameIdentifier)
]

const dispatch = createEventDispatcher();
const change = () => dispatch('change');

if(value != null && options.length != 0){
  if(find(options, {[valueNameIdentifier]: value})){
    placeholderInternal = find(options, {[valueNameIdentifier]: value}).name
  }
}

const changeValue = (val: any) :void => {
  value = val[valueNameIdentifier]
  placeholderInternal = val.name
  toggle();
  change();
}
const toggle = () => {
  dispatch('click');
  opened = opened ? false : true
}
const close = () => {
  if(value){
    opened = false
    value = undefined;
    placeholderInternal = placeholder

  }
}

onMount( () => {

  if(options.length > 0 && chooseFirstDefault){
    if(value == 0 || value == null){
      changeValue(options[0][valueNameIdentifier])
    }
  }

})

</script>

<select>
  {#each options as option}
    <option value="{option.value}">
      {option.name}
    </option>
  {/each}
</select>

<div class="select-name">
	<p>{name}</p>
</div>

<div class="select disabledSelection" style="opacity:{options.length == 0 ? '0.5' : '1'}">
  <div class="title">
    <div class="placeholder" on:click="{toggle}">
      {placeholderInternal}
    </div>
    <div class="arrow" on:click="{close}">
      {#if value}
        <Icon name="close" width="{10}" height="{10}" color="#222" />
      {:else}
        {#if opened}
          <Icon name="DropdownTop" width="{12}" height="{12}" color="#222" />
        {/if}
        {#if opened == false}
          <Icon name="DropdownBottom" width="{12}" height="{12}" color="#222" />
        {/if}
      {/if}
    </div>
  </div>

  {#if opened && options && options.length != 0}
    <div class="options">

      {#each options as option}
        <div class="option" on:click="{(() => {
          changeValue(option)
        })}">
          {option.name}
        </div>
      {/each}
    </div>
  {/if}

</div>

<style>
*{box-sizing: border-box;line-height:100%;}
.select-name{padding:10px 5px;font-size:12px;opacity:0.7}
.select .placeholder{width:calc(100% - 20px);padding:10px 15px;}
.select .arrow{padding-right:10px;}
.select::selection, .select *::selection { background: transparent;color:inherit}
.select{font-size:11pt;position:relative;border-radius:3px;cursor:pointer;font-size:10pt;border:1px solid #222;padding:5px 0px}
.select .title{display:flex;justify-content: space-between;align-items:center;}
.select .options{top:43px;width:calc(100% + 2px);left:-1px;position:absolute;;border: 1px solid #222;border-top:0px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding:10px 15px;padding-bottom:10px;z-index:9999;padding-top:5px;}
.select .options .option{padding:10px 0px;width:100%;}
.select .options .option:first-child{padding-top:0px;}
.select .options .option:last-child{padding-bottom:5px;}

:global(.theme-light .select .options, .theme-light .select){background-color:#fff;color:#222;}
:global(.theme-dark .select .options){background-color:#222;}
:global(.theme-dark .select .arrow svg){fill:#fff !important;}
:global(.theme-dark .select){background-color:#222;color:#fff;}
select{width:0px;height:0px;position:absolute;top:0px;left:0px;}
</style>
