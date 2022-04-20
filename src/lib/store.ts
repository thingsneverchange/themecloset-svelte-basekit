import { writable } from 'svelte/store'

export interface UiStoreInterface {
  theme: 'dark' | 'light',
  fontSize: number,
  fontSizeUnit: string,
  cdnURL: string
  baseURL: string,
  fontFamily: string,
  notification: {
    text: string,
    title: string,
    show: boolean
  }
}

export const store = writable<UiStoreInterface>({
  theme: 'light',
  fontSize: 16,
  fontSizeUnit: 'px',
  cdnURL: 'https://tcdn.imgix.net/api/',
  baseURL: '',
  fontFamily: 'arial',
  notification: {
    text: '',
    title: 'New message',
    show: false
  }
})

export const update = ($store, newStore) : void => {
  store.set({...{}, ...$store, ...newStore})
  store.update(() => {
    return {...{}, ...$store, ...newStore}
  })
}
