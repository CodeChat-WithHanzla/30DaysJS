
// DAY 6: ARRAYS

// Tasks/Activities:

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const array = [1,2,3,4,5]
for(let i=0;i<5;i++)
console.log(array[i]);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log(array[0]);
console.log(array[4]);

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
array.push(7)
array.forEach(arr=>console.log(arr))

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
array.pop()
array.forEach(arr=>console.log(arr))


// Task 5: Use the shift method to remove the first element from the array and log the updated array.
array.shift()
array.forEach(arr=>console.log(arr))


// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
array.unshift(9)
array.forEach(arr=>console.log(arr))


// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const newArray = array.map(arr=>arr*2)
newArray.map(each=>console.log(each))

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const newArray2 = array.filter(each=>each%2===0)
newArray2.map(each=>console.log(each+' even Number!'))

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum = array.reduce((accumulator ,currentValue)=>accumulator +currentValue,0)
console.log(sum);

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i=0;i<5;i++)
    console.log(array[i]);
    

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
array.forEach(arr=>console.log(arr))


// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const D2 = [["HANZLA",86,"A+"],
            ["SAMI",83,"A"]]
console.log(D2);
// Task 13: Access and log a specific element from the two-dimensional array.
console.log(`${D2[0][0]} got ${D2[0][1]} marks!`);


// Feature Request:

// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.


// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.


// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.


// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.

