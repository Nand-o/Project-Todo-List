export default function makeTaskContent(type) {
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