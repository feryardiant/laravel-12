import {
  browserProfilingIntegration,
  browserTracingIntegration,
  init,
  replayIntegration,
} from '@sentry/react'

export function initializeSentry() {
  if (!import.meta.env.SENTRY_DSN)
    return

  init({
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
