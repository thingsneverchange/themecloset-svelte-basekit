<script type="ts">
import { onMount } from 'svelte'
import { createEventDispatcher } from 'svelte';
import { debounce } from 'lodash-es'
import Icon from '$lib/ui/Icon.svelte'
export let placeholder : string = '';
export let full : boolean = false;
export let textarea : boolean = false;
export let maxLength : number = undefined;
export let value : string = '';
export let type: 'email' | 'text' | 'password' | 'number' = 'text';
export let spaced: boolean = false;
export let withTitle: string = null;
export let callback: Function = null;
export let rounded: boolean = true;
export let size: 'small' | 'big' = 'big'
export let required : boolean = false;
export let backgroundColor : string = undefined;
export let borderColor : string =  undefined;
export let disabled : boolean = false;
export let accept : string = '';

let inputElement : HTMLElement;
let isFocused: boolean = false;
//let deactivated : boolean = true;

onMount(() :void => {
  if (inputElement) {
    (<any>inputElement).type = type
  }
})


const dispatch = createEventDispatcher();
const toggleFocus = () => {
  isFocused = isFocused ? false : true
}
const click = () => {
  dispatch('click')
  if(callback){
    callback()
  }
};
const change = () => dispatch('change')
const input = () => dispatch('input')
const keypress = (event: KeyboardEvent) => {
  if(event.key == 'Enter'){
    dispatch('enter')
  }
  dispatch('input')
}

const validate = () => {
  if(accept == 'number'){
  	if(/^\d+$/.test(value) == false){
  	 value = value.replace(/[^0-9]+/g, "")
  	}
  }
}

$: value, validate()

</script>
{#if withTitle}
  <span class="input_title">
    { withTitle }
  </span>
{/if}
<span class="input {size} {rounded ? 'rounded': ''}" class:disabled="{disabled}">
  {#if !textarea}
    <input
      disabled="{disabled ? disabled : null}"
      maxlength="{maxLength}"
      on:keypress="{keypress}"
      on:input="{input}"
      bind:this="{inputElement}"
      bind:value="{value}"
      on:change="{change}"
      on:blur="{toggleFocus}"
      on:focus="{toggleFocus}"
      placeholder="{placeholder}"
      class="{spaced ? 'spcaed' : ''} inp {type} {isFocused ? 'focus': ''}"
      style="
      {borderColor ? 'border:1px solid ' + borderColor  + ';': ''}
      {backgroundColor ? 'background-color:' + backgroundColor + ';' : ''} {full ? 'width:100%' : ''}"/>
  {:else}
    <textarea
      disabled="{disabled ? disabled : null}"
      maxlength="{maxLength}"
      on:input="{input}"
      bind:value="{value}"
      on:change="{change}"
      placeholder="{placeholder}"
      class="{spaced ? 'spcaed' : ''} inp"
      style="{borderColor ? 'border:1px solid ' + borderColor  + ';': ''} {backgroundColor ? 'background-color:' + backgroundColor + ';' : ''} {full ? 'width:100%' : ''}"/>
  {/if}
  {#if type.includes('search')}
    <span class="searchicon" on:click="{click}">
      <Icon name="search" color="#aeaeae"/>
    </span>
  {/if}
  {#if required}
  <span class="required">
    *
  </span>
  {/if}
</span>
<style>
.required{color:#b8372a;padding:0px 10px;}
.input{display:flex;align-items:center;cursor:pointer}
.searchicon{margin-left:13px;}
.inp{font-family:inherit;resize:none;}
textarea.inp{min-height:80px;}
.inp.spcaed{margin:5px 0px;}
.inp{background-color:#3f3f3f;border:0px;padding: 10px 13px;font-size: 11pt;outline: none;color:inherit;}
.rounded .inp{border-radius:5px;}
.inp{opacity:0.8}
.inp:focus{opacity:1}
.input_title{opacity:0.6;font-weight:600;padding:0px 6px;font-size:8pt;display:block;}
.inp.search{padding:6px 10px;font-size:10pt;background-color:transparent;border:1px solid #fff}
.inp.search::placeholder{color:#fff}
.small .inp{font-size:9pt;padding:8px 12px;}
.inp{color:#fff}
:global(.theme-light .input .inp){background-color:#fff;border:1px solid #efefef;color:#222}
:global(.theme-light .input.disabled .inp){background-color:#efefef}
:global(.theme-dark .input.disabled .inp){background-color:#222;color:#fff}
</style>
