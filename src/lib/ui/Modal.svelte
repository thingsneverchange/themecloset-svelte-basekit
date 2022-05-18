<script>
export let show = false;
import { fly } from 'svelte/transition';

const toggleModal = () =>{
	show = show ? false : true
}
</script>
{#if show}
	<div class="modal" in:fly="{{ y: 300, duration: 500 }}" out:fly="{{ y: 300, duration: 400 }}">
		<div class="modal_content">
			<slot />
		</div>
	</div>
{/if}
{#if show}
	<div on:click="{toggleModal}" class="lightroom" in:fly="{{ duration: 200 }}" out:fly="{{ duration: 200 }}">
	</div>
{/if}
<style>
.modal_content{padding:20px;}
.trigger{cursor:pointer}
.lightroom{background-color:rgba(0,0,0,0.4);position:fixed;top:0px;z-index:1999999998;left:0px;width:100%;height:100%;cursor:pointer}
.modal{width:100%;left:0px;bottom:0px;position:fixed;z-index:2999999998;}
:global(.theme-light .modal){background-color:#fff;}
:global(.theme-dark .modal){background-color:#222;}
</style>
