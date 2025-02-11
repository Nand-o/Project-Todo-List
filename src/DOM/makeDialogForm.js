import { Task, addTask, storeData } from "../Object/dataControl";
import { format } from 'date-fns';
import { getFromLocalStorage, updateData } from "../Object/localStorage";
import makeTaskList from './makeTaskList';

export default function makeDialogForm(type) {
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
    inputDue.type = "date";
    const formattedDate = format(new Date(), 'yyyy-MM-dd');
    inputDue.value = formattedDate;
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

        let formatDate = format(due.value, 'dd-MM-yyyy');
        let dueTask = formatDate;

        const newTask = new Task(nameTask, descTask, dueTask);
        addTask(newTask, type);

        name.value = "";
        desc.value = "";
        due.value = "";

        dialog.close();
        updateData();
        let data = getFromLocalStorage();
        storeData(data);
        container.textContent = ''
        makeTaskList(type);
    });

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.addEventListener("click", () => {
        const dialog = document.getElementById(`dialog${type.title}`);

        event.preventDefault();

        const name = document.getElementById("taskName");
        const desc = document.getElementById("taskDesc");
        const due = document.getElementById("taskDue");

        name.value = "";
        desc.value = "";
        due.value = "";

        updateData();
        let data = getFromLocalStorage();
        storeData(data);

        dialog.close();
    });

    divForm.appendChild(labelName);
    divForm.appendChild(inputName);
    divForm.appendChild(labelDesc);
    divForm.appendChild(inputDesc);
    divForm.appendChild(labelDue);
    divForm.appendChild(inputDue);
    divForm.appendChild(submitBtn);
    divForm.appendChild(closeBtn);

    form.appendChild(divForm)
    dialog.appendChild(form)

    container.appendChild(dialog);
}