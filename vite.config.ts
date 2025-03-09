import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', ['APP'])
  const isDev = ['local', 'testing'].includes(env.APP_ENV)

  return {
    resolve: {
      alias: {
        '~': resolve(__dirname, 'resources/client'),
        '@': resolve(__dirname, 'resources/js'),
        'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
      },
    },

    build: {
      sourcemap: isDev,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          /**
           * @see https://rollupjs.org/configuration-options/#output-manualchunks
           */
          manualChunks: (id) => {
            if (id.includes('node_modules'))
              return 'vendor'
          },
        },
      },
    },

    define: {
      'import.meta.env.APP_NAME': JSON.stringify(env.APP_NAME),
      'import.meta.env.APP_LOCALE': JSON.stringify(env.APP_LOCALE),
      'import.meta.env.APP_URL': JSON.stringify(env.APP_URL),
      'import.meta.env.APP_ENV': JSON.stringify(env.APP_ENV),
    },

    plugins: [
      laravel({
        input: ['resources/client/app.ts', 'resources/css/app.css'],
        refresh: true,
      }),
      tailwindcss(),
    ],
  }
})
