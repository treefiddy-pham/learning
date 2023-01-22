// function to sort an array of students; first by property 'graduated' in ascending order then by property 'grade' in descending order
// graduated is a boolean type, and grade is an integer

function sortStudents(students) {
    // additional sorting by grade added if graduated status is same.
    students.sort(function comparison(a,b) {
        if(a.graduated && !b.graduated) {
            return -1;
        }
        if(!a.graduated && b.graduated) {
            return 1;
        }
        if(a.graduated == b.graduated) {
            return b.grade - a.grade;
        }
    });
}

module.exports = sortStudents;