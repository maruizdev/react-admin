import Cookies from 'js-cookie'

interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

export const guardarCookie = (
  key: string,
  value: string,
  options?: CookieOptions
) => {
  Cookies.set(key, value, {
    secure: import.meta.env.PUBLIC_COOKIE_SECURE === 'true',
    sameSite: 'strict',
    ...options
  })

  console.log('guardar cookiee: ', key, value)
}

export const leerCookie = (key: string): string | undefined => {
  return Cookies.get(key)
}

export const eliminarCookie = (key: string) => {
  // imprimir(`🍪 🗑`, key)
  return Cookies.remove(key)
}

export const eliminarCookies = () => {
  Object.keys(Cookies.get()).forEach((cookieName) => {
    // imprimir(`🍪 🗑`, cookieName)
    Cookies.remove(cookieName)
  })
}
