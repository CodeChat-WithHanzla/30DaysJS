// DAY 8: ES6+ FEATURES

// Tasks/Activities:

// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = 'Hanzla' , age = 19 , gender = 'boy'
console.log(`Im ${name} a ${age} ${gender}`);

// Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
Vestibulum lacinia arcu eget nulla.`)

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const array = [1,2,3,4,5]
const [first,second] = array
console.log(`${first} , ${second}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title : "Two Nation Theory",
    author : "Hanzla"
}
const {title,author} = book;
console.log(`${author} famous book is ${title}`);
// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const array2 = [...array,6,7,8,9,10]
console.log(array2);
// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...values) {
    let sum = 0
    values.map(each=>sum+=each)
    return sum
}
console.log(sum(8,7,7));
// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
const product = (a,b=1) =>{
return a*b
}
console.log(product(4,9));
const result = product(4)
console.log(result);
 
// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let education = 'Bechalors in computer science 2nd semester', fav = 'Favourite Player'
const person = {
    name,
    age,
 education,
        greetings : ()=>{
        return `Have A Nice Day! ${this.name}`
    },
    [fav] : "Babar and Virat"
}
console.log(person);
// Task 9: Create an object with computed property names based on variables and log the object to the console.
const favCar = 'Fav_Car', passion =  ''
const info = {
    [favCar]: "Haval H6",
    [passion] : 'Cricketer and coder'
}
console.log(info);
// Feature Request:

// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.


// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.


// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.


// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.


// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.


// Achievement:
// By the end of these activities, students will:
// Understand and use template literals for string interpolation and multi-line strings.
// Apply destructuring to extract values from arrays and objects.
// Utilize spread and rest operators for array manipulation and function arguments.
// Define functions with default parameters.
// Create objects using enhanced object literals, including methods and computed property names.
