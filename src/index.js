import "./styles.css";
import { makeTaskContent, makeTaskList, makeDialogForm, makeProjectList } from "./DOM";
import { dailyTasks, myProjects, quickTasks, Task, addTask, Project, addProject } from "./object";

console.log(dailyTasks);

document.addEventListener("DOMContentLoaded", () => {
    makeProjectList(myProjects);

    makeTaskContent(dailyTasks);
    makeTaskList(dailyTasks);
    makeDialogForm(dailyTasks);
});

const dailyBtn = document.querySelector("#daily");

dailyBtn.addEventListener("click", () => {
    makeTaskContent(dailyTasks);
    makeTaskList(dailyTasks);
    makeDialogForm(dailyTasks);
    makeProjectList(myProjects);
});

const quickBtn = document.querySelector("#quick");

quickBtn.addEventListener("click", () => {
    makeTaskContent(quickTasks);
    makeTaskList(quickTasks);
    makeDialogForm(quickTasks);
    makeProjectList(myProjects);
});

const projectBtn = document.querySelector("#project");
let projectCheck = true;

projectBtn.addEventListener("click", () => {
    const projectList = document.querySelector(".project-list");

    if (projectCheck === true) {
        projectList.style.cssText = "opacity: 100;"
        projectCheck = false;
    } else {
        projectList.style.cssText = "opacity: 0;"
        projectCheck = true;
    }
});

const newProjectBtn = document.querySelector(".project-submit");

newProjectBtn.addEventListener("click", () => {
    const dialog = document.getElementById("dialog-project");
    event.preventDefault();

    const title = document.getElementById("projectTitle");
    const desc = document.getElementById("projectDesc");

    const newProject = new Project(title.value, desc.value);
    addProject(newProject, myProjects);
    dialog.close();
    makeProjectList(myProjects);
});