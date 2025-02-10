function Task (title, description, due, status) {
    this.title = title;
    this.description = description;
    this.due = due;
    this.status = status;
}

function addTask (task, typeTasks) {
    typeTasks.push(task)
}

