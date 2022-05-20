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
