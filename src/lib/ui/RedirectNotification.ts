import { goto } from '$app/navigation'
import { setCookie } from '$lib/utils/cookies';

interface NotifyRedirectInput {
  url: string,
  text: string,
  title: string
}

export const NotifyRedirect = (input : NotifyRedirectInput) :void => {

  setCookie('notifyMessageText', encodeURIComponent(input.text))
  setCookie('notifyMessageTitle', encodeURIComponent(input.title))

  window.location.href = input.url

}
