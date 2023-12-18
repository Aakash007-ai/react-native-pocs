module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@tanstack/eslint-plugin-query/recommended', //for react natve query debugging
    'plugin:@tanstack/query',
  ],
  rules: {
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',
  },
};
