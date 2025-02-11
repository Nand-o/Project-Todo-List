let dailyTasks = {
    title: "Daily Tasks",
    description: "Stay on top of your routine with our Daily Tasks section. This is where you can quickly add, manage, and track the tasks you need to complete each day. Whether it's work, personal errands, or small goals, keeping everything organized in one place helps you focus on what matters most. Prioritize, check off completed items, and feel accomplished as you make your way through your day. Ready to tackle the day ahead? Start with your list!",
    tasks: [],
};

let quickTasks = {
    title: "Quick Tasks",
    description: "For those moments when you just need to get things done fast, the Quick Tasks section is here to help. Add your small, time-sensitive tasks with a single click—perfect for quick reminders, errands, or things that can be knocked out in no time. Stay efficient and keep your day moving by checking off tasks as you breeze through them. Short, sweet, and simple—get it done in a flash!",
    tasks: [],
}

let myProjects = [];

// Default daily task

const cleanBed = new Task("Cleaning Bed", "Clean bed sheet and pillow", "29-02-2025", "Finish");
addTask(cleanBed, dailyTasks);

const washFace = new Task("Washing Face", "Wash face with soap", "20-00-2005", "Finish");
addTask(washFace, dailyTasks);

const workout = new Task("Working Out", "Hit gym at 4pm", "20-00-2005", "Ongoing");
addTask(workout, dailyTasks);

// Default quick task

const checkGarage = new Task("Checking Garage", "Check the garage", "20-00-2000");
addTask(checkGarage, quickTasks);

const loginGame = new Task("Login Game", "Login genshin impact for daily login", "29-02-2025");
addTask(loginGame, quickTasks);

// Default Project
const buildLego = new Project("Build Lego", "This project for me to track my lego build");
addProject(buildLego, myProjects);


function Task(title, description, due, status = "Ongoing") {
    this.title = title;
    this.description = description;
    this.due = due;
    this.status = status;
}

function addTask(task, type) {
    type.tasks.push(task)
}

function Project(title, description) {
    this.title = title;
    this.description = description;
    this.tasks = [];
}

function addProject(project, projects) {
    projects.push(project);
}

function saveToLocalStorage(array) {
    localStorage.setItem("localTodo", JSON.stringify(array));
}

function getFromLocalStorage() {
    if(localStorage.length === 0) {
        saveToLocalStorage([dailyTasks, quickTasks, myProjects]);
    }
    return JSON.parse(localStorage.getItem("localTodo"));
}

function updateData () {
    saveToLocalStorage([dailyTasks, quickTasks, myProjects]);
}

function storeData (array) {
    dailyTasks = array[0];
    quickTasks = array[1];
    myProjects = array[2];
}

export { dailyTasks, myProjects, quickTasks, Task, addTask, Project, addProject, getFromLocalStorage, updateData, storeData};