


class Person{

constructor(name,age){
    this.name = name
    this.age = age
}
greet(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
				}
}

class Employee extends Person{
    constructor(name,age,jobtitle){
    super(name,age)
    this.jobtitle = jobtitle
    }

    jobGreet(){
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobtitle}.`)
    }
}

window.Person = Person;
window.Employee = Employee;