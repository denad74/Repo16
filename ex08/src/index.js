class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson() {
        var personInfo = `Name: ${this.name}, email: ${this.email}, age: ${age}`;
        return personInfo;
    }

}

module.exports = Person;