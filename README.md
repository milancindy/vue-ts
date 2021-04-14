# vue-ts 初始框架


以TypeScript编写的Vue框架

开发工具：WebStorm >2017, Node.js >V14

整合了 elementUI、axios、router、store

## Project setup
/////////////////////////////////////////////////////////////

具体步骤

安装 webstrom

安装 NodeJS

安装 cnpm

npm install -g cnpm --registry=https://registry.npm.taobao.org

安装 vue-cli3

cnpm install -g @vue/cli

Vue create 定制生成 typescript 项目
选中 vuex , router

添加能力

  "axios": "^0.20.0",
  "element-ui": "^2.13.2",
  "vue-router": "^3.2.0",
  "vuex": "^3.4.0"


Axios:

npm install --save axios vue-axios
将下面代码加入入口文件:

import Vue from 'vue'

import axios from 'axios'

import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

添加 vue.config.js 解决跨域问题：内容参考本项目内vue.config.js


Element-UI:

cnpm i element-ui -S

在main.ts 添加：

import * as Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)




验证调试框架能力
El-ui
Axios
Router-view
Store