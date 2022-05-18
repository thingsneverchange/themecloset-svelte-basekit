import { writable } from 'svelte/store'

export interface UiStoreInterface {
  notification: {
    text: string,
    title: string,
    show: boolean
  },
  loading:{
    show: boolean
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
  }
})
