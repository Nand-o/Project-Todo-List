import "./styles.css";
import { makeTaskContent, makeTaskList, makeDialogForm } from "./DOM";
import { Task, addTask } from "./object";

let dailyTasks = {
    title: "Daily Tasks",
    description: "blabalbalblalbalblalba",
    tasks: [],
};

const cleanBed = new Task("Cleaning Bed", "Clean bed sheet and pillow", "29-02-2025", "Finish");
addTask(cleanBed, dailyTasks);

const washFace = new Task("Washing Face", "Wash face with soap", "20-00-2005", "Finish");
addTask(washFace, dailyTasks);

const workout = new Task("Working Out", "Hit gym at 4pm", "20-00-2005", "Ongoing");
addTask(workout, dailyTasks);

console.log(dailyTasks);

makeTaskContent(dailyTasks);
makeTaskList(dailyTasks);
makeDialogForm(dailyTasks);
