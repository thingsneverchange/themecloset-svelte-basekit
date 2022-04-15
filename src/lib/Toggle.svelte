<script type="ts">
  import { UiStore } from '$lib/store'

  export let enabled :boolean = false;
  export let callback: Function = undefined;
  export let width: number = 60

  let className
  export { className as class }
  const toggle = () => {

    enabled = enabled ? false : true

    if(callback) callback()

  }

</script>
<div data-theme="{$UiStore.theme}" class="toggle {className}" style="max-width : {width}px" on:click="{toggle}">

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
.toggle_box.enabled{background-color:#aeaeae;border:1px solid #aeaeae;}
.toggle_box.enabled .circle{background-color:#222;left:initial;right:3px;}
.toggle_tag{font-size:10pt;}
.toggle[data-theme="light"] .toggle_box{
  background-color:#efefef;
  border:1px solid #dedede
}
.toggle[data-theme="light"] .circle{
  background-color:#fff;
}
.toggle[data-theme="light"] .toggle_box.enabled{
  background-color:#54b946;
}
</style>
