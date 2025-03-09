interface ImportMetaEnv {
  APP_ENV?: 'local' | 'testing' | 'staging' | 'production'
  APP_LOCALE?: 'en' | 'id'
  APP_NAME?: string
  APP_URL?: string
  SENTRY_DSN?: string
  SENTRY_PROFILING_ENABLE?: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
