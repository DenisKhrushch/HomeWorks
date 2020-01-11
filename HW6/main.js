'use strict';
require('./mixins.js');
const faker = require('./vendor/faker.js');

function Customer(customer) {
    this.id = Customer._id++;
    Object.assign(this, customer);
}
Customer._id = 1;

let generateCards = (numberOfCards = 50) =>
    [...Array(numberOfCards)].map(_ => new Customer(faker.helpers.createCard()));

let customersArray = generateCards();
//________________________________________________________________________2
let getAllNameSAndEmails = (arrOfCustomers) =>
    arrOfCustomers.mapBy('name', 'email');
console.log(getAllNameSAndEmails(customersArray));
//________________________________________________________________________3
let getAllCustomersWithComDomain = arr => arr
    .filter(({website}) => website.endsWith('.com'))
    .mapBy('id');

console.log(getAllCustomersWithComDomain(customersArray));
//________________________________________________________________________4
let getAllGmailCustomers = arr => arr
    .filter(({email}) => email.endsWith('@gmail.com'))
    .mapBy('email');

console.log(getAllGmailCustomers(customersArray));
//________________________________________________________________________5
let sortByCompanyType = arr => arr.groupBy(
    item => /.+\s(.+)$/g.exec(item.company.name)[1].toUpperCase(),
    item => item.id
);

console.log(sortByCompanyType(customersArray));
//________________________________________________________________________6
const calculateSum = customer =>
    customer.accountHistory.reduce((sum, salary) => sum + parseFloat(salary.amount), 0);

let sortAccountHistory = customersArray => customersArray.sort((a, b) => calculateSum(a) - calculateSum(b));

console.log(sortAccountHistory(customersArray).mapBy('accountHistory'));
//________________________________________________________________________7
let sortAccountHistoryWithParam = (customersArray, param = 'asc') =>
    param === 'asc'
        ? customersArray.sort((a, b) => calculateSum(a) > calculateSum(b))
        : customersArray.sort((a, b) => calculateSum(a) < calculateSum(b));
console.log(sortAccountHistoryWithParam(customersArray).mapBy('accountHistory'));