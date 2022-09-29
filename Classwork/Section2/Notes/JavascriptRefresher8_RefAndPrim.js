//Primitive Types
const number = 1;
const num2 = number;

console.log(number, num2);

//Reference Types
const person = {
    name: 'Max'
};
const secondPerson = { // secondPerson is a reference to person
    ...person
};
person.name = 'Manu';
console.log(secondPerson);