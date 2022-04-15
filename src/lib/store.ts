import { writable } from 'svelte/store'

export interface UiStoreInterface {
  theme: 'dark' | 'light',
  fontSize: number,
  fontSizeUnit: string,
  cdnURL: string
}

export const store = writable<UiStoreInterface>({
  theme: 'light',
  fontSize: 16,
  fontSizeUnit: 'px',
  cdnURL: 'https://tcdn.imgix.net/api/'
})
