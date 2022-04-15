<script type="ts">
export let width : string = '100%';
export let height : string = '200';
export let src : string;
</script>

{#if src}
  <div class="backroundImage" style="height: {height.includes('%') ? height : height + 'px'};width: {width.includes('%') ? width : width + 'px'};">
    <image src="{src}"/>
  </div>
{/if}

<style>
.backroundImage{background-size:cover;background-position:center;overflow:hidden;position:relative;}
:global(.backroundImage img){position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;}
</style>
