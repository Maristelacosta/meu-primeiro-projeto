let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

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

    tasks.push(task);

    saveTasks();
    renderTasks();

    input.value = "";
}

function renderTasks() {

    const taskList =
        document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li =
            document.createElement("li");

        li.innerHTML = `
            ${task}
            <button onclick="removeTask(${index})">
                ❌
            </button>
        `;

        taskList.appendChild(li);
    });
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
