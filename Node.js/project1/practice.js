let obj = {"name": "swapnil", "age": 26};
let jsonString = JSON.stringify(obj);
console.log(typeof jsonString);
console.log(jsonString);

let jsonObj = JSON.parse(jsonString);
console.log(typeof jsonObj);
console.log(jsonObj);

let person = {
    names: 'swapnil'
};
person.ages = 26;
person.lastName = 'narwade';
console.log(person);