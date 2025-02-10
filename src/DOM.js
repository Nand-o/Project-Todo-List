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

function makeTaskList (type) {
    const container = document.querySelector(".content-task");

    type.tasks.forEach(task => {
        const divTask = document.createElement("div");
        divTask.classList.add("task");

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
        
        container.appendChild(divTask);
    });
}


export {makeTaskContent, makeTaskList};