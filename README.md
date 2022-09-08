<br />
<h1 align='center'>FunUI</h1>

<p align='center'>日常业务组件封装及相关解决方法的组件提供。</p>

[![CI](https://github.com/ngd-b/fun-ui/actions/workflows/main.yml/badge.svg)](https://github.com/ngd-b/fun-ui/actions/workflows/main.yml)

## Features

- twemoji:airplane Vue3,Vite2,pnpm,ESBuild
- TypeScript, of course
- File based routing
- Eslint + Prettier
- UnoCSS
- I18n ready
- CI/CD with GithubActions

## Install

```sh
npm i fun-ui
```

## Quick Start

```js
import { createApp } from "vue";
// components
import FunUI from "fun-ui";

// app
import APP from "./App.vue";

createApp(App).use(FunUI).mount("#app");
```

## Broswer Support

IE 10 + and other browsers.

## LICENSE

[MIT](./LICENSE)
