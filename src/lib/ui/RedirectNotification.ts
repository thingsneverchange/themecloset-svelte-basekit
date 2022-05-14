import { goto } from '$app/navigation'

interface NotifyRedirectInput {
  url: string,
  text: string,
  title: string
}
export const NotifyRedirect = (input : NotifyRedirectInput) :void => {

  localStorage.setItem('notifyMessageText', input.text)
  localStorage.setItem('notifyMessageTitle', input.title)

  window.location.href = input.url

}
