class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed, age) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}
const dog1 = new Dog("banti", "deshi", 10);
// console.log(dog1);
// dog1.eat();

class Cat extends Animal {
  constructor(name, color, age) {
    super(name, age);
    this.color = color;
  }

  mau() {
    console.log(`${this.name} is spaking`);
  }
}
const cat1 = new Cat("kity", "white", 5);
// console.log(cat1);
// cat1.mau();

class bird extends Animal {
  constructor(name, price, age) {
    super(name, age);
    this.price = price;
  }

  flaying() {
    console.log(`${this.name} is flying`);
  }
}
const bird1 = new bird("kokil", 500, 5);
console.log(bird1);
bird1.flaying();
