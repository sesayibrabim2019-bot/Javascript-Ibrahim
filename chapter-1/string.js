//string variables
let university = "limkokwing";
console.log(university);
let fullName = "Amadu Kamara";
let role = "lecturer";
let faculty = "DICT";

//1.STRING CONCATENATION

console.log("****PERSON INFORMATION****");
console.log("University: " + university);
console.log("Person Name: " + fullName);
console.log("Role: " + role);
console.log("Faculty: " + faculty);

let sentence =
  "My name is" +
  fullName +
  ". I am a" +
  role +
  " at " +
  university +
  "and I am in " +
  faculty +
  "department.";

console.log(sentence);

// string Length
let personName = "Amadu Kamara";
console.log(personName.length);

//Getting a character from a string by its index
console.log(personName[3]);
console.log(personName[7]);
console.log(personName[10]);
console.log(personName[11]);
console.log(personName[1]);
console.log(personName[1]);

// EXERCISE
// Create an abbreviation of five variable names that has two or three words
// in them and let the abbreviation variables of those variables have just
// the starting characters of the values of those variables to be abbreviated.Get the
// abbareviated values using the string indexing to get the values.

let str1 = "Mariam Kargbo";
let str2 = "Kemoh Wisdom Conteh";
let str3 = "Franklin Fatmata Nylanda";
let str4 = "Abu Bangura";
let str5 = "Mariam Kamara";

let abr1 = str1[0] + str1[7];
let abr2 = str2[0] + str2[6] + str2[13];
let abr3 = str3[0] + str3[9] + str3[17];
let abr4 = str3[0] + str3[4];
let abr5 = str3[0] + str3[7];

//string methods                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
let strVal = "Sameal Amkam";
console.log(strVal);

// Convert to uppercase
console.log(strVal.toUpperCase());
console.log(strVal.toLowerCase());

// string formatting
console.log("\t Amadu Kamara"); // \t is used to Tab
console.log("\n Akmak WebAvenger"); // \n is used to break to a new line

// Template Literal / String Literal
let num1 = 20;
let num2 = 13;
let num3 = 24;
let average = (num1 + num2 + num3) / 3;
console.log(average);
console.log(`The average of ${num1} + ${num2} + ${num3} = ${average}`);

// Checking if a value exists in a string
let email = "Amkam@lenosol.com";
console.log(email.includes("Amkam")); //false
// Method Chaining
console.log(email.includes("amkam")); //true
