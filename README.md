# git 提交规范

1. 安装 `commitlint` 依赖

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

3. 安装 `husky` 依赖

```sh
pnpm add -D husky

## 执行后会自动添加脚本 package.json -> script -> { "prepare": "husky" }
pnpm husky init
```

4. 设置 `commitlint` 脚本

```sh
npm pkg set scripts.commitlint="commitlint --edit"
```

5. 创建 `.husky/commit-msg` 文件, 编码 `UTF-8`

如果 `.husky` 文件夹不存在，执行以下代码

```sh

pnpm prepare
```

创建 `.husky/commit-msg` 执行脚本
```sh
pnpm commitlint
```

6. 测试

```sh
git add .
git commit -m "foo: bar"
```

如果安装正常，应该会出现以下报错

```sh
⧗   input: foo: first
✖   type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]

✖   found 1 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

 ELIFECYCLE  Command failed with exit code 1.
husky - commit-msg script failed (code 1)
```

# 链接

[commitlint](https://commitlint.js.org/#/)

[prettier](https://prettier.io/docs/en/)

[eslint](https://eslint.org/docs/latest/)
