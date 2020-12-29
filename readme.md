# NextJS Boilerplate

A bit altered version of the [opinionated boilerplate](https://github.com/sanjaytwisk/nextjs-ts) to kickstart projects using NextJS

### Features
- Next 10
- React 17
- Custom Document and App
- Redux with `react-redux` and `redux-thunk`
- i18n lightweight solution with [next-localization](https://github.com/StarpTech/next-localization) by [StarpTech](https://github.com/StarpTech)
- Type safety using TypeScript in strict mode
- Tailwind CSS with PostCSS
- SVG sprite for icons
- Lint your code with TSLint
- Prettier for consistent code style
- Jest + Enzyme for tests
- Husky + lint-staged for code quality assurance
- Editorconfig file for consistent indents

## Getting started

Before you can start developing your awesome application you need to install the project's dependencies. Make sure you have Node (>= 10.13.0) and yarn installed and run:

```sh
$ yarn install
```

### ⌨️ Development

Once all dependencies have been installed you can start development. To start a development server on [http://localhost:3000](http://localhost:3000) run:

```sh
$ yarn run dev
```

### 🖥 Production

To run your application in production make sure to run a build first:

```sh
$ yarn run build
```

And then start you application with a provided port number (defaults to 3000 if not provided):

```sh
$ PORT=8080 yarn run start
```

### 🖨 Static

You can export your application to a static website as well:

```sh
yarn run export
```

This will render static HTML pages into `./out`

### 🧐 Linters

The boilerplate provides a couple of linters to help you keep an eye on code consistency and type safety. There are three linters: one for CSS, one for TypeScript and one for type safety. You can use each of them separately using the following commands:

```sh
$ yarn run lint:css
$ yarn run lint:ts
$ yarn run lint:types
```

TIP: To get the most out of your linters install the corresponding (Stylelint, TSLint) plugins for your editor or IDE

**Prettier**

Prettier helps you to enforce consistent (opinionated) code style. If possible, you can tell your editor to format you code when you save a file. If you are not able to do this, you can run prettier manually using:

```sh
$ yarn run prettier
```

### 🤖 Tests

You can write your tests using Jest and Enzyme. You can run all test with the following command

```sh
$ yarn run test
```

If you want to follow test driven development you can use:

```sh
$ yarn run test:dev
```

## Modules

### TypeScript

TypeScript and Babel are pre-configured with custom module resolvers.
This means you can use absolute imports with custom namespaces by default for the following modules:

```js
/* import common library */
import lib from '@common/<folder>/<lib>'
/* import component */
import Counter from '@components/counter/Counter'
/* import container */
import HomepageCounter from '@containers/counter/HomepageCounter'
/* import store files */
import { CounterAction } from '@store/counter/counterActions'
```

## Credits
- [Sanjay Twisk](https://github.com/sanjaytwisk) for the original code of the [Opinionated Next JS project boilerplate with TypeScript and Redux](https://github.com/sanjaytwisk/nextjs-ts)
