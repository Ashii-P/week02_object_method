console.log("Hello World!");

const person = {
  name: "Aishah",
  age: 26,
  favouriteColour: "Pink",
  sayHello: function () {
    console.log("Hello!");
  },
};
person.sayHello();

const person2 = {
  name: "Ben",
  age: 25,
  favouriteColour: "Blue",
  sayHello: function (name) {
    console.log("Hello" + name + "!");
  },
};

person2.sayHello("Alice");

const person3 = {
  name: "Aishah",
  age: 26,
  favouriteColour: "Pink",
  getAge: function () {
    return this.age;
  },
};
const age = person3.getAge();
console.log(age);

const car = {
  make: "Ford",
  model: "Mustang",
  colour: "Cherry red",
  advert: function () {
    return `The car is a ${this.make} ${this.model} in the colour ${this.colour}`;
  },
};
const carAdvert = car.advert();
console.log(carAdvert);

const book = {
  title: "Charlie and the chocolate factory",
  author: "Roald Dhal",
  pages: 370,
  advert: function () {
    console.log(
      `${book.title} is a book written by the prominent author ${book.author}, it is a book that is ${book.pages} pages long`
    );
  },
};
book.advert();
