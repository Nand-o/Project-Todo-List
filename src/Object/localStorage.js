import { dailyTasks, quickTasks, myProjects } from "./dataControl";

function saveToLocalStorage(array) {
    localStorage.setItem("localTodo", JSON.stringify(array));
}

function getFromLocalStorage() {
    if (localStorage.length === 0) {
        saveToLocalStorage([dailyTasks, quickTasks, myProjects]);
    }
    return JSON.parse(localStorage.getItem("localTodo"));
}

function updateData() {
    saveToLocalStorage([dailyTasks, quickTasks, myProjects]);
}


export {
    updateData,
    getFromLocalStorage,
}