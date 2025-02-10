import "./styles.css";
import { makeTaskContent, makeTaskList, makeDialogForm, makeProjectList } from "./DOM";
import { dailyTasks, myProjects, quickTasks, Task, addTask, Project, addProject } from "./object";

console.log(dailyTasks);



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

makeProjectList(myProjects);
