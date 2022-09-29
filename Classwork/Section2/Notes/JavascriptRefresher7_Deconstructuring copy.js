//Array Destructor
const numbers = [1, 2, 3];
const [num1, num2] = numbers;
console.log(num1, num2);

//Object Destructor
const {name} = {name: 'Max', age: 28};
console.log(name); // Max
console.log(age); //undefined - age is not defined and this will throw an error, unless I add age to the object
