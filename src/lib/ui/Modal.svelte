<script>
export let show = true;
export let headerTitle = ''
import { fly } from 'svelte/transition';
import Paragraph from '$lib/ui/Paragraph.svelte'
import Link from '$lib/ui/Link.svelte'
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

const toggleModal = () =>{
	show = show ? false : true
	if(show == false){
		dispatch('cancel')
	}
}
</script>
{#if show}
	<div class="modal" in:fly="{{ y: 300, duration: 500 }}" out:fly="{{ y: 300, duration: 400 }}">
		{#if headerTitle != ''}
			<div class="modal_header">
				<Paragraph size="{18}">
					{headerTitle}
				</Paragraph>
				<Link on:click="{toggleModal}">
					<Paragraph size="{14}" faded>
						닫기
					</Paragraph>
				</Link>
			</div>
		{/if}
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
.lightroom{background-color:rgba(0,0,0,0.4);position:fixed;top:0px;z-index:399999998;left:0px;width:100%;height:100%;cursor:pointer}
.modal{width:100%;left:0px;bottom:0px;position:fixed;z-index:499999998;overflow: scroll;
    max-height: 100%;}
:global(.theme-light .modal){background-color:#fff;}
:global(.theme-dark .modal){background-color:#222;}
.modal_header{padding:20px;padding-bottom:0px;}
.modal_header{display:flex;justify-content: space-between}
</style>
