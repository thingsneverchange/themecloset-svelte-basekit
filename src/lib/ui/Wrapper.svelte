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
export let rounded: boolean = false;
export let borderBottom: string = '';
export let borderLeft: string = '';
export let borderRight: string = '';
export let borderTop: string = '';
export let display: string = 'block';
export let style: string = '';
export let element : HTMLElement;

let classNames : string = '';
export { classNames as class }

</script>

<div class="{classNames ? classNames : ''}" bind:this="{element}" style="padding:{spacingHorizontal}px {spacing}px;
            text-align:{align};
            width:100%;
            display: {display};
            {fixed ? 'position:fixed;': ''}
            {fixed ? 'top:' + top + 'px;': '' }
            {fixed ? 'left:' + left + 'px;': '' }
            {borderBottom ? 'border-bottom:' +  borderBottom + ';': '' }
            {borderTop ? 'border-top:' +  borderTop  + ';': '' }
            {borderRight ? 'border-right:' +  borderRight  + ';': '' }
            {borderLeft ? 'border-left:' +  borderLeft  + ';': '' }
            height:{height};
            {rounded ? 'border-radius:10px;' : ''}
            background-color: {backgroundColor};
            {center ? 'margin:auto;' : ''}
            max-width: {maxWidth};
            {spacingTop != 0 ? 'padding-top:' + spacingTop.toString() + "px;" : ''}
            {spacingLeft != 0 ? 'padding-left:' + spacingLeft.toString() + "px;" : ''}
            {spacingRight != 0 ? 'padding-right:' + spacingRight.toString() + "px;" : ''}
            {spacingBottom != 0 ? 'padding-bottom:' + spacingBottom.toString() + "px;" : ''}
            {style}">
  <slot />
</div>
