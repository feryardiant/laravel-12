import type { route as ziggyRoute } from 'ziggy-js'

declare global {
  const route: typeof ziggyRoute

  interface Window {
    route: typeof ziggyRoute
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    route: typeof ziggyRoute
  }
}
