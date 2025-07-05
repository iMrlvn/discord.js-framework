# mrlvn.js
A lightweight, modular, and scalable framework built on top of [discord.js](https://discord.js.org) — making your bot development faster and cleaner. So you can focus on featured.

[![NPM Version](https://img.shields.io/npm/v/mrlvn.js.svg)](https://www.npmjs.com/package/mrlvn.js)
[![NPM Downloaded](https://img.shields.io/npm/dt/mrlvn.js.svg)](https://www.npmjs.com/package/mrlvn.js)
[![License](https://img.shields.io/npm/l/mrlvn.js)](LICENSE)
[![Node Version](https://img.shields.io/node/v/mrlvn.js)](https://nodejs.org)

---

## ✨ Features

- [x] 🔥 Easy to use
- [x] 🔎 Automatic command discovery
- [x] 🖨️ Middleware-like hooks for - pre/post-processing
- [x] 📁 Supports command folder structure
- [x] ✨ Lightweight, no external runtime dependencies

---

## 📦 Installation

```bash
npm install mrlvn.js discord.js
```
> Make sure you're using discord.js v14 latest and Node.js 22.12.0 or newer

---

## 🚀 Quick Start
```js
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

new Framework({
    client,
    commandsPath: "./commands",
    eventsPath: "./events",
});

client.login("YourBotToken");
```

---

## 📄 License

MIT © [iMrlvn](./LICENSE)

---

## 🤝 Contributing

Pull requests and issues are welcome!
Please open an issue first to discuss major changes.