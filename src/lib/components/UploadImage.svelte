<script type="ts">
  import axios from 'axios';
  import FullLoading from '$lib/components/FullLoading.svelte'
  import { getCookies } from '$lib/utils/cookies';

  export let value : string = undefined;
  export let callback : Function;
  export let showLoading : boolean = false;
  export let customLoading : boolean = false;
  export let publicUpload: boolean = false
  export let onError: Function;

  let endpoint : string = 'https://api.themecloset.com/spaces/upload/file'

  if(publicUpload){
    endpoint = 'https://api.themecloset.com/spaces/upload/public'
  }

  const clickedInput = (): void => {
    if(!publicUpload) onError('Plerase login first.');
  }

  const getFile = async (event: Event) : Promise<void> => {

    let formData = new FormData();
    let cookies = getCookies(document.cookie)

    formData.append("image", (<HTMLInputElement>event.target).files[0]);

    showLoading = true

    await axios.post(endpoint, formData, {
      headers : { 'Authorization' : 'Bearer jwt=' + cookies.jwt }
    }).then( (data) => {

      value = data.data

      if(callback) callback(value); showLoading = false;

      if(!callback) showLoading = false

    }).catch( (error) => {

      showLoading = false

      if(onError) onError(error.response.data.error)

    })


  }
</script>
{#if showLoading && customLoading == false}
  <FullLoading />
{/if}
<div class="uploadFile" on:click={clickedInput}>

  <slot />
  <input type="file" on:change={getFile} accept="image/png, image/gif, image/jpeg" />

</div>
<style>
.uploadFile{position:relative;cursor:pointer;display:inline-block;}
.uploadFile input{position:absolute;top:0px;left:0px;width:100%;height:100%;opacity:0;}
</style>
