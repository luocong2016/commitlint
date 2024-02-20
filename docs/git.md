# commit 消息格式

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

## type

```
build: 打包
chore: 构建过程或辅助工具的变动
ci: 持续集成
docs: 文档(documentation)
feat: 新功能(feature)
fix: 修补bug
perf: 性能优化
refactor: 重构
revert: 撤销，版本回退
style: 格式(不影响代码运行的变动)
test: 测试

update: 更新某功能
improvement: 改进
```

## subject

1. 使用祈使句，现在时
2. 首字母不大写
3. 最后不要以符号结尾(如: .|。)

## body

使用祈使句，现在时,正文应该包含改变动机,并将其之前行为进行对比

## footer

包含重大变更信息，PR 链接到对应问题
