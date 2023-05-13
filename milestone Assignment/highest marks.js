
let marks = [78, 89, 92, 85, 80];


let highestMarks = marks[0];


for (let i = 1; i < marks.length; i++) {
  highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
}


console.log(`The highest marks scored in the class is ${highestMarks}.`);
