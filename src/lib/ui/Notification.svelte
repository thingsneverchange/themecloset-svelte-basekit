<script type="ts">
import { store } from '$lib/store'
import { fly } from 'svelte/transition';
import Icon from '$lib/ui/Icon.svelte'
import { onMount } from 'svelte'
import { getCookies, setCookie, removeCookie } from '$lib/utils/cookies';

interface Notification{
  text: string,
  show: boolean,
  title: boolean
}
let notifcationItems: Notification[] = [] as Notification[]

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
  if($store.notification.show){
    notifcationItems.unshift({
      text: $store.notification.text,
      title: $store.notification.title,
      show: true
    })
    notifcationItems = notifcationItems
    setTimeout( () => {
      notifcationItems.pop()
      notifcationItems = notifcationItems
    }, 2000)
  }
}
$: $store.notification.show, normalizeNotification()
</script>
{#if notifcationItems.length != 0}
  <div class="notification_container">
    {#each notifcationItems as notification, index}
        <div class="notification" in:fly="{{ y: -30, duration: 200 }}" out:fly="{{ y: -30, duration: 200 }}">
          <div class="notification_content">
            <div class="head">
              <h4>{notification.title}</h4>
              <p>{notification.text}</p>
            </div>
            <div class="close">
              <Icon name="Clock" width="{11}" height="{11}" color="#fff" />
            </div>
          </div>
        </div>
    {/each}
  </div>
{/if}
<style>
.notification_container{position:fixed;top:20px;left:50%;margin-left:-150px;width:300px;z-index:9999999}
.notification_content{display:flex;align-items: top;justify-content: space-between}
h4{font-size:8pt;font-weight:600;}
p{opacity:0.8}
.notification{
	box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;border-radius:7px;padding:15px 25px;font-size:10pt;z-index:999999;margin-bottom:20px;}
:global(.theme-light .notification){background-color:#fff;color:#222;}
:global(.theme-dark .notification){background-color:#222;color:#fff;}

:global(.theme-light .close svg){fill: #222 !important}
</style>
