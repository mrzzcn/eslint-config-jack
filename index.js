module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: [ require.resolve('./.eslintrc') ],
  rules: {
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        amd: true,
        caseSensitive: true,
        caseSensitiveStrict: true,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-cycle': 'error',
    'import/prefer-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: ['**/*.test.js', '**/*.spec.js'],
        peerDependencies: ['**/*.test.js', '**/*.spec.js'],
      },
    ],
    'arrow-body-style': 'off',
    'array-bracket-newline': [
      'error',
      'consistent',
    ],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-spacing': [
      'error',
      'never',
      {
        singleValue: true,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    camelcase: ['error', { allow: ['^UNSAFE_'] }],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
        allowPattern: '^[a-z]+(_[a-z]+)+$',
      },
    ],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-len': [
      'error',
      {
        code: 80,
        comments: 100,
        ignorePattern: 'eslint|`',
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-alert': 'off',
    'no-async-promise-executor': 'error',
    'no-continue': 'off',
    'no-extra-semi': 'off',
    'no-lonely-if': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-prototype-builtins': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-syntax': ['error', 'WithStatement', 'LabeledStatement'],
    'no-redeclare': 'error',
    'no-return-await': 'error',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-use-before-define': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_never'],
        allowAfterThis: true,
        allowAfterThisConstructor: true,
        enforceInMethodNames: false,
      },
    ],
    'no-unreachable': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-destructuring': ['error', {
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }],
    'quote-props': ['error', 'as-needed', { numbers: true }],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    semi: ['error', 'always'],
    'vars-on-top': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
          },
        ],
        '@typescript-eslint/naming-convention': ['error', {
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allowSingleOrDouble',
          selector: 'variableLike',
        }],
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
        '@typescript-eslint/no-unused-vars': [
          process.env.NODE_ENV === 'production' ? 'error' : 'warn',
          {
            args: 'after-used',
            argsIgnorePattern: '[iI]gnored|^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '[iI]gnored|^_',
            ignoreRestSiblings: true,
            vars: 'all',
            varsIgnorePattern: '[iI]gnored|^_',
          },
        ],
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/type-annotation-spacing': ['error', {
          before: false,
          after: true,
          overrides: {
            colon: {
              before: false,
              after: true,
            },
            arrow: {
              before: true,
              after: true,
            },
          },
        }],
      },
      settings: {
        'import/extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.native.js',
          '.web.js',
          '.native.jsx',
          '.web.jsx',
          '.native.ts',
          '.web.ts',
          '.native.tsx',
          '.web.tsx',
        ],
      }
    }
  ]
};
