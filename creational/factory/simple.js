/*
 * A factory function is a function that creates and returns an object
 */

/*
 * JavaScript provides handy object literal syntax
 */
const person = {
  name: "John",
  age: 30,
  job: "teacher",

  presenter: function () {
    return console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old and my job is ${this.job}`
    );
  },

  setAge(newAge) {
    this.age = newAge;
  },
};

person.presenter();

/*
 * Use object literals to create one object,
 * but if you need to create many, use factories
 */

function createPerson({ name, age, job }) {
  return {
    name,
    age,
    job,
    presenter: function () {
      return console.log(
        `Hello, my name is ${this.name}, I am ${this.age} years old and my job is ${this.job}`
      );
    },

    setAge(newAge) {
      this.age = newAge;
    },
  };
}

const jane = createPerson({
  name: "Jane",
  age: 30,
  job: "teacher",
});

jane.presenter();

jane.setAge(31);

jane.presenter();
