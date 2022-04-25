import { goto } from '$app/navigation'
import { setCookie } from '$lib/utils/cookies';

interface NotifyRedirectInput {
  url: string,
  text: string,
  title: string
}

export const NotifyRedirect = (input : NotifyRedirectInput) :void => {

  setCookie('notifyMessageText', input.text)
  setCookie('notifyMessageTitle', input.title)

  goto(input.url)

}
