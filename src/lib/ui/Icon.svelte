<script type="ts">

export let name : string = '';
export let width : number  = 15;
export let height : number  = 15;
export let color : string = null

let iconSvg : string = '';
let colorNotDefined : boolean = false;

if(color == null){
  colorNotDefined = true
}

import(`./foo/${bar}.js`).then( (module) => {
  if(!module){
    iconSvg = ''
  }else{
    iconSvg = module.default.replace(/(height=".*?")|(width=".*?")/gi, '')
    iconSvg = iconSvg.replace('<svg', `<svg ${colorNotDefined ? 'colornotdefined="true"' : ''} fill="${color ? `fill="${color}"` : ''}" width="${width}px" height="${height}px"`)
  }
})
</script>

{@html iconSvg}

<style>
:global(.theme-dark svg[colornotdefined=true]){fill:#fff !important}
:global(.theme-light svg[colornotdefined=true]){fill:#222 !important}
:global(svg){padding:0px;margin:0px;box-sizing:border-box;}
</style>
