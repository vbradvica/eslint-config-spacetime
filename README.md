# eslint-config-spacetime
👨‍🚀 Airbnb eslint with some Space & Time mixed in

## Features

- based on the [javascript
  code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- prettier support, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
- with [react](https://reactjs.org/) and [react-hooks](https://reactjs.org/docs/hooks-intro.html) support

## Installation

The default export contains all default Airbnb ESLint rules, including
ECMAScript 6+, and the ones listed below. It requires some peerDependencies as
well.

Install the package with

```sh
npm install eslint-config-spacetime --save-dev

```

Then install the correct versions of each peerDependency package, which are
listed by the command:

```sh
npm info "eslint-config-spacetime@latest" peerDependencies
```

## Usage

Add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-spacetime"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "eslint-config-spacetime"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: 'eslint-config-spacetime',
}
```

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- react and/or node environment
- browser and/or node environment
- parser: babel (used babel-eslint parser)

## LICENCE

[MIT](LICENCE)
