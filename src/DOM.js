import { Task, addTask } from "./object";
import doneIcon from "/assets/done.svg";
import deleteSvg from "/assets/delete.svg";

function makeTaskContent(type) {
    const container = document.querySelector(".content");

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

    type.tasks.forEach(task => {
        const divTask = document.createElement("div");
        divTask.classList.add(`task`);

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
            
        });

        const deleteIcon = document.createElement("img");
        deleteIcon.src = deleteSvg;
        deleteIcon.addEventListener("click", () => {
            const objTitle = task.title;
            let index = type.tasks.findIndex((task) => task.title === objTitle);
            type.tasks.splice(index, 1);
            container.textContent = '';
            makeTaskList(type);
        });

        
        divIcon.appendChild(done);
        divIcon.appendChild(deleteIcon);

        divTask.appendChild(divIcon);

        container.appendChild(divTask);
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

        const newTask = new Task(nameTask, descTask, dueTask, "done");
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


export { makeTaskContent, makeTaskList, makeDialogForm };