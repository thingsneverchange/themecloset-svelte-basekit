<script type="ts">
export let spacing: number = 0
export let spacingHorizontal: number = 0
export let spacingTop: number = 0;
export let spacingLeft: number = 0;
export let spacingRight: number = 0;
export let spacingBottom: number = 0;
export let align: string = 'left'
export let height: string = 'auto'
export let fixed: boolean = false;
export let top: number = 0;
export let left: number = 0;
export let maxWidth: string = 'auto';
export let center: boolean = false;
export let backgroundColor: string = 'initial';
</script>

<div style="padding:{spacingHorizontal}px {spacing}px;
            text-align:{align};
            width:100%;
            {fixed ? 'position:fixed;': ''}
            {fixed ? 'top:' + top + 'px;': '' }
            {fixed ? 'left:' + left + 'px;': '' }
            height:{height};
            background-color: {backgroundColor};
            {center ? 'margin:auto;' : ''}
            max-width: {maxWidth};
            {spacingTop != 0 ? 'padding-top:' + spacingTop.toString() + "px;" : ''}
            {spacingLeft != 0 ? 'padding-left:' + spacingLeft.toString() + "px;" : ''}
            {spacingRight != 0 ? 'padding-right:' + spacingRight.toString() + "px;" : ''}
            {spacingBottom != 0 ? 'padding-bottom:' + spacingBottom.toString() + "px;" : ''}">
  <slot />
</div>
