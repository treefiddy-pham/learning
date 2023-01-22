// filters array of students to those with score of at least 90.
function topStudents(array) {
    return array.filter((function(x) {
        return (x.grade >= 90);
    }));
}

module.exports = topStudents;