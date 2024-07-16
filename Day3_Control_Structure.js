// Day 3: Control Structures

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 5;
if (num > 0) console.log("Positive Number");
else if (num < 0) console.log("Negative Number");
else console.log("Zero");

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 19;
if (age === 0) console.log("Enter Valid Age");
else if (age >= 18) console.log("You are eligible to vote");
else console.log("You aren`t eligible to vote");
// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 4;
let num2 = 5;
let num3 = 7;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1 + "is a Largest Number");
  }
  else
  console.log(num3 + "is a Largest Number");
} 
else {
  if (num2 > num3) {
    console.log(num2 + "is a Largest Number");
  }
  else console.log(num3 + "is a Largest Number");
} 

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Enter Valid Date ");
    break;
}
// Task 5: Write a program that uses a switch case to assign a grade (A, B, C, D, F) based on a score and log the grade to the console.
let score = 86;
switch (true) {
  case (score > 85):
    console.log("'A' grade with the numbers of " + score);
    break;
  case (score > 75):
    console.log("'B' grade with the numbers of " + score);
    break;
  case (score > 65):
    console.log("'C' grade with the numbers of " + score);
    break;
  case (score > 60):
    console.log("'D' grade with the numbers of " + score);
    break;
  case (score < 50 ):
    console.log("'F' grade with the numbers of " + score);
    break;

  default:
    console.log("Enter Valid Score! ");
    break;
}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num4 = 23;
num4%2===0? console.log(num4 + " is a Even number"):console.log(num4 + " is a Odd number");
// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2024;
if((year%4===0&&year%100!==0)||year%400 ===0)
    console.log(year + " is a Leap year");
else console.log("Not a Leap Year");

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
