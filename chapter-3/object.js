// JS - OBJECTS
const student = {
    firstName: "Ibrahim",
    lastName: "Sesay",
    age:20,
    Walk: true,
    girlfriend: false,
    university: "Limkokwing",
    program: "BSEM",
    occupation: "Web Designer",
    photo: "https://www.pixabay.com/ibrahim-pic-002",
    website: "https://ibrahim-sesay.netlify.app/",
}

// Printing the object
console.log(student)

// Accessing a property of an object
console.log(student.photo)

// UPDATING AN ATTRIBUTE IN AN OBJECT
student.occupation = "Website Designer"
console.log(student)

// ADDING a new property to the object
student.gender = "Male"
console.log(student)

// Exercise
// Create an object for a citizen(at least 5 crucial infos) and print THEM to
//the console in an ID card format using the JS Template Literal

// ========== CITIZEN ID OBJECT ==========
const citizen = {
  fullName: "Aminata Koroma",
  idNumber: "SL-2026-9845",
  dateOfBirth: "15-06-2000",
  district: "Western Area",
  address: "12 Siaka Stevens Street, Freetown",
  phone: "076-123-456"
};

// ========= PRINT AS ID CARD WITH TEMPLATE LITERAL ==========
console.log(`

  SIERRA LEONE NATIONAL ID CARD

  Name      : ${citizen.fullName}
  ID Number : ${citizen.idNumber}
  D.O.B     : ${citizen.dateOfBirth}
  District  : ${citizen.district}
  Address   : ${citizen.address}
  Phone     : ${citizen.phone}

  Issued: 2026 - Freetown

`);

const Citizen = {
    fullName: "Mambu Kamara",
    nationality: "Sierra Leone",
    gender: "Male",
    placeOfBirth: "Freetown",
    age: "20",
}

console.log(`******** SIERRA LEONE NATIONAL ID CARD ********`);
console.log(`Full Name: $(Citizen fullName)`);
console.log(`Gender: $(Citizen gender)`);
console.log(`Nationality: $(Citizen nationality)`);
console.log(`place of birth: $(placeOfBirth)`);
console.log(`age: $(Citizen age)`);
console.log(`************* SL ID CARD ***************`);


const house = {
    location: "Lumley",
    numberOfRooms: 4,
    parlor: 2,
    bathroom: 5,
    owner: "Ibrahim Sesay",
    pricePerNight: 100,
    facilities: [
        'Internet', "One Mobile - Wifi", "Kitchen", "TV", "Car Park", "Dryer",
        "Pool", "Beach Access", "No Smoking", "No Pet" ],
    appartment: {
        name:"Block D appartment",
        numberOfRooms: 2,
        gamingTV: 1
    }
}
console.log(house)
console.log(house.appartment)
console.log(house.facilities)
