<script>
import { value } from '$lib/interface'
import Icon from '$lib/ui/Icon.svelte'

const normalizeNotification = () => {
  setTimeout( () => {
    if(value().notification.show){
      store.update((data) => {
        data.notification.show = false
        data.notification.text = ''
        return data
      })
    }
  }, 3500)
}
$: value().notification.show, normalizeNotification()
</script>

<div class="notification {value().theme}">
  <div class="notification_content">
    <div class="head">
      <h4>{value().notification.title}</h4>
      <p>{value().notification.text}</p>
    </div>
    <div class="close">
      <Icon name="Clock" width="{11}" height="{11}" color="{value().theme == 'light' ? '#222' : '#fff'}" />
    </div>
  </div>
</div>
<style>

@keyframes slowDown {
	0% {
    opacity:0;
		transform:translateY(-20px)
	}
	100% {
    opacity:1;
		transform:translateY(0px)
	}
}

.notification{
	animation: slowDown 0.2s linear;
}
.notification_content{display:flex;align-items: top;justify-content: space-between}
h4{font-size:8pt;font-weight:600;}
p{opacity:0.8}
.notification{
	box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;position:fixed;top:20px;left:50%;margin-left:-150px;width:300px;border-radius:7px;background-color:#222;color:#fff;padding:15px 25px;font-size:10pt;}
.notification.light{
  background-color:#fff;color:#222;
}
</style>
