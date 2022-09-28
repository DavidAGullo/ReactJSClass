// Normal function
function printMyName(name) {
    console.log(name);
}
printMyName("John 1");

// Const version:
const printMyName2 = function(name) { //you can remote () if there is only one parameter
    console.log(name);
}
printMyName2("John 2");

// Let version:
let printMyName3 = function(name) { // let version lets me change the function later
    console.log(name);
}
printMyName3("John 3");

// Arrow function returns a value
const multiply = (number) => {
    return number * 2;
}
console.log(multiply(2));

// Arrow function returns a value but shorter  
const multiply2 = number => number * 2; // if there is only one parameter, you can remove ()
console.log(multiply2(3));

