export function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Denilson',
  lastName: 'da Silva Santos',
  age: 23,
  
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;