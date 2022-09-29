//ES6 / Babel JS 
class Human {
    gender = 'Female'; // no constructor

    printGender = () => { // short hand
        console.log(this.gender)
    }
}

class Person extends Human {
    name = 'Justin';
    age = 23;
    gender = 'Male' //This Changes the string in the Human class for Gender to this (commenting this line out will change it back to the constructor)
    
    greet = () => {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old. I am a ' + this.gender);
    }
}

const person = new Person();
person.greet();
person.printGender();