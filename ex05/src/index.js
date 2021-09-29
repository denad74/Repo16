// Only change code below this line
class Microsoft {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
    
    set name(newName) {
        this._name = newName;
    }
    occupation() {
        return `${this.name} is a philanthropist!`;
    }

}

class Facebook extends Microsoft {
    constructor(name, age) {
        super(name);
        this.name = name;
        this.age = age;
    }

    studentAge() {
        return `${this.name} is ${this.age}`;
    }

}

const henry = new Microsoft("William Henry Gates III");
henry.occupation(); 

const elliot = new Facebook("Mark Elliot Zuckerberg", 23);
elliot.occupation(); 
elliot.studentAge(); 

// Only change code above this line
module.exports = {
    Microsoft,
    Facebook
}