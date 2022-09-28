
let myName = "John";
const MYNAME = "John";
let myAge = 30;
let hasHobbies = true;
let myRealAge;
myRealAge = 30;
// myRealAge = '30';



//console.log(myName);
myName = "Max";
//console.log(myName);
//console.log(MYNAME);


export default myName; // export default MYNAME;
export {MYNAME as myName2, myAge, hasHobbies, myRealAge}; // export multiple variables
