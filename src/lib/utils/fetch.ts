import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { store } from '$lib/store'
import { NotifyRedirect } from '$lib/ui'

interface ApiCall {
  message?: string | boolean,
  callback?: Function,
  keepLoading?: boolean,
  endLoading?: boolean,
  loading?: boolean,
  redirect?: 'refresh' | string
}
export const _FetchLoad = async (event, url, options) => {

  let data : any;
  if(options == undefined){
    options = {
      type: 'GET',
      body: {}
    }
  }else{
    options = {
      type: 'type' in options ? options.type : 'GET',
      body: 'body' in options ? options.type : {}
    }
  }

  return new Promise( async (resolve, reject) => {

  	await event.fetch(url, {
      method: options.type,
  		 ...(options.type.toLowerCase() != 'get' && options.type.toLowerCase() != 'head' &&{body: JSON.stringify(options.body)})}).then( async (res) => {

        if(res.status == 200){
          data = await res.json()
          resolve(data)
        }else{
          reject({ status: res.status })
        }
      })

      reject({ status: 401 })

  });

}


export const _FetchPrompt = (config: ApiCall) : void => {

  store.update( (data) => {
    data.prompt.show = true
    data.prompt.subTitle = typeof config.subTitle == 'string' ? config.subTitle : '변경할까요?'
    data.prompt.title = config.title ? config.title : '다시한번 확인해주세요.'
    data.prompt.callback = async () => {
      return await config.callback()
    }
    return data
  })

}
export const _FetchClient = (config: ApiCall) => {

  let origin = '/'
  let instance : AxiosInstance = axios.create({ baseURL: origin })

  if(config.keepLoading || config.loading){
    store.update( (data) => {
      data.loading.show = true
      return data
    })
  }
  instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // Do something with request error
    if(config.callback) config.callback()
    return Promise.reject(error);
  });

  if(config.redirect == 'refresh'){
    config.redirect = window.location.href
  }

  instance.interceptors.response.use(function (response) {
    if(config.callback) config.callback()
    if(config.message && config.redirect){
      NotifyRedirect({
        url: config.redirect,
        title: '성공',
        text: typeof config.message === 'boolean' ? '성공적으로 변경되었습니다.' : config.message
      })
    }else if(config.message){
      store.update( (data) => {

        if(config.endLoading || config.loading){
          data.loading.show = false
        }

        data.notification.show = true
        data.notification.text = typeof config.message === 'boolean' ? '성공적으로 변경되었습니다.' : config.message
        data.notification.title = '성공'

        return data
      })
    }


    return response.data;
  }, function (err) {

    store.update( (data) => {
      data.notification.show = true
      data.notification.text = err.response.data.message
      data.notification.title = '오류'

      if(config.endLoading || config.loading){
        data.loading.show = false
      }
      return data
    })

    if(config.callback) config.callback()
    return Promise.reject(err);

  });

  setTimeout( () => {
    store.update( (data) => {
      data.loading.show = false
      return data
    })
  }, 1000)

  return instance
}


export const _FetchServer = (config: ApiCall) => {

  let origin = import.meta.env.VITE_LOCAL_ENDPOINT
  let instance : AxiosInstance = axios.create({ baseURL: origin })
  instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    if(config.callback) config.callback()
    return response.data;
  }, function (err) {

    if(config.callback) config.callback()
    return Promise.reject(err);

  });


  return instance
}
