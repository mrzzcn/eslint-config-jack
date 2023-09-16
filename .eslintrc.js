module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:import/errors', 'eslint:recommended', 'airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-nested-ternary': 'off',
    'no-constant-condition': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      }
    ],
    'no-irregular-whitespace': [
      'error',
      {
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
      }
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 4,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 4,
        },
        ImportDeclaration: { consistent: true },
        ExportDeclaration: { consistent: true },
      },
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 3,
      }
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      }
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-typescript'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: { 'no-undef': 'off' },
      parserOptions: {
        project: './tsconfig.json'
      },
      settings: {
        'import/extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.d.ts', '.tsx'] },
        'import/resolver': {
          node: {
            extensions: [
              '.js',
              '.jsx',
              '.ts',
              '.d.ts',
              '.tsx',
            ],
          },
          alias: {
            extensions: [
              '.js',
              '.jsx',
              '.ts',
              '.tsx',
            ],
          },
          "typescript": {
            alwaysTryTypes: true,
            project: './tsconfig.json'
          }
        }
      }
    },
  ],
}
