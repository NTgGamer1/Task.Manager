let tasks = JSON.parse(localStorage.getItem("tm_tasks") || "[]");
let filter = "all";

// Theme
const toggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("tm_theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
toggle.checked = savedTheme === "dark";

toggle.addEventListener("change", () => {
  const theme = toggle.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("tm_theme", theme);
});

document.getElementById("taskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

function saveTasks() {
  localStorage.setItem("tm_tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) {
    input.focus();
    return;
  }

  tasks.unshift({
    id: Date.now(),
    title: text,
    priority: document.getElementById("prioritySelect").value,
    due: document.getElementById("dateInput").value,
    done: false,
  });

  input.value = "";
  saveTasks();
  render();
}

function toggleDone(id) {
  const t = tasks.find((t) => t.id === id);
  if (t) {
    t.done = !t.done;
    saveTasks();
    render();
  }
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  render();
}

function setFilter(f, btn) {
  filter = f;
  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.classList.remove("active");
    b.setAttribute("aria-pressed", "false");
  });
  btn.classList.add("active");
  btn.setAttribute("aria-pressed", "true");
  render();
}

function isOverdue(due) {
  if (!due) return false;
  return new Date(due) < new Date(new Date().toDateString());
}

function formatDate(due) {
  if (!due) return "";
  const d = new Date(due + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

function render() {
  let filtered = tasks;
  if (filter === "pending") filtered = tasks.filter((t) => !t.done);
  else if (filter === "done") filtered = tasks.filter((t) => t.done);
  else if (["high", "medium", "low"].includes(filter))
    filtered = tasks.filter((t) => t.priority === filter);

  const list = document.getElementById("taskList");

  if (filtered.length === 0) {
    list.innerHTML = `<div class="empty"><div class="empty-icon">📋</div>No tasks here yet.<br>Add one above!</div>`;
  } else {
    list.innerHTML = filtered
      .map(
        (t) => `
        <article class="task ${t.done ? "done" : ""}" role="listitem">
          <button
            type="button"
            class="task-check ${t.done ? "checked" : ""}"
            onclick="toggleDone(${t.id})"
            aria-label="${t.done ? "Mark task as pending" : "Mark task as completed"}"
          ></button>
          <div class="task-body">
            <div class="task-title">${escapeHtml(t.title)}</div>
            <div class="task-meta">
              <span class="priority-badge priority-${t.priority}">${t.priority}</span>
              ${t.due ? `<span class="due-date ${isOverdue(t.due) && !t.done ? "overdue" : ""}">📅 ${formatDate(t.due)}${isOverdue(t.due) && !t.done ? " · overdue" : ""}</span>` : ""}
            </div>
          </div>
          <button type="button" class="task-del" aria-label="Delete task" onclick="deleteTask(${t.id})">✕</button>
        </article>
      `,
      )
      .join("");
  }

  document.getElementById("totalCount").textContent = tasks.length;
  document.getElementById("pendingCount").textContent = tasks.filter(
    (t) => !t.done,
  ).length;
  document.getElementById("doneCount").textContent = tasks.filter(
    (t) => t.done,
  ).length;
}

render();
