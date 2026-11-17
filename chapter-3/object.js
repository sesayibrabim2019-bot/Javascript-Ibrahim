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
  photo     : ${citizen.photo}

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

const factory = {
    location: "10 Regent Road",
    numberOfFacaulties: 22,
    machines: 70,
    owner: "Mohamed Sesay",
    hours: 18,
    productPerday: ["gloves", "uniforms", "materials"],
department: {
    name: "airconditioning",
    numberOfEquipment: 1099,
    transportfare: 18000,
}

}
console.log(factory)
console.log(factory.department)
console.log(factory.productPerday)

// Exercise
// Create an object for a citizen(at least 9 crucial infos) and print THEM to
//the console in an ID card for soldier,format using the JS Template Literal


const soldier = {
    fullName: "Cpl. Santos Sesay",
    serviceNumber: "RSLAF-2026-8845",
    rank: "Coporal",
    unit: "5th Infantry Battalion",
    bloodGroup: "0+",
    dateOfBirth: "12-08-1998",
    dateOfEnlistment: "Western Area",
    base: "Wilberforce Barracks, Freetown",
    expiryDate: "15-01-2030",
}

console.log(`******** SL MILITARY ID CARD WITH TEMPLATE LITERAL *********`)
console.log(`Full Name:$(soldier fullName)`)
console.log(`service:$(soldier serviceNumber)`)
console.log(`rank:$(soldier rank)`)
console.log(`unit:$(soldier unit)`)
console.log(`blood:$(soldier bloodGroup)`)
console.log(`DOB:$(soldier dateOfBirth)`)
console.log(`DOE:$(soldier dateOfElishment)`)
console.log(`base:$(soldier base)`)
console.log(`expiryDate:$(soldier expiryDate`)
console.log(`**********SL MILITARY ID CARD-OFFICIAL**********`)

const student2 = {
    fullName: "Zainab Sesay",
    class: "Three A",
    performance: "A+",
    attendance: "Regular",
    result: "Distinction",
    school: "Methodist Girls High School",
    year: "2026",

}
console.log(`:$soldier fullName`)
console.log(`:$soldier service`)
console.log(`:$(soldier rank)`)
console.log(`:$(soldier unit)`);
console.log(`blood:$(soldier bloodGroup)`);
console.log(`DOB:$(soldier dateOfBirth)`);
console.log(`DOE:$(soldier dateOfElishment)`);
console.log(`base:$(soldier base)`);
console.log(`expiryDate:$(soldier expiryDate`);




