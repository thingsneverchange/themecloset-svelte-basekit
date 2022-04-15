<script type="ts">
export let name : string = '';
export let width : number  = 15;
export let height : number  = 15;
export let color : string = '#222'

let iconSvg : string = '';

import(`./images/${name}.svg?raw`).then( (module) => {
  if(!module){
    iconSvg = ''
  }else{
    iconSvg = module.default.replace(/(height=".*?")|(width=".*?")/gi, '')
    iconSvg = iconSvg.replace('<svg', `<svg fill="${color}" width="${width}px" height="${height}px"`)
  }
})
</script>

{@html iconSvg}

<style>

:global(svg){padding:0px;margin:0px;box-sizing:border-box;}
</style>
