1. 安装依赖

```sh
pnpm add -D @commitlint/cli @commitlint/config-conventional
```

2. 项目根目录创建 `commitlint.config.js` 文件, 编码 `UTF-8`

```js
// commitlint.config.js

module.exports = {
  extends: ["@commitlint/config-conventional"],
}
```

3. 测试
```sh

```
