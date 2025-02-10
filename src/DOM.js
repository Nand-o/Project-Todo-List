import { Task, addTask } from "./object";
import doneIcon from "/assets/done.svg";
import deleteSvg from "/assets/delete.svg";
import arrowList from "/assets/arrow-list.svg";
import editIcon from "/assets/edit.svg";

function makeTaskContent(type) {
    const container = document.querySelector(".content");
    container.textContent = '';

    const divContent = document.createElement("div");
    divContent.classList.add("content-area");

    const contentTitle = document.createElement("div");
    const contentDesc = document.createElement("div");
    const contentTask = document.createElement("div");

    contentTitle.classList.add("content-title");
    contentDesc.classList.add("content-desc");
    contentTask.classList.add("content-task");

    const title = document.createElement("p");
    const desc = document.createElement("p");

    title.classList.add("title-project");
    desc.classList.add("desc-project");

    title.textContent = type.title;
    desc.textContent = type.description;

    contentTitle.appendChild(title);
    contentDesc.appendChild(desc);

    divContent.appendChild(contentTitle);
    divContent.appendChild(contentDesc);
    divContent.appendChild(contentTask);

    container.appendChild(divContent);
}

function makeTaskList(type) {
    const container = document.querySelector(".content-task");
    container.textContent = '';
    let i = 1;

    type.tasks.forEach(task => {
        const divTask = document.createElement("div");
        divTask.classList.add(`task`);
        divTask.setAttribute("id", `item${i}`);

        const titleTask = document.createElement("p");
        const descTask = document.createElement("p");
        const dueTask = document.createElement("p");
        const statusTask = document.createElement("p");

        titleTask.textContent = task.title;
        descTask.textContent = task.description;
        dueTask.textContent = task.due;
        statusTask.textContent = task.status;

        divTask.appendChild(titleTask);
        divTask.appendChild(descTask);
        divTask.appendChild(dueTask);
        divTask.appendChild(statusTask);

        const divIcon = document.createElement("div");
        divIcon.classList.add("task-icon");

        const done = document.createElement("img");
        done.src = doneIcon;
        done.addEventListener("click", () => {
            const objTitle = task.title;
            const objStatus = task.status;
            let index = type.tasks.findIndex((task) => task.title === objTitle);

            if (objStatus === "Finish") {
                type.tasks[index].status = "Ongoing";
                makeTaskList(type);
            } else {
                type.tasks[index].status = "Finish";
                makeTaskList(type);
            }
        });

        const edit = document.createElement("img");
        edit.src = editIcon;
        edit.addEventListener("click", () => {
            const dialog = document.getElementById(`dialog${type.title}`);

            const name = document.getElementById("taskName");
            const desc = document.getElementById("taskDesc");
            const due = document.getElementById("taskDue");

            name.value = task.title;
            desc.value = task.description;
            due.value = task.due;

            const objTitle = task.title;
            let index = type.tasks.findIndex((task) => task.title === objTitle);

            type.tasks.splice(index, 1);
            makeTaskList(type);

            dialog.showModal();
        });

        const deleteIcon = document.createElement("img");
        deleteIcon.src = deleteSvg;
        deleteIcon.addEventListener("click", () => {
            const objTitle = task.title;
            let index = type.tasks.findIndex((task) => task.title === objTitle);
            type.tasks.splice(index, 1);
            makeTaskList(type);
        });

        if (task.status === "Finish") {
            divTask.style.cssText = "border: 10px solid var(--green-clr);";
            done.style.cssText = "filter: var(--icon-green-clr);";
            deleteIcon.style.cssText = "filter: var(--icon-green-clr);";
            edit.style.cssText = "filter: var(--icon-green-clr);";
        }

        divIcon.appendChild(done);
        divIcon.appendChild(edit);
        divIcon.appendChild(deleteIcon);

        divTask.appendChild(divIcon);

        container.appendChild(divTask);
        i++;
    });

    const addCard = document.createElement("div");
    addCard.classList.add("addTask");

    const plus = document.createElement("p");
    plus.textContent = "+";

    const addText = document.createElement("p");
    addText.textContent = "New Task";
    addText.classList.add("add-text");

    addCard.appendChild(plus);
    addCard.appendChild(addText)
    addCard.addEventListener("click", () => {
        const dialog = document.getElementById(`dialog${type.title}`);

        dialog.showModal();
    });
    container.appendChild(addCard);
}

function makeDialogForm(type) {
    const container = document.querySelector(".content");
    // container.textContent = '';

    const dialog = document.createElement("dialog");
    dialog.id = `dialog${type.title}`;

    const form = document.createElement("form");

    const divForm = document.createElement("div");
    divForm.classList.add("form-container");

    const labelName = document.createElement("label");
    labelName.textContent = "Task Name";

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.setAttribute("id", "taskName");

    const labelDesc = document.createElement("label");
    labelDesc.textContent = "Description";

    const inputDesc = document.createElement("input");
    inputDesc.type = "text";
    inputDesc.setAttribute("id", "taskDesc");

    const labelDue = document.createElement("label");
    labelDue.textContent = "Due?";

    const inputDue = document.createElement("input");
    inputDue.type = "text";
    inputDue.setAttribute("id", "taskDue");

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.addEventListener("click", () => {
        const dialog = document.getElementById(`dialog${type.title}`);
        const container = document.querySelector(".content-task");

        event.preventDefault();

        const name = document.getElementById("taskName");
        const desc = document.getElementById("taskDesc");
        const due = document.getElementById("taskDue");

        let nameTask = name.value;
        let descTask = desc.value;
        let dueTask = due.value;

        const newTask = new Task(nameTask, descTask, dueTask);
        addTask(newTask, type);

        name.value = "";
        desc.value = "";
        due.value = "";

        dialog.close();
        container.textContent = '';
        makeTaskList(type);
    });

    divForm.appendChild(labelName);
    divForm.appendChild(inputName);
    divForm.appendChild(labelDesc);
    divForm.appendChild(inputDesc);
    divForm.appendChild(labelDue);
    divForm.appendChild(inputDue);
    divForm.appendChild(submitBtn);

    form.appendChild(divForm)
    dialog.appendChild(form)

    container.appendChild(dialog);
}

function makeProjectList(projects) {
    const container = document.querySelector(".project-list");
    container.textContent = '';
    let i = 1;

    projects.forEach(project => {
        const divProject = document.createElement("div");
        divProject.classList.add(`project`);
        divProject.setAttribute("id", `project${i}`);

        divProject.addEventListener("click", () => {
            makeTaskContent(project);
            makeTaskList(project);
            makeDialogForm(project);
            makeProjectList(projects);
        });

        const arrow = document.createElement("img");
        arrow.src = arrowList;

        const newText = document.createElement("p");
        newText.textContent = project.title;

        divProject.appendChild(arrow);
        divProject.appendChild(newText);
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


export { makeTaskContent, makeTaskList, makeDialogForm, makeProjectList };