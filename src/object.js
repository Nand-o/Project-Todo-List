function Task (title, description, due, status = "Ongoing") {
    this.title = title;
    this.description = description;
    this.due = due;
    this.status = status;
}

function addTask (task, type) {
    type.tasks.push(task)
}

export {Task, addTask};