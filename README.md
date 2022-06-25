# vue项目模板

## 开发

### 快速开始

```js
// pnpm install

// pnpm run dev
```

### 命名规范

> 大部分都是用驼峰命名。部分使用首字母驼峰命名法。

- `components` 里面使用首字母驼峰命名法。 例如： `Navbar`
- `pages` 里面的`变量`使用驼峰命名法。例如：`badgeHall`
- `styles` 里面的`变量`及`类名`使用驼峰命名法。例如：`navbarHeight`
- `enums` 枚举里面的枚举 使用`首字母驼峰命名法`。例如：`RequestEnum`
- `types` 里面使用`首字母驼峰命名法`。例如：`RetryRequest`

### 分支命名

| 分支 | 分支中文 | 分支英文 | 使用说明 |
| :-: | :-: | :-: | :-: |
| `master` | 线上分支 | master | 线上分支 |
| `feature` | 开发分支 | feature*建分支时间*功能说明 | 功能分支 |
| `uat` | 测试时的分支 | uat\_建分支时间 | 测试分支 |
| `hotfix` | 线上紧急修复 bug 的分支 | hotfix\_建分支时间 | 紧急修复线上问题的分支，一般是拉 master 分支 |
| `release` | 上线分支 | release\_建分支时间 | 一般是已经测试通过只等时间上线 |

### 代码提交

- 类型 `[type]`

```js
// type 中的类型， 只允许出现以下几种类型
export default [
  'feature', // 新功能（feature）
  'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
  'fix', // 修补bug
  'ui', // 更新 ui
  'docs', // 文档（documentation）
  'style', // 格式（不影响代码运行的变动）
  'perf', // 性能优化
  'release', // 发布
  'deploy', // 部署
  'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
  'test', // 增加测试
  'chore', // 构建过程或辅助工具的变动
  'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
  'merge', // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
  'build' // 打包
];
```

- 举例

```js
// git add .

// git commit -m '[type]: 提交信息'

// 例如 git commit -m 'feature: 登录功能开发'

// git push
```
