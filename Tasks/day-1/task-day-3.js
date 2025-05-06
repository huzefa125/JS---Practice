// Task 1: Number positive, negative ya zero
let num = parseInt(prompt("Enter a number:"));
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Task 2: Voting eligibility
let age = parseInt(prompt("Enter your age:"));
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// Task 3: Sabse bada number
let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));
let c = parseInt(prompt("Enter third number:"));

if (a >= b && a >= c) {
  console.log("Largest number is:", a);
} else if (b >= a && b >= c) {
  console.log("Largest number is:", b);
} else {
  console.log("Largest number is:", c);
}

// Task 4: Week ka day
let day = parseInt(prompt("Enter a number (1-7):"));
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
  default: console.log("Invalid number");
}

// Task 5: Grade assign
let score = parseInt(prompt("Enter your score:"));
switch (true) {
  case (score >= 90):
    console.log("Grade A");
    break;
  case (score >= 75): 
    console.log("Grade B");
    break;
  case (score >= 60): 
    console.log("Grade C"); 
    break;
  case (score >= 40): 
    console.log("Grade D"); 
    break;
  default: 
    console.log("Grade F");
}

// Task 6: Even ya odd
let num2 = parseInt(prompt("Enter a number:"));
console.log((num2 % 2 === 0) ? "Even" : "Odd");

// Task 7: Leap year check
let year = parseInt(prompt("Enter a year:"));
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("Leap year");
    } else {
      console.log("Not a leap year");
    }
  } else {
    console.log("Leap year");
  }
} else {
  console.log("Not a leap year");
}
