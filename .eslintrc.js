module.exports = {
  root: true,

  globals: {
    vi: true
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },

  parser: 'vue-eslint-parser',

  plugins: ['vue', '@typescript-eslint'],

  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
    es2021: true
  },

  rules: {
    'prefer-destructuring': ['error', { object: true, array: false }],
    // eslint-plugin-vue
    'vue/no-v-html': 'off',
    'vue/attributes-order': 'off',
    'vue/require-v-for-key': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-components': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/return-in-computed-property': 'off',
    // typescript-eslint
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'prefer-object-spread': 'off'
  },

  ignorePatterns: ['es', 'lib', 'node_modules'],

  overrides: [
    {
      files: ['*.vue'],
      parser: require.resolve('vue-eslint-parser')
    },
    {
      files: ['**/*.md/*.js', '**/*.md/*.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off'
      }
    },
    {
      files: ['src/**/*'],
      excludedFiles: ['**/test/*', '**/demo/*'],
      rules: {
        // since we target ES2015 for baseline support, we need to forbid object
        // rest spread usage (both assign and destructure)
        'no-restricted-syntax': [
          'error',
          'ObjectExpression > SpreadElement',
          'ObjectPattern > RestElement'
        ]
      }
    }
  ]
}
