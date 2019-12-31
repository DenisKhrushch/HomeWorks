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

let randomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min)) + min;

function CreateStudent({name, surname, ratingPoint, schoolPoint}) {
    this.id = randomNumber();
    this.name = name;
    this.surname = surname;
    this.ratingPoint = ratingPoint;
    this.schoolPoint = schoolPoint;
    this.isSelfPayment = this.ratingPoint >= 800;
}

// const setAllCreatedStudentsByConstructor = studentArr => {
//     //создаем новый массив экземпялоров, созданных функцией-конструктором
//     let arrOfStudents = [];
//     for (let i = 0; i < studentArr.length; i++) {
//         const studentObj = new CreateStudent(studentArr[i]);
//         arrOfStudents.push(studentObj);
//     }
//
//     //создаем массив, где все бюджетники
//     let temp = [];
//     for (let i = 0; i < arrOfStudents.length; i++) {
//         if (arrOfStudents[i].ratingPoint >= 800) {
//             temp.push(arrOfStudents[i]);
//         }
//     }
//
//     //сортируем массив бюджетников
//     temp.sort(function (a, b) {
//         return a.ratingPoint - b.ratingPoint;
//     });
//
//     //проверяем дублирование значений с оценками
//     for (let i = 0; i < temp.length - 1; i++) {
//         if (temp[i].ratingPoint === temp[i + 1].ratingPoint) {
//             if (temp[i].schoolPoint > temp[i + 1].schoolPoint) {
//                 temp[i + 1].isSelfPayment = false;
//                 temp.splice((i + 1),1);
//             } else {
//                 temp[i].isSelfPayment = false;
//                 temp.splice(i,1);
//             }
//         }
//     }
//
//     //оставляем 5 бюджетных мест
//     temp.reverse();
//     for (let i = 5; i < temp.length; i++) {
//         temp[i].isSelfPayment = false;
//     }
//     temp.length = 5;
//     return temp
// };
//
// const newStudentsArr = setAllCreatedStudentsByConstructor(studentArr);
// console.log(newStudentsArr);
//


//________________________________ВТОРАЯ РЕАЛИЗАЦИЯ - РАЗБИЕНИЕ ФУНКЦИИ НА ПОДФУНКЦИИ___________________________________
const setAllCreatedStudentsByConstructor = studentArr => {
    //создаем новый массив экземпялоров, созданных функцией-конструктором
    let arrOfStudents = [];
    for (let i = 0; i < studentArr.length; i++) {
        const studentObj = new CreateStudent(studentArr[i]);
        arrOfStudents.push(studentObj);
    }
    return arrOfStudents;
};
const onlySelfPayment = arr => {
    //создаем массив, где все бюджетники
    let selfPayment = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].ratingPoint >= 800) {
            selfPayment.push(arr[i]);
        }
    }
    return selfPayment;
};
const whoIsBetter = arr => {
    //проверяем дублирование значений с оценками
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].ratingPoint === arr[i + 1].ratingPoint) {
            if (arr[i].schoolPoint > arr[i + 1].schoolPoint) {
                arr[i + 1].isSelfPayment = false;
                arr.splice((i + 1),1);
            } else {
                arr[i].isSelfPayment = false;
                arr.splice(i,1);
            }
        }
    }
    return arr;
};
const sort = arr => {
    arr.sort(function (a, b) {
        return a.ratingPoint - b.ratingPoint;
    });
};
const onlyTheBestStudents = arr => {
    //оставляем 5 бюджетных мест
    arr.reverse();
    for (let i = 5; i < arr.length; i++) {
        arr[i].isSelfPayment = false;
    }
    arr.length = 5;
    return arr
};

let arr = setAllCreatedStudentsByConstructor(studentArr);
let selfPayment = onlySelfPayment(arr);
sort(selfPayment);
whoIsBetter(selfPayment);
console.log(onlyTheBestStudents(selfPayment));