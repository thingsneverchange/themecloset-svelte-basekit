<script type="ts">
import { store } from '$lib/store'
import { fly } from 'svelte/transition';
import Icon from '$lib/ui/Icon.svelte'
import { onMount } from 'svelte'
import dayjs from 'dayjs'
import { getCookies, setCookie, removeCookie } from '$lib/utils/cookies';

let uniqueKey : string = ''
onMount( () : void => {
  let { notifyMessageText, notifyMessageTitle } = getCookies(document.cookie)

  if(notifyMessageText){
    setTimeout( () => {
        store.update((data) => {
          data.notification.text = decodeURIComponent(notifyMessageText)
          data.notification.title = decodeURIComponent(notifyMessageTitle)
          data.notification.show = true
          return data
        })
    }, 500)
    removeCookie('notifyMessageText')
    removeCookie('notifyMessageTitle')
  }

})
const normalizeNotification = () => {
  uniqueKey = dayjs().unix()
  setTimeout( () => {
    if($store.notification.show){
      store.update((data) => {
        data.notification.text = ''
        data.notification.show = false
        return data
      })
    }
  }, 2000)
}
$: $store.notification.show, normalizeNotification()
</script>
{#if $store.notification.show}
  {#key uniqueKey}
    <div class="notification" in:fly="{{ y: -30, duration: 200 }}" out:fly="{{ y: -30, duration: 200 }}">
      <div class="notification_content">
        <div class="head">
          <h4>{$store.notification.title}</h4>
          <p>{$store.notification.text}</p>
        </div>
        <div class="close">
          <Icon name="Clock" width="{11}" height="{11}" color="#fff" />
        </div>
      </div>
    </div>
  {/key}
{/if}
<style>
.notification_content{display:flex;align-items: top;justify-content: space-between}
h4{font-size:8pt;font-weight:600;}
p{opacity:0.8}
.notification{
	box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;position:fixed;top:20px;left:50%;margin-left:-150px;width:300px;border-radius:7px;background-color:#222;color:#fff;padding:15px 25px;font-size:10pt;z-index:999999}
:global(.theme-light .notification){background-color:#fff;color:#222;}
:global(.theme-light .close svg){fill: #222 !important}
</style>
