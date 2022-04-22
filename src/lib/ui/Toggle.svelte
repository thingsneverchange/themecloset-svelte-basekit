<script type="ts">

  export let enabled :boolean = false;
  export let callback: Function = undefined;
  export let width: number = 60

  let className : string = ''
  export { className as class }
  const toggle = () => {

    enabled = enabled ? false : true

    if(callback) callback()

  }

</script>
<div class="toggle {className}" style="max-width : {width}px" on:click="{toggle}">

    <div class="toggle_box {enabled ? 'enabled' : ''}">
      <span class="circle"></span>
    </div>
    <div class="toggle_tag">
      <slot/>
    </div>
</div>

<style>
*{box-sizing:border-box;}
.toggle{display:flex;cursor:pointer}
.toggle_box{border:1px solid #777;background-color:#777;border-radius:10px;width:100%;height:23px;padding:3px;margin-right:10px;position:relative;}
.toggle_box .circle{background-color:#aeaeae;padding:6px;display:block;border-radius:50%;width:15px;height:15px;position:absolute;left:3px;}
.toggle_box.enabled{background-color:#aeaeae;}
.toggle_box.enabled .circle{background-color:#ebe09f;left:initial;right:3px;}
.toggle_tag{font-size:10pt;}
:global(.theme-light .toggle .toggle_box){
  background-color:#efefef;
  border:1px solid #dedede
}
:global(.theme-light .toggle .circle){
  background-color:#fff;
}
:global(.theme-light .toggle .toggle_box.enabled){
  background-color:#f7ffc6;
}
</style>
