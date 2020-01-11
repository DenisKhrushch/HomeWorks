'use strict';
//___________________________________________________________1
const name = 'Denis';
let age = 18;
let isMale = true;
let somethingStrange = name / age;
let surname;
let character = Symbol('2019');
let myPersonality = {
    name: 'Denis',
    surName: 'Khrushch',
    age: 18,
    isMale: true,
    clothes: {
        isHat: true,
    },
};
let showFunc = () => {
    console.log('Hello, World');
};
//___________________________________________________________2
let MacBookPro = {
    nameOfProduct: 'Mac Book Pro 16',
    priceInDollars: 2799.99,
    color: 'Space Grey',
    diagonalInInches: 16,
    isTurboBoost: true,
    storageInGB: 512,
    processorGHz: 2.6,
    height: 1.62,
    width: 35.9,
    weight: 2.0,
    char: '💻',
};

let iPhone11Pro = {
    nameOfProduct: 'iPhone 11',
    priceInDollars: 2799.99,
    color: 'Green',
    diagonalInInches: 5.8,
    isTurboBoost: false,
    storageInGB: 256,
    processorGHz: 2.49,
    height: 14.4,
    width: 7.14,
    weight: 0.188,
    char: '📱',
    showAllProperties: () => {
        for (let key in iPhone11Pro) {
            console.log(iPhone11Pro[key]);
        }
    },
};

let AirPodsPro = {
    nameOfProduct: 'Air Pods Pro',
    priceInDollars: 179,
    color: 'White',
    isSensors: true,
    processor: 'H1',
    height: 0.45,
    width: 0.6,
    weight: 0.0456,
    char: '🎧',
};

let iPad = {
    nameOfProduct: 'iPad Pro',
    priceInDollars: 2799.99,
    color: 'Silver',
    diagonalInInches: 12.9,
    isTurboBoost: false,
    storageInGB: 1024,
    processorGHz: 2.6,
    height: 28.06,
    width: 21.49,
    weight: 0.633,
    char: '📱',
};

let GalaxyNote10 = {
    nameOfProduct: 'Galaxy Note 10+',
    priceInDollars: 890,
    color: 'Space Grey',
    diagonalInInches: 6.8,
    cameraMp: 10,
    storageInGB: 256,
    isDualSim: true,
    processorGHz: 2.7,
    os: 'Android',
    height: 16.2,
    width: 7.7,
    char: '📱',
};

let iMacPro = {
    nameOfProduct: 'iMac Pro',
    priceInDollars: 4999,
    color: 'Space Grey',
    diagonalInInches: 27,
    cameraMp: 10,
    storageInGB: 4096,
    isTurboBoost: true,
    processorGHz: 3.2,
    os: 'MacOs',
    weight: 9.7,
    char: '🖥️',
};

let iPod = {
    nameOfProduct: 'iPod',
    priceInDollars: 299,
    color: 'Pink',
    diagonalInInches: 4,
    cameraMp: 10,
    storageInGB: 128,
    isTurboBoost: false,
    processor: 'A10',
    os: 'iOS',
    char: '🖥📱',
};


//___________________________________________________________3

let getDeviceAttributes = (device) => {
    let result = '';
    for (let key in device) {
        if(typeof device[key] === "function") {
            let temp = device[key];
            result += temp();
        } else {
            result += key + ' : ' + device[key] + ', ';
        }
    }
    console.log(result);
};

// getDeviceAttributes(MacBookPro);
getDeviceAttributes(iPhone11Pro);
//___________________________________________________________4
// iPhone11Pro.showAllProperties();
//___________________________________________________________5
const arr = [
    {
        name: 'M5 Competition',
        price: 111_000,
        manufacture: 'BMW',
        wheelsCount: 4,
        horsePower: 600,
        color: 'Snappers Rock Blue Metallic',
    },
    {
        name: 'E-Tron GT',
        price: 76_000,
        manufacture: 'Audi',
        wheelsCount: 4,
        horsePower: 590,
        color: 'Space Grey',
    },
    {
        name: 'Chiron',
        price: 2_990_000,
        manufacture: 'Bugatti',
        wheelsCount: 4,
        horsePower: 1500,
        color: 'Red',
    },
    {
        name: 'Aventador',
        price: 421_321,
        manufacture: 'Lamborghini',
        wheelsCount: 4,
        horsePower: 730,
        color: 'Yellow',
    },
    {
        name: 'Superfast',
        price: 363_730,
        manufacture: 'Ferrari',
        wheelsCount: 4,
        horsePower: 789,
        color: "Red",
    },
];

let getByIndex = (index) => {
    console.log(arr[index]);
};

// getByIndex(3);