import "./styles.css";
import makeContent from "./DOM/DOM"
import makeProjectList from "./DOM/makeProjectList";
import { dailyTasks, myProjects, quickTasks, Project, addProject, storeData } from "./Object/dataControl";
import { updateData, getFromLocalStorage } from "./Object/localStorage";

document.addEventListener("DOMContentLoaded", () => {
    let data = getFromLocalStorage();
    if (localStorage.length !== 0) {
        storeData(data);
    }
    makeContent(dailyTasks, myProjects);
});

const dailyBtn = document.querySelector("#daily");

dailyBtn.addEventListener("click", () => {
    updateData();
    let data = getFromLocalStorage();
    storeData(data);
    makeContent(dailyTasks, myProjects);
});

const quickBtn = document.querySelector("#quick");

quickBtn.addEventListener("click", () => {
    updateData();
    let data = getFromLocalStorage();
    storeData(data);
    makeContent(quickTasks, myProjects);
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
    updateData();
    let data = getFromLocalStorage();
    storeData(data)
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
    updateData();
    let data = getFromLocalStorage();
    storeData(data);
    makeProjectList(myProjects);
});

const closeProjectBtn = document.querySelector(".project-close");

closeProjectBtn.addEventListener("click", () => {
    const dialog = document.getElementById("dialog-project");
    event.preventDefault();

    const title = document.getElementById("projectTitle");
    const desc = document.getElementById("projectDesc");

    title.value = '';
    desc.value = '';

    updateData();
    let data = getFromLocalStorage();
    storeData(data);

    dialog.close();
});