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

import(`./images/${name}.svg?raw`).then( (module) => {
  if(!module){
    iconSvg = ''
  }else{
    iconSvg = module.default.replace(/(height=".*?")|(width=".*?")/gi, '')
    iconSvg = iconSvg.replace('<svg', `<svg ${colorNotDefined ? 'colorNotDefined="true"' : ''} fill="${color}" width="${width}px" height="${height}px"`)
  }
})
</script>

{@html iconSvg}

<style>
.theme-dark svg[colorNotDefined=true]{fill:#fff}
.theme-light svg[colorNotDefined=true]{fill:#222}
:global(svg){padding:0px;margin:0px;box-sizing:border-box;}
</style>
