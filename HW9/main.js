let candidateArray = require('./candidates.js');

class Candidate {
    constructor(obj) {
        Object.assign(this, obj);
        this.registered = new Date(obj.registered.split(' ')[0]).toUTCString();
    }

    get state() {
        return this.address.split(', ')[2];
    }

    get allFriends() {
        return this.friends
            .map(item => item.name.split(' ')[0])
            .join(', ');
    }

    get addressInfo() {
        let address = this.address.split(', ');
        return {
            street: address[0],
            city: address[1],
            state: address[2],
            postalCode: address[3],
        }
    }
}
let candidate = new Candidate(candidateArray[0]);
let getAllKeys = obj => Object.keys(obj);
let getAllValues = obj => Object.values(obj);
let removeUser = param => candidateArray.splice(param,1);
let insertIntoArray = (obj, indexOfInsertion) => candidateArray.splice(indexOfInsertion - 1,0, obj);