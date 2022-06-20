<script type="ts">
import { isNumber } from 'lodash-es'
export let price : number = 0;
export let symbol : string = '₩'

let computedPirce: number = 0
if(price != 0){
	if(isNumber(price)){
		computedPirce = price.toLocaleString()
	}
}
</script>
{symbol}{computedPirce}
