class Student {
  constructor(name, age) {
    this.name = name;
    this.location = "India";
    this.age = age;
    //     console.log("calling the constructor method", name);
  }
  goal() {
    console.log("sc");
  }
}
const Student1 = new Student("tom Ratel", 40);
const Student2 = new Student("Harry Poter", 20);

console.log(Student1);
console.log(Student2);
