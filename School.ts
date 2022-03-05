import { Student } from "./Student";
import { StudentList } from "./StudentList";

const student1 = new Student(
    "2015-105867",
    "BSIT",
    "CCS",
    "Salbilla",
    20,
    "MaLe",
    "Tanay Rizal"
);

const student2 = new Student(
    "2015-105868",
    "BSIT",
    "CCS",
    "Jherwin",
    20,
    "Male",
    "Niogan Pililla"
);

const student3 = new Student(
    "2015-105869",
    "BSIT",
    "CSS",
    "Joemari",
    20,
    "Male",
    "Tanay Rizal"
);

const studentList = new StudentList([
    student1,
    student2,
    student3
]);


console.log(studentList.getStudents());
// console.log(studentList.updateStudentName("2015-105867", "Aurea"));
// console.log(studentList.updateAge("2015-105867", "22"));
// console.log(studentList.checkStudentId("2015-105868"));
// console.log(studentList.updateCourse("2015-105867", "BSIT"));
// console.log(studentList.updateCollege("2015-105869","College of Computer Studies"));
// console.log(studentList.updateAddress("2015-105869", "Taytay, Rizal"));
// console.log(studentList.removeStudent("2015-105867"));
console.log(studentList.numberOfStudent());
console.log(studentList.getStudents());