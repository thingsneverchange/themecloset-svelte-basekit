import Cookies from 'js-cookie';

const extractCookies = (cookieStr: string) :object =>{
  let items: {[k: string]: string} = {}
  cookieStr.split('; ').map( (value: string) :void => {

    items[value.split('=')[0]] = value.split('=')[1]


  })
  return items
}


export const setCookie = ( name: string, content: string) : boolean => {

    Cookies.set(name, content, { expires: 7 })

    return true

}
export const getCookies = ( cookies: string | null ) : any => {
    if(cookies == null || cookies == '') return {}
    return extractCookies(cookies)
}
export const removeCookie = ( name: string ) : void => {
    Cookies.remove(name)
}
