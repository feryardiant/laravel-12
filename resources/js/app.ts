import type { DefineComponent } from 'vue'

import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createApp, h } from 'vue'
import { ZiggyVue } from 'ziggy-js'
import { initializeTheme } from './composables/useAppearance'
import { initializeSentry } from './sentry'
import '../css/app.css'

const appName = import.meta.env.APP_NAME ?? 'Laravel'

void createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: async name => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)

    initializeSentry(app)

    app.mount(el)
  },
  progress: {
    color: '#4B5563',
  },
})

// This will set light / dark mode on page load...
initializeTheme()
