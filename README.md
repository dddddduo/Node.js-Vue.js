# Node.js-Vue.js

## Node.js

``` bash

#安装mongodb

# 进入项目
cd serve
# 初始化node项目
npm init -y
# 新建index.js入口文件
# 自定义脚本 package.json-scripts
"serve": "nodemon index.js"
# 全局安装nodemon
npm i -g nodemon
# 运行node
npm run serve

```

## Vue3.0

``` bash

#使用Vue3.0 + element-plus

#安装3.0脚手架  
cnpm i -g @vue/cli
# 创建项目
vue create admin/web
# 进入项目
cd admin
# 若package.json中vue不是3.0，需手动升级！
vue add vue-next
# 启动项目
npm run serve
# 安装路由、element-plus
vue add router/element-plus
# 安装axios  （注：3.0使用config.globalProperties代替prototype方法）
npm i axios

```