// Day 4: Loops

// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for(let i = 1 ;i <= 10 ; i++)
    console.log(i);
// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for(let i = 1 ; i <= 10 ; i++)
    console.log(`5 * ${i} = ${5*i}`)
// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i = 1, sum = 0;
while(i<=10){
    sum+=i
    i++;
}
console.log(sum);
    

// Task 4: Write a program to print numbers from 1 to 10 using a while loop.
let j = 1;
while(j<=10){
    console.log(j);
    j++;
}


// Activity 3: Do...While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let num = 1;
do {
    console.log(num);
    num++;
} while (num<=5);
// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let num2 = 4;
let k = 1;
let factorial = 1;
do {   
    factorial *= k;
    k++;
} while (k<=num2);
console.log(`Factorial of ${num2} is ${factorial}`);

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops.
for(let i = 0 ; i < 4 ; i++){
 for(let j = 0 ; j <=i ; j++) console.log('*');
 console.log();    
}

// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let i = 1 ; i <= 10 ; i++){
    if(i===5)
    continue
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for(let i = 1 ; i <= 10 ; i++){
    if(i===7)
        break;
    console.log(i);
}

// Feature Request:
// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
