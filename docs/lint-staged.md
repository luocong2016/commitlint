# lint-staged

## 安装依赖

```sh
pnpm i -D lint-staged
```

## 写入脚本

```sh
npm pkg set scripts.precommit="lint-staged"
```

## `package.json` 写入规则

```json
{
	"lint-staged": {
		"*.{html,css,less,scss,js,jsx,ts,tsx,vue,json,md}": ["prettier --write"],
		"src/**/*.{js,jsx,ts,tsx,vue}": ["eslint --fix"]
	}
}
```
