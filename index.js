// Write a while and do while loop that prints the numbers from 1 to 5 in the console.

let num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}

let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// How would you exit a while loop if a specific condition is met
// (e.g., when the number equals 3), Write a example code?

let num1 = 0;
while (num1 <= 5) {
  console.log(num1);
  if (num1 === 3) {
    break;
  }
  num1++;
}

//Write a while and do while loop that prints numbers from 1 to 10,
//but skips printing the any number from 1 to 10 .

let num2 = 1;
while (num2 <= 10) {
  if (num2 === 5) {
    num2++;
    continue;
  }
  console.log(num2);
  num2++;
}

// Write a while loop that prints all even numbers from 0 to 20.

let num3 = 0;
while (num3 <= 20) {
  if (num3 % 2 == 0) {
    console.log(num3);
  }
  num3++;
}

// Write an if statement in JavaScript that checks if a number is greater than 10,
//  and prints "Number is greater than 10" if true.

let number = 10;
if (number >= 10) {
  console.log("Number is greater than 10");
}
if (number < 10 || number <= 0) {
  console.log("The number given is lessthan 10");
}

// Write an if-else statement that checks if a number is even or odd,
//  and prints "Even" if it's even, or "Odd" if it's odd.

let number1 = -8;
if (number1 % 2 == 0 || number1 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// Rewrite the following code using if else statement :
// let age = 20;
// console.log(age >= 18 ? "Adult" : "Minor");

let age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Write an if-else if-else ladder that checks the value of a variable grade and prints:
// "A" for grades 90 and above,
// "B" for grades 80 to 89,
// "C" for grades 70 to 79,
// "F" for grades below 70.

let grade = 19;
if (grade >= 90) {
  console.log("Got A-grade");
} else if (grade >= 80) {
  console.log("Got B-Grade");
} else if (grade >= 70) {
  console.log("Got C-Grade");
} else {
  console.log("Got F-Grade");
}

// Write a nested if statement that checks if a number is positive and,
// if true, checks if it's even or odd.

let fnum = -11;
if (fnum >= 0 || fnum < 0) {
  if (fnum >= 0) {
    console.log("Postive Number");
  }
  if (fnum < 0) {
    console.log("Negative Number");
  }
  if (fnum % 2 == 0) {
    console.log("Even Number");
  }
  if (fnum % 2 !== 0) {
    console.log("Odd Number");
  }
}

// Write an if statement that checks if a number is between 10 and 20 (inclusive).
// Print "In range" if true, otherwise print "Out of range".
let cnum = 10;
if (cnum >= 10 || cnum < 20) {
  console.log("In range");
}
if (cnum < 10 || cnum > 20) {
  console.log("Out of range");
}

// What is the difference between == and === in an if statement in JavaScript?
// Provide an example where each would behave differently.

let str = "4";
if (str == 4) {
  console.log("It don't consider the type of that data");
}
if (str === "4") {
  console.log("It will consider the type of that data");
};

// Write an if statement that checks if a number is between 10 and 20 or
// if it's exactly 30, and prints "Condition met" if true.

let connum = 30;
if (connum > 10 && connum < 20 || connum == 30) {
  console.log("Condition met");
};

