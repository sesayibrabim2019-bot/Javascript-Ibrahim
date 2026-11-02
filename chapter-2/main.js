// Nested If Statement
//   Student Grade Distinction Checker
let grade = 92;

if (grade >= 50) {
  console.log("Congratulations, you passed");

  if (grade >= 90) {
    console.log("You passed with distinction");
  } else {
    console.log("You did not pass with distincion");
  }
} else {
  console.log("Sorry, you failed. Please retake the exam.");
}

// EXERCISE 1
/*
Mamy Fatu sells cakes and said whoever buys cakes worth le10,000 is given 10% discount.
1. write a program that takes total price of cakes input from the user
2.Check if the total price of cakes bought exceeds 10,000
3. If the price exceeds,given them 10% discount in words .Eg... "You won 10% discount.
thank you for doing business with us."
4. If not met, just print "thank you for doing business with us."
5. Mamy fatu is so generous to all her customers who buys products worth le20,000
and above and offer delivery service to them if total price exceeds. If not exceed 20,000,
let them know they are eligible for delivery.

Question: Using Nested if Statement, write a JS program that not only gives discount,
but also gives delivery  if one has discount and exceeds le20,000. If the person has
discount but not eligible for delivery, inform them about it.
*/



console.log("*******************************")

let totalCakePrice = 12000

if (totalCakePrice >= 10000) {
  console.log(`You won 10% discount. Thank you for doing business with us`)

  if(totalCakePrice >=20000){
    console.log(`You are entitled to delivery of your cakes`)
  } else {
    console.log(`sorry no delivery for the amount of cakes bought`)
  }
} else {
  console.log(`thank you for doing business with us.`)
}

//exercise2: Brother Jalloh Phone Shop

//Story:
/*Brother Jalloh sells phones. He said:
1. Whoever buys phones worth Le15000 gets 5% discount.
2. Whoever buys phones worth Le30000 and above gets FREE airtime + discount.

Task:
Using Nested if statement, write a JS program that:
- Takes total price of phones from user
- If price > Le15000, give 5% discount: print "You won 5% discount. Thank you for shopping with us."
- Inside that discount, check again: if price >= Le30000, print "You are eligible for FREE airtime!"
- If he has discount but price < Le30000, print "You have discount but NOT eligible for free airtime. Buy Le30,000 and above."
- If price does not exceed Le15000, print "Thank you for shopping with us."*/

 
// BROTHER JALLOH PHONE SHOP - EXERCISE 2

let totalPrice = 35000;

console.log("Total Price: Le" + totalPrice);

if (totalPrice > 15000) {
  console.log("You won 5% discount. Thank you for shopping with us.");

  // NESTED IF for airtime
  if (totalPrice >= 30000) {
    console.log("Congratulations! You are eligible for FREE airtime.");
    
    // Optional: calculate discount
    let discount = totalPrice * 0.05;
    let finalPrice = totalPrice - discount;
    console.log("Discount: Le" + discount);
    console.log("You will pay: Le" + finalPrice);

  } else {
    console.log("You have discount but NOT eligible for free airtime. Buy Le30,000 and above for free airtime.");
  }

} else {
  console.log("Thank you for shopping with us.");
}

//EXERCISE 2 
// create a JS app that takes someone's email and password to log them into the app.
// i.If the email of the user is not admin@lenosol.com, just welcome the user to their account
// ii. If the email is admin@lenosol.com, State their admin status and if not admin. display they are not  an admin
// iii. If the password is not equal to 123456 for anyone who tries to log in, print 
"wrong Credentials"

// EXERCISE 2 - Login App with Nested If

let email = "admin@lenscol.com"; // try: admin@lenscol.com or student@gmail.com
let password = "123456"; // try: 123456 or 0000

// First check password for everyone
if (password === "123456") {
  
  // NESTED IF - Only if password is correct, check email
  if (email === "admin@lenscol.com") {
    console.log("Welcome Admin! You are logged in as an admin.");
    console.log("Admin status: You ARE an admin");
  } else {
    console.log("Welcome to your account, " + email);
    console.log("Status: You are NOT an admin");
  }

} else {
  console.log("Wrong Credentials");
}