import type { route as routeFn } from 'ziggy-js'

import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createRoot } from 'react-dom/client'
import { initializeTheme } from './hooks/use-appearance'
import '../css/app.css'

declare global {
  const route: typeof routeFn
}

const appName = import.meta.env.VITE_APP_NAME ?? 'Laravel'

void createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: async name => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(<App {...props} />)
  },
  progress: {
    color: '#4B5563',
  },
})

// This will set light / dark mode on load...
initializeTheme()
