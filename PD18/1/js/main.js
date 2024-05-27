const student = {
  name: "Jonas",
  lastname: "Jonaitis",
  age: 20,
  getFullName: function() {
    return `${this.name} ${this.lastname}`;
  }
};

console.log(student.getFullName())