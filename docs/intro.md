---
sidebar_position: 1
---

# 介绍

TeamSpeakClaw 是一个基于 LLM (大语言模型) 的 TeamSpeak 助手。

它通过 ServerQuery 连接到您的 TeamSpeak 服务器，允许用户使用自然语言与服务器进行交互。无论是播放音乐、管理成员还是查询信息，您只需在频道中“说”出来，TSClaw 就会理解您的意图并自动执行相应的指令。

## ✨ 功能特性

- **🧠 自然语言交互**：告别繁琐的指令手册。直接说“播放周杰伦的歌”或“把那个捣乱的人踢出去”，Claw 就能听懂并执行。
- **🛡️ 细粒度权限控制 (RBAC)**：内置强大的权限系统。您可以为不同的 TeamSpeak 用户组配置特定的技能权限（例如：仅允许管理员使用踢人功能，普通用户仅限点歌）。
- **🔌 灵活的技能系统 (Skills)**：
    - **音乐控制**：无缝对接 TS3AudioBot 网易云插件，支持点歌、切歌、播放列表管理。
    - **服务器管理**：支持踢出 (Kick)、封禁 (Ban)、移动用户等操作。
    - **信息查询**：获取在线用户列表、服务器状态等。
    - **可扩展性**：轻松编写自定义 Skill，扩展机器人的能力边界。
- **🤖 广泛的模型支持**：兼容 OpenAI 接口格式，轻松接入 DeepSeek、Ollama、LocalAI 等多种大模型。

## 🙏 致谢

本项目受到以下项目的启发或使用了它们的代码：

- [TS3AudioBot](https://github.com/Splamy/TS3AudioBot)
- [TS3AudioBot-NetEaseCloudmusic-plugin](https://github.com/ZHANGTIANYAO1/TS3AudioBot-NetEaseCloudmusic-plugin)
