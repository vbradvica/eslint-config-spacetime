module.exports = {
  parser: 'babel-eslint',
  // prettier alternative: https://github.com/prettier/prettier-eslint
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['react-hooks'],
  env: {
    browser: true,
    es6: true,
    node: true,
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
  rules: {
    // general ESLint rules
    'no-confusing-arrow': ['error', { allowParens: false }],
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true }],

    // rules for https://github.com/benmosher/eslint-plugin-import
    // 1. node "builtin" modules
    // 2. "external" modules
    // 3. "internal" modules
    // (if you have configured your path or webpack to handle your internal paths differently)
    // 4. modules from a "parent" directory
    // 5. "sibling" modules from the same or a sibling's directory
    // 6. "index" of the current directory
    'import/order': ['error', { 'newlines-between': 'always' }],

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // rules for https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    'react/jsx-curly-brace-presence': [
      2,
      { props: 'never', children: 'never' },
    ], // use "" when passing a string as a property
    // React Component organization
    // 1. static methods and properties
    // 2. lifecycle methods:
    //   displayName, propTypes, contextTypes, childContextTypes,
    //   mixins, statics, defaultProps, constructor, getDefaultProps,
    //   state, getInitialState, getChildContext, getDerivedStateFromProps,
    //   componentWillMount, UNSAFE_componentWillMount, componentDidMount,
    //   componentWillReceiveProps, UNSAFE_componentWillReceiveProps,
    //   shouldComponentUpdate, componentWillUpdate, UNSAFE_componentWillUpdate,
    //   getSnapshotBeforeUpdate, componentDidUpdate, componentDidCatch,
    //   componentWillUnmount (in this order).
    // 3. custom methods
    // 4. render method
    'react/sort-comp': 2,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
  overrides: [
    {
      // use this for TESTS
      // e.g. './src/**/*.test.js',
      files: [],
      globals: {
        React: true,
      },
      rules: {
        'no-console': 0,
        'global-require': 0,
      },
    },
  ],
}
