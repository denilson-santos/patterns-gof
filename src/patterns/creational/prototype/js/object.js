export const personPrototype = {
  firstName: 'Denilson',
  lastName: 'da Silva Santos',
  age: 23,
  
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};