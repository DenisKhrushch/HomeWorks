// 'use strict';

//_______________________________________________________1

let funcSum = () => {
    let _ = 0;
    return (param) => console.log(_ += param);
};

let sum = funcSum();
// sum(3);
// sum(5);
// sum(228);

//_______________________________________________________2

let pushArray = () => {
    let array = [];
    return (param) => {
        !param ? array = [] : array.push(param);
        return array;
    };
};

let getUpdatedArr = pushArray();
// console.log(getUpdatedArr(3));
// console.log(getUpdatedArr(5));
// console.log(getUpdatedArr({name: 'Vasya'}));
// console.log(getUpdatedArr());
// console.log(getUpdatedArr(4));

//_______________________________________________________3

const kidsArr = [
    {
        name: 'Kostya',
        age: 10,
        gender: 'male',
    },
    {
        name: 'Vasya',
        age: 9,
        gender: 'male',
    },
    {
        name: 'Masha',
        age: 9,
        gender: 'female',
    },
    {
        name: 'Mitya',
        age: 8,
        gender: 'male',
    },
];

class Kid {
    constructor({name, age, gender}) {
        this.id = ++Kid.nextId;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    static nextId = 0;
}

class Room {
    constructor(newKidsArray, roomNumber) {
        this.kidsArr = newKidsArray;
        this.roomNumber = roomNumber;
    }

    get kidsCount() {
        return this.kidsArr.length;
    }

    get femaleCount() {
        let femaleCounter = 0;
        for (let i = 0; i < this.kidsArr.length; i++)
            this.kidsArr[i].gender === 'female' ? femaleCounter++ : femaleCounter;
        return femaleCounter;
    }

    get maleCount() {
        let maleCounter = 0;
        for (let i = 0; i < this.kidsArr.length; i++)
            this.kidsArr[i].gender === 'male' ? maleCounter++ : maleCounter;
        return maleCounter;
    }

    get lastKid() {
        return this.kidsArr[this.kidsArr.length - 1];
    }

    set lastKid(param) {
        return this.kidsArr.push(new Kid(param));
    }
}

let createKidsArray = (kidsCounter = kidsArr.length) =>
    [...Array(kidsCounter)].map((_, i) => new Kid(kidsArr[i]));

let newKidsArray = createKidsArray();

const room = new Room(newKidsArray, 101);
// console.log(room);
//
// console.log(room.kidsCount);
// console.log(room.femaleCount);
// console.log(room.maleCount);
// console.log(room.lastKid);
// room.lastKid = { name: 'Kolya', age: 9, gender: 'male' };
// console.log(room.lastKid);

//_______________________________________________________4

let timerFunc = () => {
    let time = new Date().getTime();
    return () => {
        if (time === new Date().getTime()) {
            return 'Enabled';
        } else {
            //??????????????????????????????
            let temp = new Date().getTime();
            return temp - time;
        }
    }
};

let getTime = timerFunc();
// console.log(getTime());
// console.log(getTime());
// console.log(getTime());