// Day 5: Functions

// Tasks/Activities:

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function evenOdd(num) {
  if (typeof num === "number")
    return num % 2 === 0
      ? console.log("Even Number")
      : console.log("Odd Number");
  else {
    console.log("Invalid Data Type For This Functionality");
    return undefined;
  }
}

// Task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
  if (typeof num === "number") return num * num;
  else {
    console.log("Invalid Data Type For This Functionality");
    return undefined;
  }
}

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const max = function (a, b) {
  if (typeof a === "number" && typeof b === "number")
    return a > b
      ? console.log(`${a} is a maximum number`)
      : console.log(`${b} is a maximum number`);
  console.log("Invalid Data Type For This Functionality");
};

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenate = function (str1, str2) {
  if (typeof str1 === "string" && typeof str2 === "string") return str1 + str2;
  else {
    console.log("Invalid Data Type For This Functionality");
    return undefined;
  }
};

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => {
  if (typeof a === "number" && typeof b === "number") return a + b;
  else {
    console.log("Invalid Data Type For This Functionality");
    return undefined;
  }
};

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const search = (str, char) => {
  if (typeof str === "string" && typeof char === "string") {
    let bool = false;
    for (let i = 0; i < str.length; i++) {
      str[i] === char ? (bool = true) : null;
    }
    return bool;
  } else {
    console.log("Invalid Data Type For This Functionality");
    return undefined;
  }
};
// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function product(a, b = 5) {
  if (typeof a === "number" && typeof b === "number") return a * b;
  else {
    console.log("Invalid Data Type For This Functionality");
    return undefined;
  }
}

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const info = function (name, age = 18) {
  if (typeof name === "string" && typeof age === "number")
    return `Hello ${name} , a ${age} years of age human`;
  else {
    console.log("Invalid Data Type For This Functionality");
    return false;
  }
};

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const HOF = (callback, num) => {
  for (let i = 0; i < num; i++) callback();
};
HOF(() => console.log("Mai ki kra"), 3);
// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const HOF2 = (callback1, callback2, value) => {
  const result = callback1(value);
  const response = callback2(result);
  return response;
};
console.log(HOF2(product, square, 4));
