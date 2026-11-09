// Conditions, Checking one value against many different options

//switch(value) {
//   case option1:
// code
//break;
//case option2:
// code
//   break;
//  default:
// code if no case matches
//}

// exercise 1: Days of the week  - Find the 3rd day.

let day = 3;

switch (day) {
  case 1:
    console.log("sunaday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  default:
    console.log("Weekend or Invalid day");
}

// Exercise 2: Months of the year, Find the 8th month.

let month = 8;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid month");
}

// EXERCISE 3: GRADE SYSTEM (LIKE MY EXAM)

let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent - 70 to 100");
    break;
  case "B":
    console.log("Very Good - 60 to 69");
    break;
  case "C":
    console.log("Good - 50 to 59");
    break;
  case "D":
    console.log("Pass");
    break;
  default:
    console.log("Fail");
}

// EXERCISE 4:
/*Mamy Fatu sells cakes and said whoever buys cakes worth le10,000 is given 10% discount.
1. write a program that takes total price of cakes input from the user
2.Check if the total price of cakes bought exceeds 10,000
3. If the price exceeds,given them 10% discount in words .Eg... "You won 10% discount.
thank you for doing business with us."
4. If not met, just print "thank you for doing business with us."
5. Mamy fatu is so generous to all her customers who buys products worth le20,000
and above and offer delivery service to them if total price exceeds. If not exceed 20,000,
let them know they are eligible for delivery.

Question: Using Switch statement, write a JS program that not only gives discount,
but also gives delivery  if one has discount and exceeds le20,000. If the person has
discount but not eligible for delivery, inform them about it.
*/

let totalCakePrice = 25000;

switch (true) {
  case totalCakePrice >= 20000:
    console.log("You won 10% discount. Thank you for doing business with us.");
    console.log("Free delivery! Pay Le" + totalCakePrice * 0.9);
    break;
  case totalCakePrice > 10000:
    console.log("You won 10% discount. Thank you for doing business with us.");
    console.log("No delivery. Pay Le" + totalCakePrice * 0.9);
    break;
  default:
    console.log(
      "Thank you for doing business with us. Total: Le" + totalCakePrice,
    );
}

// Exercise 5: Brother Jalloh Phone Shop

//Story:
/*Brother Jalloh sells phones. He said:
1. Whoever buys phones worth Le15000 gets 5% discount.
2. Whoever buys phones worth Le30000 and above gets FREE airtime + discount.

Task:
Using switch statement, write a JS program that:
- Takes total price of phones from user
- If price > Le15000, give 5% discount: print "You won 5% discount. Thank you for shopping with us."
- Inside that discount, check again: if price >= Le30000, print "You are eligible for FREE airtime!"
- If he has discount but price < Le30000, print "You have discount but NOT eligible for free airtime. Buy Le30,000 and above."
- If price does not exceed Le15000, print "Thank you for shopping with us."*/

let totalPrice = 35000;

switch (true) {
  case totalPrice >= 30000:
    console.log("You won 5% discount.Thank you for shopping with us.");
    console.log("You are eligible for FREE airtime!");
    break;
  case "totalprice" > 15000:
    console.log("You won 5% discount.Thank you for shopping with us.");
    console.log(
      "You have discount but Not eligible for free airtime.Buy Le30000 for free airtime.",
    );
    break;
  default:
    console.log("Thank you for shopping with us.");
    break;
}

// EXCERCISE 6:TRAFFIC LIGHT-FOR DELIVERY RIDER
// MAMY Fatu Delivery Rider - Traffic Light
// Try: red,yellow, green.

let light = "red";
switch (light) {
  case "red":
    console.log("Stop! Do not deliver.Wait at shop.");
    break;
  case "yellow":
    console.log("Get Ready! Prepare bikefor Le20000+ delivery.");
    break;
  case "Green":
    console.log(
      "Go! You are eligible to deliver. Free delivery customer waiting! ",
    );
    break;
  default:
    console.log("Invalid light - Stay in shop");
}

// EXERCISE 7:SHOP  Calculator
// Brother Jalloh Phone Shop - Calculate total price using operator.
// +, -, *./

let price1 = 20000;
let price2 = 15000;
let operator = "+";

switch (operator) {
  case "+":
    console.log("Total Bill: Le" + (price1 + price2));
    break;
  case "-":
    console.log("Total Bill: Le" - (price1 - price2));
    break;
  case "*":
    console.log("Total Bill: Le" * (price1 * price2));
    break;
  case "/":
    console.log("Total Bill: Le" / (price1 / price2));
    break;
  default:
    console.log("Thank you for shopping with us - Invalid operator");
}


// EXERCISE 8: create a JS app that takes someone's email and password to log them into the app.
// i.If the email of the user is not admin@lenosol.com, just welcome the user to their account
// ii. If the email is admin@lenosol.com, State their admin status and if not admin. display they are not  an admin
// iii. If the password is not equal to 123456 for anyone who tries to log in, print 
//"wrong Credentials"

// EXERCISE 8 - Login App with SWITCH STASTEMENT
let email = "admin@lenosol.com"
let password = "123456"

if(password !== "123456") {
  console.log("wrong credentials")
} else {
  switch(email){
    case "admin@lenosol.com":
  console.log("welcome Admin! You ARE an admin");
  break
  default:
    console.log("Welcome to your account" + email)
    console.log("You are Not an admin")
    break
  }
}