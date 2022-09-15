function getTotal(assignment1,assignment2,assignment3) {
    const total= assignment1+assignment2+assignment3;
    const average =total/3;
    return average;
}
const assignmentMarks1 = 60;
const assignmentMarks2 = 59;
const assignmentMarks3 = 58;

var myAverage =getTotal(assignmentMarks1,assignmentMarks2,assignmentMarks3);
console.log(myAverage);
