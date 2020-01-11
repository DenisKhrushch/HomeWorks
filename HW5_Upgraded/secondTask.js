'use strict';

function CustomString() {
    this.reverse = function (str) {
        let result = '';
        for (let i = str.length - 1; i >= 0; i--)
            result += str[i];
        return result;
    };

    this.ucFirst = function (str) {
        return str[0].toUpperCase() + str.slice(1);
    };

    this.ucWords = function (str) {
        let arr = str.split(' ');
        let result = '';
        for (let i = 0; i < arr.length; i++)
            result += this.ucFirst(arr[i]) + ' ';
        return result;
    };
}

const myString = new CustomString();
console.log(myString.reverse('qwerty'));
console.log(myString.ucFirst('qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty'));