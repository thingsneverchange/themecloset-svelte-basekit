import { writable } from 'svelte/store'

export interface UiStoreInterface {
  notification: {
    text: string,
    title: string,
    show: boolean
  },
  loading:{
    show: boolean
  },
  theme: string,
  prompt:{
    title: string,
    subTitle: string,
    show: boolean,
    callback: Function
  }
}

export const store = writable<UiStoreInterface>({
  notification: {
    text: '',
    title: 'New message',
    show: false
  },
  theme: 'light',
  loading:{
    show: false
  },
  prompt: {
    title: '',
    subTitle: '',
    show: false,
    callback: () => {}
  }
})
