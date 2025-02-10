import "./styles.css";
import { makeTaskContent, makeTaskList } from "./DOM";

let dailyTasks = {
    title: "Daily Tasks",
    description: "blabalbalblalbalblalba",
    tasks: [],
};

function Task (title, description, due, status) {
    this.title = title;
    this.description = description;
    this.due = due;
    this.status = status;
}

function addTask (task, type) {
    type.tasks.push(task)
}

const cleanBed = new Task("Cleaning Bed", "Clean bed sheet and pillow", "29-02-2025", "done");
addTask(cleanBed, dailyTasks);

const clesanBed = new Task("Cleaning Bed", "Clean bed sheet and pillow", "29-02-2025", "done");
addTask(clesanBed, dailyTasks);

const cleasnBed1 = new Task("Cleaning Bed", "Clean bed sheet and pillow", "29-02-2025", "done");
addTask(cleasnBed1, dailyTasks);

console.log(dailyTasks);

makeTaskContent(dailyTasks);
makeTaskList(dailyTasks);
