module.exports = {
  bracketSpacing: true,
  printWidth: 80,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
  ],
}