'use strict';

const Heap = require("collections/heap");
const BUDGET_CAPACITY = 5;
const BUDGET_THRESHOLD = 800;
const studentArr = require('./studentsBD.js');

function CreateStudent({name, surname, ratingPoint, schoolPoint}) {
    this.id = CreateStudent._id++;
    this.name = name;
    this.surname = surname;
    this.ratingPoint = ratingPoint;
    this.schoolPoint = schoolPoint;
    this.isSelfPayment = true;
}

CreateStudent._id = 0;

const setAllCreatedStudentsByConstructor = studentArr => {
    let students = studentArr.map(student => new CreateStudent(student));
    let studentsHeap = new Heap(students, null, (s1, s2) => {
        return s1.ratingPoint === s2.ratingPoint
            ? s1.schoolPoint - s2.schoolPoint
            : s1.ratingPoint - s2.ratingPoint;
    });

    let freeBudgetSize = BUDGET_CAPACITY;

    while(studentsHeap.length && freeBudgetSize) {
        let student = studentsHeap.pop();

        if (student.ratingPoint >= BUDGET_THRESHOLD) {
            student.isSelfPayment = false;
            freeBudgetSize--;
        }
    }
    return students;
};

const newStudentsArr = setAllCreatedStudentsByConstructor(studentArr);
console.log(newStudentsArr);