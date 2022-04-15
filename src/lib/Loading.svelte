<script type="ts">
 export let color : string = '#aeaeae';
 export let size : number = 20
 export let offsetLeft : number = 0
</script>
<span style="width:{size}px;margin-left:{offsetLeft}px">
  <svg class="spinner" viewBox="0 0 50 50">
    <circle class="path" cx="25" cy="25" r="20" stroke="{color}" fill="none" stroke-width="5"></circle>
  </svg>
</span>

<style>
span{display:inline-block;}
.spinner {
  animation: rotate 2s linear infinite;

}
  .spinner .path {
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}


</style>
