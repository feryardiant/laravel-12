'use strict'

import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
  },
  ignores: [
    '**/build',
    'storage/**',
  ],
  typescript: {
    overrides: {
      'ts/strict-boolean-expressions': ['off'],
    },
  },
})
