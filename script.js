function addTask() {

    const input =
        document.getElementById("taskInput");

    const task =
        input.value.trim();

    if (task === "") {
        alert("Digite uma tarefa.");
        return;
    }

    const taskList =
        document.getElementById("taskList");

    const li =
        document.createElement("li");

    li.textContent = task;

    taskList.appendChild(li);

    input.value = "";
}
