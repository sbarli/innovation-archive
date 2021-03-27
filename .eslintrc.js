// .eslintrc.js
function isTruthy(value) {
  if (!value) {
    return false;
  }
  return ['1', 'true'].indexOf(value.toLowerCase()) >= 0;
}

// Warnings are errors in CI
const ERROR = 'error';
const WARNING_LOCAL_ERROR_CI = isTruthy(process.env.CI) ? ERROR : 'warn';

module.exports = {
  root: true,
  extends: [
    'react-app',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'airbnb-base/rules/imports',
    // 'plugin:jest/recommended'
  ],
  plugins: [
    'prettier',
    'react-hooks',
    '@typescript-eslint',
    'eslint-plugin-jsx-a11y',
    // 'jest'
  ],
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: './tsconfig.json',
  // },
  globals: {
    Styles: false,
  },
  // settings: {
  //   react: {
  //     version: 'detect'
  //   },
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts' '.tsx'],
  //     },
  //   },
  // },
  rules: {
    'prettier/prettier': 'error',
    'object-shorthand': ['error', 'always'],
    'dot-notation': 'error',
    'array-callback-return': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'react/no-unknown-property': 'error',
    'react/jsx-key': 'warn',
    'jsx-a11y/no-autofocus': 'off',
    'no-shadow': [
      'warn',
      {
        builtinGlobals: false,
        hoist: 'all',
        allow: [],
      },
    ],
    curly: 'error',

    /** alphabetize destructured import members - `import {b, a, c} from ...` to `import {a, b, c} from ...`*/
    'sort-imports': ['error', { ignoreDeclarationSort: true }],

    /********************************************************/
    /* airbnb-base/rules/imports overrides & customizations */
    /* on top of https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js */
    /********************************************************/

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        // pathGroups: [
        //   {
        //     pattern: 'react',
        //     position: 'before',
        //     group: 'external'
        //   },
        //   {
        //     pattern:
        //       '{@rbi-ctg,state,utils,components,enums,generated,hooks,pages,queries,remote,styles,types,ui,__fixtures__}/**',
        //     group: 'internal'
        //   }
        // ],
        pathGroupsExcludedImportTypes: [],
      },
    ],

    /* default exports are ok in our codebase */
    'import/prefer-default-export': 'off',

    /* typescript covers this */
    'import/no-unresolved': 'off',

    /* we make use of file extensions in imports in a few places to help with leaf node imports, so this rule is off */
    'import/extensions': 'off',

    /* these are good rules, but require manual work to resolve. They are ordered from easiest to hardest to fix */
    'import/export': 'off',
    'import/no-named-default': 'off',
    'import/no-named-as-default': 'off',

    /* blocked: need to make sure all tests are in __tests__ directories, end in .test.*, make some frontend/package.json changes & additions */
    // 'import/no-extraneous-dependencies': 'off',

    /* Dont allow these to be used */
    // 'no-restricted-imports': [
    //   'error',
    //   {
    //     name: 'moment',
    //     message: 'Please use date-fns instead'
    //   },
    //   {
    //     name: 'lodash',
    //     message: 'Please use lodash-es instead'
    //   }
    // ],

    'no-console': WARNING_LOCAL_ERROR_CI,
    'no-debugger': WARNING_LOCAL_ERROR_CI,

    // Jest related rules
    // 'jest/no-disabled-tests': 'off',
    // 'jest/no-export': 'off',
    // 'jest/no-focused-tests': WARNING_LOCAL_ERROR_CI
  },
};
