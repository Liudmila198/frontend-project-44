import globals from 'globals';
import pluginJs from '@eslint/js';
import airbnb from 'eslint-config-airbnb-base'; 

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest', 
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  ...airbnb, 
  {
    rules: {
      'no-console': 'warn', 
      'import/prefer-default-export': 'off', 
    },
  },
];
