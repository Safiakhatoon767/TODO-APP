function addTask() {
    let taskInput = document.getElementById("TaskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task :)");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    // Mark done
    span.onclick = function () {
        span.classList.toggle("done");
    };

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById("tasklist").appendChild(li);

    taskInput.value = "";
}
