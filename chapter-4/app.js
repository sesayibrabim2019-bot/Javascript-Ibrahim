// ARRAY
// Creating an Array
let students = new Array("Amadu", "Salu", "Foday");
console.log(students);

//  Array Fruits
let fruits = ["Apple", "Banana", "Guava", "Pineapple"];
console.log(fruits);

// Note:
/* 
1. The data stored in an array are called elements
2. Array stores elements of any data type (mixed collection of elements)
3. Elements srored in an array are positional indexed based
4. The first element in indexed at 0th position
5. Elements stored in an array are seperated with comma (,)
*/

let mixedData = [
  "Programming in Java",
  23,
  null,
  undefined,
  NaN,
  { name: "Sameal", age: 67 },
  { name: "Ibrahim", age: 16 },
  { name: "Amadu's Crush", age: 24 },
  ["Apple", "Banana", "Casava"],
  students,
];

console.log(mixedData);

// Accessing Elements in an Array
console.log(fruits[1]); // Printing the second element of the array
console.log(fruits[3]); // Printing the fourth element of the array
console.log(mixedData[5]); // Printing the sixed element of the array
console.log(mixedData[5].name); // printing the fifth element's objects property(name)of the array

console.log(mixedData[5].age); // Printing the fifth element's object's property(age)of the array

console.log(mixedData[6].name); // Printing the sixth element's object's property(name)of the array

// ADDING elements to the Array
let emptyFruits = [];

// push() method
emptyFruits.push("Banana");
emptyFruits.push("Mango");
emptyFruits.push("Orange");

console.log(emptyFruits);

// Removing elements from an Array
// pop()method
emptyFruits.pop(); // Removes the last element in the Array
emptyFruits.push("Isatu", "Fatu"); // Adding two elements to the end of the array
emptyFruits.pop(); // Removes the last elements to the end of the array
console.log(emptyFruits);

// Adding elements to the start/beginning of the 
// unshift() method
emptyFruits.unshift("Plantain") // Adds element to the beginning of the array

emptyFruits.unshift("Beans")// Adds element to the beginning of the array

console.log(emptyFruits)

// Removing element at the strat/beginning of an array
emptyFruits.shift() // Removes element at the beginning of the array
emptyFruits.shift() // Removes element at the beginning of the array

console.log(emptyFruits)


// EXCERCISE
/* 1. Create an empty studentDb 
   2. Insert 4 students objects into the array using the push method. Each object must have the following:id, name, email, phoneNumber
   3. print the array to the terminal
   */

const studentsDb = [];


studentsDb.push(
  {
    id: 1,
    name: "Aminata Koroma",
    email: "aminata@gmail.com",
    phoneNumber: "076123456"
  },
  {
    id: 2,
    name: "Mohamed Jalloh",
    email: "jalloh@gmail.com",
    phoneNumber: "077987654"
  },
  {
    id: 3,
    name: "Fatu Sesay",
    email: "fatu@mammyfatu.com",
    phoneNumber: "088112233"
  },
  {
    id: 4,
    name: "Ibrahim Kamara",
    email: "ibrahim@rslAF.sl",
    phoneNumber: "076556677"
  }
);

console.log(studentsDb);

// EXCERCISE: 1
/* 1. Create an empty studentDc 
   2. Insert 8 students objects into the array using the push method. Each object must have the following:id, name, email, phoneNumber
   3. print the array to the terminal
   */

   const studentDc = [];

   const addStudent  =(id, name, email, phone) => studentDc.push({id, name, email, phoneNumber: phone});
   addStudent(1, "Abu Bah", "abu@gmail.com", "076688309");
   addStudent(2, "Mambu Sow", "mambu@gmail.com", "0766458309");
   addStudent(3, "Fanta Nah", "fanta@gmail.com", "0766884309");
   addStudent(4, "maj Bah", "maj@gmail.com", "0763288309");
   addStudent(6, "Dora njai", "njai@gmail.com", "072188309");
   addStudent(7, "Rugi conteh", "rugi@gmail.com", "076688009");
   addStudent(8, "sulaiman Balde", "sulaau@gmail.com", "0766884409");

   console.log(studentDc)

   // EXCERCISE: 2
/* 1. Create an empty studentDa 
   2. Insert 5 students objects into the array using the pop method. Each object must have the following:id, name, email, phoneNumber
   3. print the array to the terminal
   */

   // Answer

   const studentDa = []

   studentDa.pop(
     {
       id: 1,
       name: "Aminata Koroma",
       email: "aminata@gmail.com",
       phoneNumber: "076123456",
     },

     {
       id: 2,
       name: "Dan Kamara",
       email: "dan@gmail.com",
       phoneNumber: "0345123456",
     },

     {
       id: 3,
       name: "Aminata ma",
       email: "aminatama@gmail.com",
       phoneNumber: "075123456",
     },

     {
       id: 4,
       name: "Abu Kora",
       email: "abu@gmail.com",
       phoneNumber: "077123456",
     },

     {
       id: 5,
       name: "Ajo Kiuy",
       email: "ajo@gmail.com",
       phoneNumber: "0761234986",
     },
   );

   console.log(studentDa)