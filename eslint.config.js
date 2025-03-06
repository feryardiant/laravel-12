'use strict'

import antfu from '@antfu/eslint-config'

export default antfu({
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
})
