var Student = require("./student.js");

var Classroom = function(studentNum, profName, roomNum) {
    this.students = [];
    this.studentNum = studentNum;
    this.profName = profName;
    this.roomNum = roomNum;

    this.addStudent = function(name, subject, gpa) {
        this.students.push(new Student(name, subject, gpa));
      };
}

module.exports = Classroom;