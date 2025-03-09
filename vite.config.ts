import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import laravel from 'laravel-vite-plugin'
import tailwindcss from 'tailwindcss'
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

    optimizeDeps: {
      exclude: [
        'vue-demi',
      ],
    },

    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },

    plugins: [
      laravel({
        input: ['resources/js/app.ts'],
        refresh: true,
      }),
      vue({
        template: {
          transformAssetUrls: {
            base: null,
            includeAbsolute: false,
          },
        },
      }),
    ],
  }
})
