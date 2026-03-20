---
sidebar_position: 2
---

# 下载与安装

## 1. 下载

请前往 GitHub Releases 页面下载最新版本的 TeamSpeakClaw：

[**下载最新版本**](https://github.com/Dr1mH4X/TeamSpeakClaw/releases/latest)

根据您的操作系统选择合适的文件（Windows, Linux, macOS）。

## 2. 安装

TeamSpeakClaw 是一个独立的二进制应用程序，无需复杂的安装过程。

1. 将下载的压缩包解压到一个文件夹中。
2. 确保您拥有该文件夹的读写权限。

## 3. 首次运行

第一次运行程序时，它会自动在 `config/` 目录下生成默认的配置文件。

- **Windows**: 双击 `teamspeakclaw.exe`
- **Linux/macOS**: 在终端运行 `./teamspeakclaw` (可能需要先添加执行权限: `chmod +x teamspeakclaw`)

程序会提示配置文件已生成，然后可能会因为缺少配置（如 TS 服务器密码或 API Key）而报错退出。这是正常的，接下来请参考 [配置指南](/docs/configuration) 进行配置。
