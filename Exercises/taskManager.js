let tasks = [];

function addTask(taskDescription) {
    tasks.push(taskDescription);
}

function removeTask(taskDescription) {
    let index = tasks.indexOf(taskDescription);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Task "${taskDescription}" removed successfully.`);
    } else {
        console.log(`Task "${taskDescription}" not found.`);
    }
}

function updateTask(originalTask, updatedTask) {
    let index = tasks.indexOf(originalTask);
    if (index !== -1) {
        tasks[index] = updatedTask;
        console.log(`Task "${originalTask}" updated to "${updatedTask}".`);
    } else {
        console.log(`Task "${originalTask}" not found.`);
    }
}

addTask("Complete assignment");
addTask("Buy groceries");
addTask("Call mom");

console.log("Initial tasks:", tasks);

removeTask("Buy groceries");
console.log("Tasks after removal:", tasks);

updateTask("Call mom", "Call dad");
console.log("Tasks after update:", tasks);