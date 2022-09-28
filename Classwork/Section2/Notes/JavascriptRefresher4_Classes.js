class Human {
    constructor() {
        this.gender = 'Female';
    }
    printGender() {
        console.log(this.gender)
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Justin';
        this.age = 23;
        this.gender = 'Male' //This Changes the string in the Human class for Gender to this (commenting this line out will change it back to the constructor)
    }
    greet() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old. I am a ' + this.gender);
    }
}

const person = new Person();
person.greet();
person.printGender();