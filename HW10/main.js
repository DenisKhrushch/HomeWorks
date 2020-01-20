let candidateArray = require('./candidates.js');

class Candidate {
    constructor(obj) {
        Object.assign(this, obj);
        this.registered = new Date(obj.registered.split(' ')[0]);
    }

    get state() {
        return this.address.split(', ')[2];
    }
}

let candidate = new Candidate(candidateArray[0]);
let getCompanyNames = () => {
  let companySet = new Set();
  for (let  i = 0; i < candidateArray.length; i++)
      companySet.add(candidateArray[i].company);
  return Array.from(companySet);
};
// console.log(getCompanyNames());

let getUsersByYear = year => {
    let result = [];
    candidateArray.map(item => {
        if (Number(item.registered.split('-')[0]) === year)
             result.push(item._id);
    });
    return result;
};
// console.log(getUsersByYear(2020));

let getCondidatesByUnreadMessages = messages => candidateArray
    .filter(item => +item.greeting
        .replace(/\D+/g, '') === messages);
// console.log(getCondidatesByUnreadMessages(1));


let getCondidatesByGender = gender => candidateArray.filter(item => item.gender === gender);
// console.log(getCondidatesByGender('male'));

Array.prototype.myJoin = function (param = ',') {
    let resultStr = '';
    for (let i = 0; i < this.length - 1; i++)
            resultStr += this[i] + param;
    return resultStr + this[this.length - 1];
};
// console.log([1, 2, 3, 4, 5, 6, 7, 8].myJoin());

Array.prototype.myReduce = function (callback, total = 0) {
    for (let i = 0; i < this.length; i++)
        total = callback(total, this[i]);
    return total;
};
// console.log([1, 2, 3, 4, 5].myReduce((a, b) => a + b, 5));