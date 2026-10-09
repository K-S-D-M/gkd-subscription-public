# 交接文档（Handover）

> 本文件用于让后续接手的 AI 快速了解项目现状、已完成工作、待办事项与关键操作方式。
> 最后更新：2026-10-10（由前序会话整理）

> ⚠️ **阅后即删**：本文档及随附上传的 git 相关文件（`create-blobs.ps1`、`push-v7.ps1`、`cleanup-and-optimize.ps1`、`blob-shas.json`）仅供接手 AI 一次性阅读与了解项目背景使用。
> **读完后请立即删除这些文件**（`git rm` 并推送），不要保留在公开仓库中，以免污染 `K-S-D-M/gkd-subscription-public` 公开部署仓库。
> 删除命令（在 `gkd-public-deploy/` 目录下执行）：
> ```powershell
> git rm HANDOVER.md create-blobs.ps1 push-v7.ps1 cleanup-and-optimize.ps1 blob-shas.json
> git commit -m "chore: remove handover doc and legacy scripts after reading"
> git push origin main
> ```

---

## 1. 项目背景

本工作区围绕 GKD（搞快点，开源无障碍点击器）生态维护两个 GitHub 仓库：

### 1.1 公开部署仓库 `K-S-D-M/gkd-subscription-public`

- 用途：对外发布 **GKD 个人订阅规则** 与 **GKD inspect 网页审查工具**（Vue + Vite 构建产物）。
- GitHub Pages 地址：https://k-s-d-m.github.io/gkd-subscription-public/
- 本地克隆目录：`gkd-public-deploy/`（git 仓库，远程 origin 即该仓库，分支 `main`）。
- 内容：
  - `gkd.json5`：订阅规则文件（当前 version 20）
  - `gkd.version.json5`：版本检测文件（当前 version 19，注意与 gkd.json5 不一致，见待办）
  - `index.html` / `404.html` / `assets/`：inspect 网页工具构建产物
  - `.nojekyll`：必须保留，否则 GitHub Pages 的 Jekyll 会忽略 `assets/` 中 `_` 开头的 chunk 导致白屏

### 1.2 App 源码仓库 `K-S-D-M/gkd-plus`

- 用途：GKD App 源码（Kotlin）。
- 构建工作流：`build-debug.yml`（GitHub Actions），触发方式 `workflow_dispatch`，构建 debug APK 并自动发版（`softprops/action-gh-release`，tag 形如 `debug-38`）。
- 本会话协作方 **Muse**（另一个 AI，通过聊天窗口协作）负责 App 端代码修改；本机 AI 负责触发构建、检查结果、部署 inspect 前端。

---

## 2. 当前状态（截至交接）

### 2.1 inspect 前端部署 —— 已完成

| 版本 | 提交 | 说明 | 状态 |
|------|------|------|------|
| V12 | `a9f607b` "V12 AI生成交互" | 三个交互：AttrCard 按钮 / 工具栏 AI 直触生成 / 快照横幅 | ✅ 已推送 `origin/main` |

- 部署产物来源：`%USERPROFILE%\Downloads\inspect-v12.zip` → 解压到 `v12_extract/`。
- `v12_extract/assets/` 与 `gkd-public-deploy/assets/` 文件完全一致（78 个文件）。
- `gkd-public-deploy` 工作区干净，与 `origin/main` 同步。

### 2.2 App 端 aiGenerateRule 分步进度 —— 已构建成功

- 功能：App 内 AI 生成规则时展示分步进度（分析中 → 生成中 → 校验中）。
- 代码位置：`gkd-plus` 仓库 `gkd-app/src/main/kotlin/li/gkd/app/util/AiRuleGenerator.kt`。
- 构建历史：
  - #36 ❌ 失败（首次引入 onProgress，编译错误）
  - #37 ❌ 失败（只删了 `processRule` 里的 onProgress，漏掉 `enhancedGenerate` 第 460 行）
  - **#38 ✅ 成功**（commit `6f060a2b` "给 enhancedGenerate 加 onProgress 参数（默认空实现，向后兼容）"）
- 构建产物：Release **`debug-38`**，APK 名为 `gkd-app-gkd-debug.apk`（约 30MB）。
  https://github.com/K-S-D-M/gkd-plus/releases/tag/debug-38

---

## 3. 关键本地文件说明

| 路径（相对工作目录根） | 说明 |
|------------------------|------|
| `gkd-public-deploy/` | 公开部署仓库的本地 git 克隆（main） |
| `v10_extract/` `v11_extract/` `v12_extract/` | 各版本 inspect 构建产物解压目录 |
| `AiRuleGenerator.kt` | App 端 AI 规则生成器（从 gkd-plus 拉取的副本，供审查用，**不是**可直接编译的工程文件） |
| `blob-shas.json` | assets 文件 → GitHub blob SHA 映射（V7 时代遗留，V12 已不用） |
| `create-blobs.ps1` | 上传 assets 生成 blob SHA 的脚本（需 `$env:GH_TOKEN`） |
| `push-v7.ps1` | 用 blob-shas.json 构造 tree/commit 推送到远程的脚本（V7 时代遗留） |
| `cleanup-and-optimize.ps1` | 清理远程 .map 文件、删除 inspect-dist.zip、更新 README 的脚本 |

> ⚠️ `create-blobs.ps1` / `push-v7.ps1` 中的 `$baseDir`、`blob-shas.json` 指向 V7/V10 产物，**已过时**。V12 部署实际是通过本地 git 仓库 `gkd-public-deploy` 直接 `git add` + `git commit` + `git push` 完成的，不再走 API 脚本。

---

## 4. 关键操作手册

### 4.1 部署新版本 inspect 到 GitHub Pages

1. 拿到新版本 zip（如 `%USERPROFILE%\Downloads\inspect-v13.zip`）。
2. 解压到新目录（如 `v13_extract/`）。
3. 清空并替换 `gkd-public-deploy/assets/` 与 `index.html`（如产物包含则还有 `404.html`）。
4. 在 `gkd-public-deploy/` 中：
   ```powershell
   git add -A
   git commit -m "V13 <特性描述>"
   git push origin main
   ```
5. 验证：`git status` 干净、`git log -1` 为最新提交；可用 `Compare-Object` 对比解压目录与部署目录的 assets 文件是否一致。
6. 打开 https://k-s-d-m.github.io/gkd-subscription-public/ 确认页面正常。

### 4.2 触发 gkd-plus 的 build-debug 构建

方式 A（GitHub 网页手动触发）：
- 打开 https://github.com/K-S-D-M/gkd-plus/actions/workflows/build-debug.yml
- 点 "Run workflow" → 选择 `main` 分支 → 运行。

方式 B（API 触发）：
```powershell
$headers = @{ "Authorization" = "token $env:GH_TOKEN"; "Accept" = "application/vnd.github+json" }
$body = @{ ref = "main" } | ConvertTo-Json
Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/K-S-D-M/gkd-plus/actions/workflows/build-debug.yml/dispatches" -Headers $headers -ContentType "application/json" -Body $body
```

### 4.3 查询构建状态

```powershell
curl.exe -s -H "Accept: application/vnd.github+json" "https://api.github.com/repos/K-S-D-M/gkd-plus/actions/workflows/build-debug.yml/runs?per_page=5"
```
关注 `run_number`、`status`、`conclusion`、`display_title`、`head_sha`。
也可在浏览器窗口（Edge 已打开该页面）查看。

### 4.4 查看构建失败日志（无需登录的替代方案）

- 未登录浏览器无法查看完整日志（"Sign in to view logs"）。
- 可用 GitHub API 获取 jobs 与 annotations（公开仓库无需认证）：
  ```powershell
  curl.exe -s -H "Accept: application/vnd.github+json" "https://api.github.com/repos/K-S-D-M/gkd-plus/actions/runs/<RUN_ID>/jobs"
  curl.exe -s -H "Accept: application/vnd.github+json" "https://api.github.com/repos/K-S-D-M/gkd-plus/check-runs/<JOB_ID>/annotations"
  ```
- 需要原始日志时，用管理员 token 下载：
  ```powershell
  curl.exe -s -L -H "Authorization: token $env:GH_TOKEN" "https://api.github.com/repos/K-S-D-M/gkd-plus/actions/jobs/<JOB_ID>/logs"
  ```

### 4.5 与 Muse 协作

- Muse 是负责 gkd-plus App 端代码的 AI 协作方。
- 沟通通过本机 Edge 浏览器窗口 "Chat — jian" 进行（聊天界面）。
- 工作流：Muse 推送代码 → 我们触发 build-debug → 检查结果 → 若失败则分析日志反馈给 Muse → 循环直至成功。

---

## 5. 待办事项

1. **验证 App 端分步进度功能**（build 已成功，待真机/模拟器验证）：
   - 安装 `debug-38` 的 APK（https://github.com/K-S-D-M/gkd-plus/releases/tag/debug-38）。
   - 验证 AI 生成规则时是否展示「分析中 → 生成中 → 校验中」分步进度。
   - 验证 `enhancedGenerate`（加强模式，双击快照按钮触发）是否正常，onProgress 是否展示。

2. **版本号不一致**：`gkd.json5` 中 `version: 20`，而 `gkd.version.json5` 中 `version: 19`。
   - 需将 `gkd.version.json5` 同步为 20，否则版本检测会提示异常。
   - 修改后提交并推送 `gkd-public-deploy`。

3. **清理过时脚本与文件**（可选）：`create-blobs.ps1`、`push-v7.ps1`、`blob-shas.json` 已过时，可归档或删除。

---

## 6. 环境与凭证

- 操作系统：Windows。
- 工作目录：`C:\Users\Admin\AppData\Roaming\TRAE SOLO CN\ModularData\ai-agent\work-mode-projects\6ac8f7eba62f3ee32260b92d`
- GitHub 认证：环境变量 `$env:GH_TOKEN` 可用于 GitHub API（需管理员权限的操作如下载日志依赖它）。
- 浏览器：本机 Edge 已打开两个窗口：
  1. "Chat — jian"（与 Muse 的聊天窗口）
  2. "build-debug · Workflow runs · K-S-D-M/gkd-plus"（构建状态页）
- 注意事项：
  - 不提交任何秘密/Token 到仓库。
  - 不删除用户数据；清理文件前先确认。