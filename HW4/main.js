'use strict';

const emplyeeArr = [
    {
        id: 0,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010,
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 1,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200,
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Татьяна',
        surname: 'Коваленко',
        salary: 480,
        workExperience: 3, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 3,
        name: 'Анна',
        surname: 'Кугир',
        salary: 2430,
        workExperience: 20, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'female'
    },
    {
        id: 4,
        name: 'Татьяна',
        surname: 'Капустник',
        salary: 3150,
        workExperience: 30, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 5,
        name: 'Станислав',
        surname: 'Щелоков',
        salary: 1730,
        workExperience: 15, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 6,
        name: 'Денис',
        surname: 'Марченко',
        salary: 5730,
        workExperience: 45, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'male'
    },
    {
        id: 7,
        name: 'Максим',
        surname: 'Меженский',
        salary: 4190,
        workExperience: 39, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 8,
        name: 'Антон',
        surname: 'Завадский',
        salary: 790,
        workExperience: 7, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 9,
        name: 'Инна',
        surname: 'Скакунова',
        salary: 5260,
        workExperience: 49, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 10,
        name: 'Игорь',
        surname: 'Куштым',
        salary: 300,
        workExperience: 1, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
];

//______________________________________1

function Employee(id, name, surname, salary, workExperience, isPrivileges, gender) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
}

const employeeObj = new Employee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');

//______________________________________2

Employee.prototype.getFullName = function () {
    return this.surname + ' ' + this.name;
};
console.log(employeeObj.getFullName());

//______________________________________3

let createEmployesFromArr = arr => {
    let tempArr = [];
    let _ = [];
    for (let i = 0; i < arr.length; i++) {
        tempArr[i] = new Employee(
            arr[i].id,
            arr[i].name,
            arr[i].surname,
            arr[i].salary,
            arr[i].workExperience,
            arr[i].isPrivileges,
            arr[i].gender
        );
    }
    return tempArr;
};

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
//______________________________________4

const getFullNamesFromArr = arr => {
    let tempArr = [];
    let _;
    for (let i = 0; i < arr.length; i++) {
        _ = arr[i].getFullName();
        tempArr.push(_);
    }
    return tempArr;
};

console.log(getFullNamesFromArr(emplyeeConstructArr));
//______________________________________5

const getMiddleSalary = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].salary;
    }
    return Math.round(sum / arr.length);
};

console.log(getMiddleSalary(emplyeeConstructArr));

//______________________________________6

const getRandomEmployee = arr => {
    let min = Math.ceil(0), max = Math.floor(arr.length);
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    console.log(arr[randomNumber]);
};

getRandomEmployee(emplyeeConstructArr);