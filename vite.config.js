import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'resources/client'),
      '@': resolve(__dirname, 'resources/js'),
      'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
    },
  },

  plugins: [
    laravel({
      input: ['resources/client/app.ts', 'resources/css/app.css'],
      refresh: [`resources/views/**/*`],
    }),
    tailwindcss(),
  ],
})
