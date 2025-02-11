import doneIcon from "/assets/done.svg";
import deleteSvg from "/assets/delete.svg";
import editIcon from "/assets/edit.svg";
import { getFromLocalStorage, updateData, data } from "../Object/localStorage";
import { storeData } from "../Object/dataControl";
import { format } from 'date-fns';

export default function makeTaskList(type) {
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

        titleTask.classList.add("title-task");

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
            updateData();
            let data = getFromLocalStorage();
            storeData(data);
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

            let formatDate = format(due.value, 'dd-MM-yyyy');
            due.value = due.value;

            const objTitle = task.title;
            let index = type.tasks.findIndex((task) => task.title === objTitle);

            type.tasks.splice(index, 1);
            makeTaskList(type);
            updateData();
            let data = getFromLocalStorage();
            storeData(data);
            dialog.showModal();
        });

        const deleteIcon = document.createElement("img");
        deleteIcon.src = deleteSvg;
        deleteIcon.addEventListener("click", () => {
            const objTitle = task.title;
            let index = type.tasks.findIndex((task) => task.title === objTitle);
            type.tasks.splice(index, 1);
            updateData();
            let data = getFromLocalStorage();
            storeData(data);
            makeTaskList(type);
        });

        if (task.status === "Finish") {
            divTask.style.cssText = "border: 10px solid var(--green-clr);";
            done.style.cssText = "filter: var(--icon-green-clr);";
            deleteIcon.style.cssText = "filter: var(--icon-green-clr);";
            edit.style.cssText = "filter: var(--icon-green-clr);";
            titleTask.style.color = "var(--green-clr)";
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

        updateData();
        let data = getFromLocalStorage();
        storeData(data);
        dialog.showModal();
    });
    container.appendChild(addCard);
}