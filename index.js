function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function() {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function() {
  console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Demonstration
const person1 = new Person('John', 30);
const employee1 = new Employee('Alice', 25, 'Software Engineer');

person1.introduce(); // Output: "Hi, my name is John and I am 30 years old."
employee1.introduce(); // Output: "Hi, my name is Alice and I am 25 years old."
employee1.work(); // Output: "Alice is working as a Software Engineer."
