//OPERATORS

// 1.Mathematical Operators
// Addition operator (+)
let num1 = 20;
let num2 = 10;
let sum = num1 + num2; // Additional Operator usage
let difference = num1 - num2; //Subtration Operator usage
let product = num1 * num2; // Multiplication Operator usage
let quotient = num1 / num2; // Division Operator usage
let remainder = num1 % num2; // Modulus Operator usage

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

// Comparison Operator

console.log(num1 > num2); // Greater than Operator usage
console.log(num1 < num2); // Less than Operator usage
console.log(num1 >= num2); // Greater than or Equal Operator usage
console.log(num1 <= num2); // Less than or Equal Operator usage
console.log(num1 == num2); // Equal to Operator or Loose Equal usage
console.log(num1 === num2); // Equal to Operator or Strict Equal usage

console.log("------------------------------");

let number = "9";
console.log(number == 9); // True - Loose equality check
console.log(number === 9); // False - Strict equality check

// Logical Operator
let email = "amkam@lenosol.com";
let password = "123456789";


// The Logical AND(&) Operator -Only retuns true when both conditions are true true
console.log(email === "amadu@lenosol.com" && password === "123456789"); // false
console.log(email === "amkam@lenosol.com" && password === 123456789); // false
console.log(email === "amkam@lenosol.com" && password === "123456789"); // True

console.log("********************************")

// The logical OR(||) - Only returns true when at least one condition is true and  when all conditions are false false
console.log(email === "amadu@lenosol.com" || password === "123456789"); // True
console.log(email === "amkam@lenosol.com" || password === 123456789); // True
console.log(email === "amadu@lenosol.com" || password === "12345679"); // False

// The logical Not(!) This operator negate a variable's value
let abuAge = 34
let marieAge = 23
let fodayAge = "34"

console.log(abuAge != marieAge) // True
console.log(abuAge != fodayAge) // False
console.log(abuAge !== fodayAge) // True

