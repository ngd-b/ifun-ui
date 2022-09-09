<br />
<h1 align='center'>IFun-UI</h1>

<p align='center'>日常业务组件封装及相关解决方法的组件提供。</p>

<p align='center'>
    <a href="https://github.com/ngd-b/fun-ui">
        <img src="https://img.shields.io/npm/v/ifun-ui" />
    </a>
    <a href="https://github.com/ngd-b/fun-ui#license">
        <img src="https://img.shields.io/npm/l/ifun-ui" />
    </a>
</p>

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
npm i ifun-ui
```

## Quick Start

尽快上手，可以浏览[IFun-ui Getting Started](http://hboot.fun/ifun-ui/)

```js
import { createApp } from "vue";
// components
import IFunUI from "ifun-ui";

// app
import APP from "./App.vue";

createApp(App).use(IFunUI).mount("#app");
```

## Broswer Support

IE 10 + and other browsers.

## LICENSE

[MIT](./LICENSE)
