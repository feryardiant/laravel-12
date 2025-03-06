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
  ],
  react: {
    overrides: {
      'react/no-array-index-key': ['off'],
      'react/no-unstable-context-value': ['off'],
      'react/no-unstable-default-props': ['off'],
      'react-dom/no-unsafe-target-blank': ['off'],
      'react-refresh/only-export-components': ['off'],
    },
  },
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
})
