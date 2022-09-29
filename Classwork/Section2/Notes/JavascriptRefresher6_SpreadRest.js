const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; //Spread operator

console.log(newNumbers);

//Spread operator is used to split up object propertiees
const person = {
    name: 'Justin'
};

const newPerson = { 
    ...person,
    age: 23
};

console.log(newPerson);

//Rest operator is used to merge a list of function arguments into an array
const filter = (...args) => {
    return args.filter(el => el === 2);
    /// === is a strict equality operator - So el has to be a number 2
}
console.log(filter(1, 2, 3));
