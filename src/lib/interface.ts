import { createStore, getValue } from '@logux/state'
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
const store = createStore<UiStoreInterface>(() : void => {
  store.set({
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
});

export const scan = () : UiStoreInterface => {
  return getValue(store)
}
export const update = (newValue) => {
  store.set({...value(), ...newValue})
}
