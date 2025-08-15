# 🚀 npmCR – The Ultimate Electron NPM Tool

![npmCR Banner](images/Group%206.png)

**npmCR** is an **Electron-powered desktop tool** for managing Node.js projects. Run scripts like `npm run dev`, `npm run build`, `npm run lint`, and install packages without touching a terminal. Designed for **speed, simplicity, and insane productivity**.

---

## 💡 Features

* **One-click npm scripts**: Dev, build, lint, install packages—all with a single button.
* **Folder picker integration**: Native dialog to select your project folder.
* **Real-time output**: stdout and stderr displayed live in the app. ANSI codes converted automatically for clear formatting.
* **Stop commands instantly**: Stop any running process immediately with one click.
* **Cross-platform**: Windows, macOS, Linux support.
* **Lightweight Electron app**: Minimal footprint, easy to use.
* **Future-ready hooks**: Planned integration with VS Code or Cursor for executing commands directly in your editor.

---

## 🎯 Installation

1. Clone the repository:

```bash
git clone https://github.com/mahanhed8s8/npm-tool.git
cd npm-tool
```

2. Install dependencies:

```bash
npm install
```

3. Start the app:

```bash
npm start
```

> **Note:** Git is not required for running the app, only for cloning via `git clone`. You can also download the ZIP directly from GitHub.

---

## 🖱 Usage

1. Click **Browse** and select your project folder.
2. Use the buttons to run commands:

   * `dev` → `npm run dev`
   * `build` → `npm run build`
   * `lint` → `npm run lint`
   * `npm i` → Install any package (prompt will ask for the package name)
3. Output appears in the **console window** below.
4. Stop any running process with the **Stop** button.

> Output is updated line-by-line so you can monitor logs in real-time.

---

## ⚡ Tech Stack

* **Electron** – Desktop framework for Node.js apps
* **Cross-Spawn** – Spawning npm commands safely
* **Vanilla JS + HTML + CSS** – UI components
* **ANSI to HTML converter** – Pretty console output

---

## 🛠 Dev Notes

* **Preload script**: Handles context isolation and folder selection securely.
* **main.js**: Spawns processes, communicates via `ipcMain` with renderer.
* **script.js**: Handles button clicks, outputs logs, prompts for npm installs.
* ANSI output is converted to HTML so logs look clean and readable.

---

## 🎨 Screenshots

![Main Window](https://via.placeholder.com/600x400.png?text=Main+Window)
*The main npmCR interface.*

---

## 🚀 Roadmap

* [ ] Real-time VS Code or Cursor command execution
* [ ] AI-assisted npm script suggestions
* [ ] Dark/Light theme toggle
* [ ] Multi-project management
* [ ] Automatic update system

---

## 🛡 Troubleshooting

* If commands do not run, ensure Node.js is installed.
* Output may not appear if folder selection is skipped. Always select a folder first.
* Stop button kills running processes, preventing hung terminals.
* On Windows, some modules may require `windows-build-tools` or Visual Studio build tools.

---

## 🎨 Pro Tips

* Scroll to the bottom of the output window to see the latest logs.
* Stop commands immediately if errors occur—no terminal needed.
* Combine npmCR with VS Code to streamline development workflows.

---

## 📦 Packaging

Use **Electron Forge** to create builds:

```bash
npm run make
```

> Note: You may need proper maker dependencies installed. Git is recommended for full packaging.

---

## 📜 License

MIT License © [mahanhed8s8](https://github.com/mahanhed8s8)

---

## 💬 Support

Open issues on [GitHub](https://github.com/mahanhed8s8/npm-tool/issues) for bugs, feature requests, or help.

---

## ✨ Credits

Built with ❤️ using **Electron**, **Cross-Spawn**, and **Node.js**.
