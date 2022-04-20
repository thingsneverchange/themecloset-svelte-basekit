<script type="ts">
import { value } from '$lib/interface'
import Icon from '$lib/ui/Icon.svelte'
import { createEventDispatcher } from 'svelte';
import { onMount } from 'svelte';

interface selectInput{
  name: string,
  value: number
}

export let options : selectInput[];
export let value : number | string;
export let placeholder : string = 'Select Option'
export let chooseFirstDefault: boolean = false

let opened : boolean = false;
let placeholderInternal = placeholder

options = [
  ...options
]

const dispatch = createEventDispatcher();
const change = () => dispatch('change');

const changeValue = (val: any) :void => {
  value = val.value
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
      changeValue(options[0].value)
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

<div class="select disabledSelection" data-theme="{value().theme}">

  <div class="title">
    <div class="placeholder" on:click="{toggle}">
      {placeholderInternal}
    </div>
    <div class="arrow" on:click="{close}">
      {#if value}
        <Icon name="close" width="{10}" height="{10}" color="{value().theme == 'dark' ? '#fff' : '#222'}" />
      {:else}
        {#if opened}
          <Icon name="DropdownTop" width="{12}" height="{12}" color="{value().theme == 'dark' ? '#fff' : '#222'}" />
        {/if}
        {#if opened == false}
          <Icon name="DropdownBottom" width="{12}" height="{12}" color="{value().theme == 'dark' ? '#fff' : '#222'}" />
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
*{box-sizing: border-box}
.select .placeholder{width:calc(100% - 20px);padding:10px 15px;}
.select .arrow{padding-right:10px;}
.select::selection, .select *::selection { background: transparent;color:inherit}
.select{background-color:#fff;color:#222;font-size:11pt;position:relative;border-radius:3px;cursor:pointer;font-size:10pt;border:1px solid #222;}
.select .title{display:flex;justify-content: space-between;align-items:center;}
.select .options{top:35px;position:absolute;left:-1px;width:calc(100% + 2px);border: 1px solid #222;border-top:0px;background-color:#fff;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding:10px 15px;}
.select .options .option{padding:5px 0px;width:100%;}
.select .options .option:first-child{padding-top:0px;}
.select .options .option:last-child{padding-bottom:0px;}
.select[data-theme="dark"]{background-color:#222;color:#fff;}
.select[data-theme="dark"] .options{background-color:#222;}
select{width:0px;height:0px;position:absolute;top:0px;left:0px;}
</style>
