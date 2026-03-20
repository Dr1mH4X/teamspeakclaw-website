---
sidebar_position: 3
---

# 配置指南

首次运行程序后，会在 `config/` 目录下生成三个配置文件。请根据您的需求修改它们。

## 1. 主配置 (settings.toml)

文件路径: `config/settings.toml`

包含连接 TeamSpeak 服务器、LLM 提供商设置和机器人行为的基本配置。

```toml
[teamspeak]
host = "127.0.0.1"        # TeamSpeak 服务器地址
port = 10011              # ServerQuery 端口 (默认 10011)
ssh_port = 10022          # SSH 端口 (默认 10022)
use_ssh = false           # 是否使用 SSH 连接
login_name = "serveradmin" # ServerQuery 登录名
login_pass = ""           # ServerQuery 密码 (也可以通过环境变量 TS_LOGIN_PASS 设置)
server_id = 1             # 虚拟服务器 ID (通常是 1)
bot_nickname = "TSClaw"   # 机器人在 TS 中的昵称
keepalive_interval_secs = 180
reconnect_max_retries = 10
reconnect_base_delay_ms = 1000

[llm]
provider = "openai"       # 可选: openai | anthropic | ollama
api_key = ""              # LLM API Key (也可以通过环境变量 LLM_API_KEY 设置)
base_url = "https://api.openai.com/v1" # API 基础地址 (例如 DeepSeek, OpenAI)
model = "gpt-4o"          # 模型名称
max_tokens = 1024
timeout_secs = 30
retry_max = 3
retry_delay_ms = 500

[bot]
# 在频道/服务器聊天中触发机器人的前缀
trigger_prefixes = ["!tsclaw", "!bot", "@TSClaw"]
# 私聊消息是否始终触发机器人
respond_to_private = true
# 最大并发 LLM 请求数
max_concurrent_requests = 4

[rate_limit]
# 每个用户的令牌桶限流设置
requests_per_minute = 10
burst_size = 3

[audit]
enabled = true
log_dir = "./logs"
log_file = "audit.jsonl"

[cache]
refresh_interval_secs = 30
entry_ttl_secs = 300
```

## 2. 权限配置 (acl.toml)

文件路径: `config/acl.toml`

控制哪些用户组可以使用哪些功能。规则从上到下匹配，第一个匹配的规则生效。

```toml
# server_group_ids: TeamSpeak 服务器组 ID
# allowed_skills: 允许使用的技能列表，"*" 代表所有

[[rules]]
name = "superadmin"
server_group_ids = [6]    # 服务器管理员组 ID 通常是 6
allowed_skills = ["*"]
can_target_admins = true
rate_limit_override = 60

[[rules]]
name = "default_user"
server_group_ids = [8]    # 普通用户组 ID
allowed_skills = [
  "poke_client",
  "send_private_msg",
  "music_control"
]
can_target_admins = false
rate_limit_override = 20

# 默认规则 (匹配所有人)
[[rules]]
name = "default"
server_group_ids = []
allowed_skills = ["music_control"]
can_target_admins = false

[acl]
# 受保护的组 ID，普通用户不能对这些组的成员执行踢出/封禁等操作
protected_group_ids = [6, 8, 9]
```

## 3. 提示词配置 (prompts.toml)

文件路径: `config/prompts.toml`

定义机器人的系统提示词 (System Prompt) 和错误消息。通常不需要修改，除非您想改变机器人的性格或语言。

```toml
[system]
content = """
你是 TSClaw，一个 TeamSpeak 服务器的自动化管理员助手。
...
"""

[error]
permission_denied = "你没有权限使用此命令。"
rate_limited = "请求过多。请稍后再试。"
# ... 其他错误消息
```
