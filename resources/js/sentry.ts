import type { App } from 'vue'
import {
  browserProfilingIntegration,
  browserTracingIntegration,
  init,
  replayIntegration,
  vueIntegration,
} from '@sentry/vue'

export function initializeSentry(app: App) {
  if (!import.meta.env.SENTRY_DSN)
    return

  init({
    app,
    dsn: import.meta.env.SENTRY_DSN,
    environment: import.meta.env.APP_ENV,
    integrations(integrations) {
      integrations.push(
        browserTracingIntegration(),
        replayIntegration({
          maskAllInputs: true,
          maskAllText: false,
          networkDetailAllowUrls: [location.origin],
        }),
        vueIntegration({
          tracingOptions: { trackComponents: true },
        }),
      )

      if (import.meta.env.SENTRY_PROFILING_ENABLE)
        integrations.push(browserProfilingIntegration())

      return integrations
    },
    profilesSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
    tracesSampleRate: 1.0,
    tracePropagationTargets: [location.origin],
  })
}
