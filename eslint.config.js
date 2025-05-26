import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  {
    globals: globals.browser,
  },
  pluginJs.configs.recommended,
]
