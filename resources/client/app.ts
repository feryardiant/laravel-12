import type { AxiosStatic } from 'axios'
import axios from 'axios'
import { useSentry } from './sentry'

window.axios = axios

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

declare global {
  const axios: AxiosStatic

  interface Window {
    axios: AxiosStatic
  }
}

useSentry()
