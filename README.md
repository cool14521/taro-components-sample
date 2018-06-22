
安装 Taro 开发工具 `@tarojs/cli`

使用 npm或者yarn 全局安装，或者直接使用[npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

```bash
$ npm install -g @tarojs/cli
$ yarn global add @tarojs/cli
```

安装依赖包：
```
$ yarn install
```

进入项目目录开始开发，可以选择小程序预览模式，或者H5预览模式，若使用微信小程序预览模式，则需要自行下载并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，选择预览项目根目录下 `dist` 目录。

微信小程序编译预览模式

```bash
# npm script
$ npm run dev:weapp
# 仅限全局安装
$ taro build --type weapp --watch
# npx用户也可以使用
$ npx taro build --type weapp --watch
```

H5编译预览模式
```bash
# npm script
$ npm run dev:h5
# 仅限全局安装
$ taro build --type h5 --watch
# npx用户也可以使用
$ npx taro build --type h5 --watch
```

项目打包

打包小程序代码
```bash
# npm script
$ npm build dev:weapp
# 仅限全局安装
$ taro build --type weapp
# npx用户也可以使用
$ npx taro build --type weapp
```

打包H5代码
```bash
# npm script
$ npm build dev:h5
# 仅限全局安装
$ taro build --type h5
# npx用户也可以使用
$ npx taro build --type h5
```
