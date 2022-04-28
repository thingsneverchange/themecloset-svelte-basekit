<script type="ts">
import { store } from '$lib/store'
import { fly } from 'svelte/transition';
import Icon from '$lib/ui/Icon.svelte'
import { onMount } from 'svelte'
import dayjs from 'dayjs'
import Button from '$lib/ui/Button.svelte'
import { getCookies, setCookie, removeCookie } from '$lib/utils/cookies';
import { createEventDispatcher } from 'svelte';

export let title;
export let show = false;
export let subTitle;
const dispatch = createEventDispatcher();
const confirm = (event) :void => {
  dispatch('confirm', event.detail)
  toggle()
}
const toggle = () :void => {
  show = show ? false : true
}

</script>
<div class="prompt_container">
  {#if show}
  <div class="prompt" in:fly="{{ y: -30, duration: 200 }}" out:fly="{{ y: -30, duration: 200 }}">
    <div class="content">
      <div class="head">
        {#if title}
          <h3>{title}</h3>
        {/if}
        {#if subTitle}
          <h4>{subTitle}</h4>
        {/if}
        <span on:click="{confirm}">
          예
        </span>
        <span on:click="{toggle}">
          아니오
        </span>
      </div>
    </div>
  </div>
  {/if}
  <div class="promot_trigger" on:click="{toggle}">
    <slot/>
  </div>
</div>
<style>
h3{font-size:11.5pt;padding-bottom:10px;font-weight:600;}
h4{padding-bottom:10px;opacity:0.8}
.prompt_container, .promot_trigger{display:inline-block;}
.prompt{word-break: break-word;
    white-space: normal;
	box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;position:fixed;top:20px;left:50%;margin-left:-120px;width:240px;border-radius:7px;padding:20px 25px;font-size:10pt;z-index:999999}
:global(.theme-light .prompt){background-color:#fff;color:#222;}
:global(.theme-dark .prompt){background-color:#222;color:#fff;}
:global(.theme-light .close svg){fill: #222 !important}
.content .head span{font-weight:600;padding-right:25px;font-size:10pt;cursor:pointer}
</style>
