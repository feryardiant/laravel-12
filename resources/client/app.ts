import type { AxiosStatic } from 'axios'
import axios from 'axios'

window.axios = axios

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

declare global {
  const axios: AxiosStatic

  interface Window {
    axios: AxiosStatic
  }
}
