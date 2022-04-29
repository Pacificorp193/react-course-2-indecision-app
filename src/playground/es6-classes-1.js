class Person {
  constructor(b, name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello. i am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old/of age.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description = description + `Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Student('Gavin Sabo', 20, 'Computer Science');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());
