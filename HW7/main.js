'use strict';

const studentArr = [
    {
        name: 'Сергей',
        surname: 'Войлов',
        ratingPoint: 1000,
        schoolPoint: 1000,
    },
    {
        name: 'Татьяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
    },
    {
        name: 'Станислав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 990,

    },
    {
        name: 'Татьяна',
        surname: 'Капустник',
        ratingPoint: 650,
        schoolPoint: 500,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 990,
        schoolPoint: 1100,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
    },
    {
        name: 'Игорь',
        surname: 'Куштым',
        ratingPoint: 870,
        schoolPoint: 790,
    },
    {
        name: 'Инна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
    },
];

class Student {
    constructor({name, surname, ratingPoint, schoolPoint}) {
        this.id = Student._id++;
        this.name = name;
        this.surname = surname;
        this.ratingPoint = ratingPoint;
        this.schoolPoint = schoolPoint;
        this.budget = this.ratingPoint >= 800;
    }

    getFullInfo() {
        return `Я - ${this.name}, Рейтинговый балл - ${this.ratingPoint}, Форма обучения - ${this.budget ? 'Бюджет' : 'Контракт'}`;
    }

    getRankedPlace() {
       return this._rank;
    }
}
Student._id = 1;
//______________________________________________________________________1
const setAllCreatedStudentsByClass = studentArr =>
    [...Array(studentArr.length)]
        .map((_, student) => new Student(studentArr[student]))
        .sort((a,b) => b.ratingPoint - a.ratingPoint)
        .filter((student, index) => {
            if (index > 5)
                student.budget = false;
            return student;
    });

const whoIsBetter = student => {
    //проверяем дублирование значений рейтинга
    for (let i = 0; i < student.length - 1; i++) {
        if (student[i].ratingPoint === student[i + 1].ratingPoint) {
            student[i].schoolPoint > student[i + 1].schoolPoint
                ? student[i + 1].budget = false
                : student[i].budget = false;
        }
    }
    return student;
};
let result = whoIsBetter(setAllCreatedStudentsByClass(studentArr));

//______________________________________________________________________2
result.forEach(item => console.log(item.getFullInfo()));
//______________________________________________________________________3
for (let i = 0; i < result.length; i++)
    result[i]._rank = i + 1;
//______________________________________________________________________4, 5

class Intern extends Student {
    constructor(result, companyName) {
        super(result);
        this.companyName = companyName;
    }

    get currentCourse() {
        return new Date().getFullYear() ? 1 : 0;
    }

    set currentCourse(course) {
        if (course > 0 && course < 5) {
            this.startYear = new Date().getFullYear() - course;
            this.endYear = this.startYear + 4;
        }
    }
    getFullInternInfo() {
        return `Я - ${this.name}, 
        Рейтинговый балл - ${this.ratingPoint}, 
        Форма обучения - ${this.budget ? 'Бюджет' : 'Контракт'}, 
        Интерн в компании - ${this.companyName}`;
    }
}

const intern = new Intern(result[5], 'Google');