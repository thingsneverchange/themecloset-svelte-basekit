import axios from 'axios'
import { store } from '$lib/store'
import type { AxiosInstance } from 'axios'

export default (event ?: Extender.RequestEvent) => {

  let origin = $store.baseURL
  if(origin == ''){
    throw 'Origin is not specified in store.'
  }
  let instance : AxiosInstance = axios.create({ baseURL: origin })
  if(event){
    if(event.session){
      instance = axios.create({
        baseURL: origin,
        headers: event.session.jwt ? {'Authorization': 'Bearer ' + event.session.jwt} : {}
      });
    }else{
      instance = axios.create({ baseURL: origin })
    }
  }

  return instance
}
