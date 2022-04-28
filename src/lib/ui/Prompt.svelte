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
const dispatch = createEventDispatcher();
const confirm = (event) :void => {
  dispatch('confirm', event.detail)
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
          <h4>환불을 진행하겠습니까?</h4>
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
  <div on:click="{toggle}">
    <slot/>
  </div>
</div>
<style>
h4{font-size:9pt;padding-bottom:10px;}
p{opacity:0.8}
.prompt{
  text-align:center;
	box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;position:fixed;top:20px;left:50%;margin-left:-100px;width:200px;border-radius:7px;padding:15px 25px;font-size:10pt;z-index:999999}
:global(.theme-light .prompt){background-color:#fff;color:#222;}
:global(.theme-dark .prompt){background-color:#222;color:#fff;}
:global(.theme-light .close svg){fill: #222 !important}

.content .head span{font-weight:600;padding:0px 15px;font-size:10pt;cursor:pointer}
</style>
