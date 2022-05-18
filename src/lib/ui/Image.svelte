<script type="ts">
import { onMount } from 'svelte'

interface ColorObject {
  r:number, g: number, b: number
}
const loadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener('load', () => {

      resolve(image);
    });
    image.src = url;
  });
}

export let src : string
export let fileWidth : number = 350;
export let quality : number = 60;
export let width: number | string = 'auto';
export let height: number | string = 'auto';
export let cdnDisabled : boolean = false;;
export let alt : string = '';
export let preload : boolean = false;
export let onload : Function = null;
export let rounded: boolean = false;
export let imageColor : ColorObject = {
  r: 174, g: 174, b: 174
} as ColorObject
export let cdnURL : string = ''
let widthValue : number = fileWidth
let computedURL : string;
let isLoaded : 'unload' | 'onload' | 'loaded' = 'unload';
let isFixedSize : boolean = width != 'auto' && height != 'auto' ? true : false
let applySizeElement : string = width && height ? `width:${width == 'auto' ? 'auto': width + 'px'};height:${height == 'auto' ? 'auto': height + 'px'}` : ''
let orientation : string;

if(src){

  computedURL = cdnDisabled ? src : `${cdnURL}${src}${src.includes('?') ? '&' : '?'}width=${widthValue.toString()}&format=auto&q=${quality}`

}



onMount( async() : Promise<void> => {
  isLoaded = 'onload'
  if(src != '' && src != null){
    await loadImage(computedURL).then( (data: HTMLImageElement) :void => {

      orientation = data.naturalHeight >= data.naturalWidth ? 'horizontal' : 'landscape'
      if(isFixedSize){
        if(orientation == 'horizontal') orientation = 'horizontal'
        if(orientation == 'landscape') orientation = 'landscape'
      }
      if(onload){
        onload()
      }
      isLoaded = 'loaded'

    })
  }
  isLoaded = 'loaded'

})

</script>

{#if preload == false}
  <div class="imageContent {orientation} {isFixedSize ? 'fixedSize' : ''} {rounded ? 'rounded' : ''}" style="{applySizeElement}">

    <div style="{Object.keys(imageColor).length === 0 ? '' : `background-color:rgb(${imageColor.r},${imageColor.g},${imageColor.b});` } width:{width != 'auto' ? width+'px' : '100%'}; height:{height != 'auto' ? height+'px' : '100%'}">
       {#if src}
         <img
           class="{isLoaded}"
           width="{width ? width + 'px' : ''}"
           height="{height ? height + 'px' : ''}"
           src="{computedURL}" alt="{alt}" />
       {/if}
    </div>
  </div>
{/if}


<svelte:head>
  {#if preload}
    <link rel="prefetch" href="{computedURL}"
      as="image">
  {/if}
</svelte:head>

<style>

@keyframes slowDown {
	0% {
    opacity:0;
	}
	100% {
    opacity:1;
	}
}
.imageContent.rounded{border-radius:5px;}

img{display:block;max-width:100%;}
.imageContent img.unload, .imageContent img.onload{opacity: 0}
.imageContent img.loaded{
  opacity:1;
	animation: slowDown 0.4s linear;
}
.imageContent.horizontal:not(.fixedSize) img{width:100%;height:auto;}
.imageContent.landscape:not(.fixedSize) img{height:100%;width:auto;}
.imageContent{overflow:hidden;position:relative;}
.loading-box{display:inline-block;background-color:#474747;}
.imageContent.fixedSize img{object-fit: cover; }
.imageContent{position:relative;}

</style>
