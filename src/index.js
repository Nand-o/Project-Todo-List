import "./styles.css";
import { makeTaskContent, makeTaskList, makeDialogForm } from "./DOM";
import { Task, addTask } from "./object";

let dailyTasks = {
    title: "Daily Tasks",
    description: "blabalbalblalbalblalba",
    tasks: [],
};

const cleanBed = new Task("Cleaning Bed", "Clean bed sheet and pillow", "29-02-2025", "done");
addTask(cleanBed, dailyTasks);

const clesanBed = new Task("Cleaning Bed", "Clean bed sheet and pillow", "29-02-2025", "done");
addTask(clesanBed, dailyTasks);

const cleasnBed1 = new Task("Cleaning Bed", "Clean bed sheet and pillow", "29-02-2025", "done");
addTask(cleasnBed1, dailyTasks);

console.log(dailyTasks);

makeTaskContent(dailyTasks);
makeTaskList(dailyTasks);
makeDialogForm(dailyTasks);
