// loop is used to repeat the same code many times without writing it again and again.
// Instead of writing console.log 10 times, you write loop once and it runs 10 times.
// Best when you know how many times. Use it when you know the unmber, like 1 to 10.
// Example

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop- runs while condition is true. Use when you don't know how many times.

let count = 1;

while (count <= 3) {
  console.log("cake " + count);
  count++;
}

// Do...While Loop- Runs at least once. Even if condition is false,it runs 1 time first.
let password = "wrong";

do {
  console.log("Try login");
  password = "123456"; // after 1 try it becomes correct
} while (password !== "123456");

// Exercise 1:print even number 1 to 10
for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}

// Exercise 2: Mama Fatu Shop - loop through orders
let orders = ["Vanilla Cake - le 50", "Chocolate Cake - le 70", "Birthday Cake - le 100"]

for (let i = 0; i < orders.length; i++) {
    console.log("Order " + (i+1) + ":" + orders[i])
}

// Exercise 3: Login - Given user 3  chances (While loop)
 let correctpassword = "123456";
 let userpassword = "000";
 let attempts = 1;

 while (attempts <= 3) {
  if (userpassword === correctpassword) {
    console.log("Login Succeess")
    break
  } else {
    console.log("Attempt " + attempts + ": Wrong password")
    attempts++
    if (attempts ===2) {
      userpassword = "123456"
    }
  }
 }