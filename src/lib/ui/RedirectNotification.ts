import { goto } from '$app/navigation'

interface NotifyRedirectInput {
  url: string,
  text: string,
  title: string
}


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export const NotifyRedirect = (input : NotifyRedirectInput) :void => {

  setCookie('notifyMessageText', encodeURIComponenent(input.text), 240)
  setCookie('notifyMessageTitle', encodeURIComponenent(input.title), 240)

  window.location.href = input.url

}
