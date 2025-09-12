class Dog {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}
const dog1 = new Dog("banti", "deshi", 10);
// console.log(dog1);
// dog1.eat();

class Cat {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  mau() {
    console.log(`${this.name} is spaking`);
  }
}
const cat1 = new Cat("kity", "white", 5);
// console.log(cat1);
// cat1.mau();

class bird {
  constructor(name, price, age) {
    this.name = name;
    this.price = price;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  flaying() {
    console.log(`${this.name} is flying`);
  }
}
const bird1 = new bird("kokil", 500, 5);
// console.log(bird1);
// bird1.flaying();
