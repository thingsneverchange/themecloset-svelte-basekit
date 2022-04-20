<script type="ts">
export let price : number | string; // product collection ts;
export let symbol : string = '₩'

if(parseInt(price) == 'NaN'){
  price = 0
}else{
  price = parseInt(price)
}

</script>

{ price.toLocaleString() }
asdf
