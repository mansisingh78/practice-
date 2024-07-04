// destructuring

// const numbers = [1, 2, 3, 4, 5];

// const [first, second, third] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);

const books = ["maths", "sst", "geography", "sanskrit"];

const [book1, book2, book3, book4] = books;
console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);

// spread

const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];
const num3 = [9, 10, 11, 12];

const combined = [...num1, ...num2, ...num3];
console.log(combined);
//optional chaining

const names = {
  name: "mansi",
  age: 21,
  village: "singra",
};
const city = names?.city;
console.log(city);

//rest operator

const { bookName, ...remain } = {
  bookName: "Atomic Habits",
  authorName: "james clear",
  cameup: 2018,
};
console.log(bookName);
console.log(remain);

const [first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7];
console.log(first);
console.log(second);
console.log(rest);
