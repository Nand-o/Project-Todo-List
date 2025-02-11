import arrowList from "/assets/arrow-list.svg";
import deleteSvg from "/assets/delete.svg";
import { getFromLocalStorage, updateData } from "../Object/localStorage";
import { storeData } from "../Object/dataControl";
import makeContent from "./DOM";

export default function makeProjectList(projects) {
    const container = document.querySelector(".project-list");
    container.textContent = '';
    let i = 1;

    projects.forEach(project => {
        const divProject = document.createElement("div");
        divProject.classList.add(`project`);
        divProject.setAttribute("id", `project${i}`);

        divProject.addEventListener("click", () => {
            updateData();
            let data = getFromLocalStorage();
            storeData(data);
            makeContent(project, projects);
        });

        const arrow = document.createElement("img");
        arrow.src = arrowList;

        const newText = document.createElement("p");
        newText.textContent = project.title;

        const deleteIcon = document.createElement("img");
        deleteIcon.classList.add("delete-icon");
        deleteIcon.src = deleteSvg;
        deleteIcon.addEventListener("click", () => {
            const objTitle = project.title;
            let index = projects.findIndex((project) => project.title === objTitle);
            projects.splice(index, 1);
            updateData();
            let data = getFromLocalStorage();
            storeData(data);
            makeContent(project, projects);
        });

        divProject.appendChild(arrow);
        divProject.appendChild(newText);
        divProject.appendChild(deleteIcon);
        container.appendChild(divProject);
        i++;
    });

    const newProject = document.createElement("div");
    newProject.classList.add("addProject");
    newProject.addEventListener("click", () => {
        const dialog = document.getElementById("dialog-project");

        dialog.showModal();
    });

    const arrow = document.createElement("img");
    arrow.src = arrowList;

    const newText = document.createElement("p");
    newText.textContent = "New Project +";

    newProject.appendChild(arrow);
    newProject.appendChild(newText);

    container.appendChild(newProject);
}