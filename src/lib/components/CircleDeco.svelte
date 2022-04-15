<script type="ts">
//@ts-nocheck
import CircleType from 'circletype';
import { onMount } from 'svelte'

export let fontSize : number = 13;
export let letterSpacing : number = 0.4;
export let width : number = 100;
export let text : string = '';
export let noAnimation : boolean = false;
export let backgroundColor : string | undefined = undefined;

let circleDecoElement : HTMLElement;

onMount( () :void => {
  const circleType = new CircleType(circleDecoElement);
  circleType.radius(width / 2)
  circleType.refresh()
})
</script>

{#if text != ''}
  <div style="background-color:{backgroundColor};width: {width}px; font-size: {fontSize}px; letter-spacing: {letterSpacing}pt">
    <div class="circleDeco {noAnimation ? '' : 'animation'}" bind:this={circleDecoElement}>
      { text }
    </div>
  </div>
{/if}

<style>

@keyframes circleRotateDeco {
	0% {
		transform:rotate(0deg)
	}
	100% {
		transform:rotate(2000deg)
	}
}

.circleDeco.animation{
	animation: circleRotateDeco 80s infinite;
}

</style>
