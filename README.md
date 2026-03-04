# 📋 Task Manager App

A clean, minimal task manager built with vanilla HTML, CSS, and JavaScript. Features priority-based task organization, due date tracking with overdue detection, smooth dark/light theme switching, and persistent storage — no frameworks, no dependencies.

---

## 🚀 Live Demo

[View Live Demo](https://ntg-taskmanager.netlify.app/) &nbsp;|&nbsp; [GitHub Repository](https://github.com/NTgGamer1/Task.Manager)

---

## ✨ Features

- ✅ **Add, complete & delete tasks** with a single click
- 🎯 **Priority levels** — High, Medium, and Low with color-coded badges
- 📅 **Due date tracking** with automatic overdue detection
- 🌙 **Dark / Light theme toggle** with preference saved to localStorage
- 💾 **Persistent storage** — tasks survive page refreshes via localStorage
- 🔍 **Filter tasks** by status (All, Pending, Done) or priority level
- 📊 **Live stats** — total, pending, and completed task counts
- ⌨️ **Keyboard support** — press Enter to add a task
- 📱 **Responsive design** — works on desktop and mobile

---

## 🛠️ Built With

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, transitions, animations
- **Vanilla JavaScript** — No frameworks or dependencies
- **localStorage API** — Client-side data persistence
- **Google Fonts** — Space Mono + DM Sans

---

## 📁 Project Structure

```
task.manager/
│
├── index.html        # App structure and markup
├── styles.css        # All styling, CSS variables, animations
├── script.js         # App logic, localStorage, rendering
└── README.md         # Project documentation
```

---

## 🔧 Getting Started

### Prerequisites

No installations required. Just a modern web browser.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/NTgGamer1/Task.Manager.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd Task.Manager
   ```

3. **Open in browser**
   ```bash
   open index.html
   ```
   Or simply drag `index.html` into your browser.

> **Tip:** For the best experience, use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.

---

## 📖 How to Use

### Adding a Task

1. Type your task in the input field
2. Select a **priority level** (High / Medium / Low)
3. Optionally pick a **due date**
4. Click **+ ADD** or press **Enter**

### Managing Tasks

| Action          | How                                                           |
| --------------- | ------------------------------------------------------------- |
| Complete a task | Click the circular checkbox on the left                       |
| Delete a task   | Click the **✕** button on the right                           |
| Filter tasks    | Click any filter pill (All, Pending, Done, High, Medium, Low) |
| Toggle theme    | Use the 🌙 / ☀️ toggle switch in the header                   |

### Overdue Detection

Tasks with a due date in the past are automatically highlighted in red with an **"· overdue"** label.

---

## 🎨 Theme & Design

The app supports two themes toggled via a switch in the header:

| Token      | Dark      | Light     |
| ---------- | --------- | --------- |
| Background | `#111111` | `#f4f3ef` |
| Surface    | `#1a1a1a` | `#ffffff` |
| Accent     | `#c8f05a` | `#2d6a1f` |
| Text       | `#e8e8e8` | `#111111` |

All theme values are managed through **CSS custom properties** on the `:root` element, making it easy to customize or extend.

---

## 💾 Data Persistence

Tasks and theme preference are saved to the browser's `localStorage`:

| Key        | Value                      |
| ---------- | -------------------------- |
| `tm_tasks` | JSON array of task objects |
| `tm_theme` | `"dark"` or `"light"`      |

**Task object structure:**

```json
{
  "id": 1700000000000,
  "title": "Design the landing page",
  "priority": "high",
  "due": "2024-12-01",
  "done": false
}
```

---

## 🗺️ Roadmap


- [ ] Task categories / labels
- [ ] Search and keyword filter
- [ ] Export tasks to CSV
- [ ] Subtasks / checklists
- [ ] Recurring tasks
- [ ] Notification Alerts

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes
   ```bash
   git commit -m "Add: your feature description"
   ```
4. Push to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Nikhil Maurya**
