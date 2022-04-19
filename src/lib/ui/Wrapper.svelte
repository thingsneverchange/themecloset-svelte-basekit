<script type="ts">
export let spacing: number = 0
export let spacingHorizontal: number = 0
export let spacingTop: number = 0;
export let spacingLeft: number = 0;
export let spacingRight: number = 0;
export let spacingBottom: number = 0;
export let align: string = 'left'
</script>

<div style="padding:{spacingHorizontal}px {spacing}px;
            text-align:{align};
            {spacingTop != 0 ? 'padding-top:' + spacingTop.toString() + "px;" : ''}
            {spacingLeft != 0 ? 'padding-left:' + spacingLeft.toString() + "px;" : ''}
            {spacingRight != 0 ? 'padding-right:' + spacingRight.toString() + "px;" : ''}
            {spacingBottom != 0 ? 'padding-bottom:' + spacingBottom.toString() + "px;" : ''}">
  <slot />
</div>
