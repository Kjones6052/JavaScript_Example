let grades = [];

function addGrade(grade) {
    grades.push(grade);
}

function removeGrade(grade) {
    let index = grades.indexOf(grade);
    if (index !== -1) {
        grades.splice(index, 1);
    } else {
        console.log(`Grade ${grade} removed successfully.`);
    }
}

function sortGrades() {
    grades.sort((a, b) => a - b);
}

function calculateAverage() {
    if (grades.length === 0) {
        console.log("No grades available.");
        return;
    }
    let total = grades.reduce((acc, curr) => acc + curr, 0);
    let average = total / grades.length;
    console.log("Average grade:", average.toFixed(2));
}

addGrade(85);
addGrade(92);
addGrade(78);

console.log("Initial grades:", grades):

removeGrade(92);
console.log("Grades after removal:", grades);

sortGrades();
console.log("Sorted grades:", grades);

calculateAverage()