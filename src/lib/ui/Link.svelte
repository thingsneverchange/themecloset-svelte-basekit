<script type="ts">
 export let href : string;
 export let target: target;

 const sendLink = (event) : void => {
   event.preventDefault()
   if(href){
     goto(href)
   }
 }
</script>
<a {href} {target} on:click="{sendLink}">
  <slot/>
</a>
