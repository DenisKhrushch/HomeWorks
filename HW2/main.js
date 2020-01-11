// 'use strict';
// //________________________________________________1
//  const sayHi = time => {
//      let name = prompt('Введите ваше имя: ');
//      if(time >= 6 && time <= 12) {
//          alert('Доброе утро, ' + name);
//      } else if(time > 12 && time <= 18) {
//          alert('Добрый день, ' + name);
//      } else if(time > 18 && time <= 24) {
//          alert('Добрый вечер, ' + name);
//      } else if(time > 0 && time < 6) {
//          alert('Ночь');
//      } else {
//          alert('Неверный формат ввода');
//      }
//  };
//
//  sayHi(6);
//  sayHi(11);
//  sayHi(13);
//  sayHi(22);
// //________________________________________________2
// const checkIsUserValid = (login, password) => {
//     let email = 'denis.hrusch@gmail.com';
//     let defaultPassword = 'Qwerty123';
//     return email === login && defaultPassword === password ? 'Access successful' : 'Access denied';
// };
//
// console.log(checkIsUserValid('qwerty@mail.com', 'Qwe123'));
// //________________________________________________3
// let checkEvenOrOdd = number => {
//     return number % 2 === 0 ? `Number ${number} is Even` : `Number ${number} is Odd`;
// };
//
// console.log(checkEvenOrOdd(8));
// console.log(checkEvenOrOdd(13));
// //________________________________________________4
// const getPorchAndFloor = number => {
//     const flatPerFloor = 3;
//     const floorPerPorch = 9;
//     const flatPerPorch = flatPerFloor * floorPerPorch;
//     let porchCounter = 1;
//     let floorCounter = 1;
//     while (number >= flatPerPorch) {
//         number -= flatPerPorch;
//         porchCounter++;
//     }
//     if (number % 27 === 0) {
//         porchCounter--;
//         floorCounter = floorPerPorch;
//     } else {
//         while (number > flatPerFloor) {
//             number -= flatPerFloor;
//             floorCounter++;
//         }
//     }
//     console.log('Подъезд: ' + porchCounter);
//     console.log('Этаж: ' + floorCounter);
// };
//
// getPorchAndFloor(312);
// // ________________________________________________5
const foo = number => {
    let result = 0;
    if (number % 2 === 0) {
        for (let i = 0; i < 3; i++) {
            result += number % 10;
            number = Math.floor(number / 10);
        }
    } else if (number % 2 !== 0) {
        ++result;
        for (let i = 0; i < 3; i++) {
            result *= number % 10;
            number = Math.floor(number / 10);
        }
    }
    console.log(result);
};

foo(312);// 6
foo(125); // 10