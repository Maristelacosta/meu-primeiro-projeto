let tasks = JSON.parse(
    localStorage.getItem("tasks")
) || [];

renderTasks();

function addTask() {

    const input =
        document.getElementById("taskInput");

    const task =
        input.value.trim();

    if (task === "") {

        alert("Digite uma tarefa.");

        return;
    }

    tasks.push({
        text: task,
        completed: false
    });

    saveTasks();

    renderTasks();

    input.value = "";
}

function renderTasks() {

    const taskList =
        document.getElementById("taskList");

    taskList.innerHTML = "";

    const pendingTasks =
        tasks.filter(task => !task.completed);

    pendingTasks.forEach(task => {

        const index =
            tasks.indexOf(task);

        const li =
            document.createElement("li");

        li.innerHTML = `
            <span>${task.text}</span>

            <div class="task-buttons">

                <button
                    class="complete-btn"
                    onclick="completeTask(${index})">
                    ✅
                </button>

                <button
                    class="delete-btn"
                    onclick="removeTask(${index})">
                    ❌
                </button>

            </div>
        `;

        taskList.appendChild(li);
    });

    updateCounter();
}

function completeTask(index) {

    tasks[index].completed = true;

    saveTasks();

    renderTasks();
}

function removeTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    renderTasks();
}

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function updateCounter() {

    const pending =
        tasks.filter(
            task => !task.completed
        ).length;

    document.getElementById(
        "taskCounter"
    ).textContent =
        `📋 Tarefas pendentes: ${pending}`;
}

document
    .getElementById("taskInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            addTask();
        }

    });
