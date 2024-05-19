//OLX 
//This is fundamental differnce between arrow function and normal function
//arrow function not invoked with new keyword  //invoked means lagu krna
//this is fundamental differnce between arrow function and normal function
const Person = () => {
    this.name = 'kaif'; // `this` does not refer to a new object here
    return this; // `this` refers to the lexical scope
}

try {
    const person = new Person(); // This will throw an error
    console.log(person.name);
} catch (error) {
    console.error("Error:", error.message); // Arrow functions cannot be used with `new`
}
 //show error 
//arrow function not invoked with new keyword  //invoked means lagu krna
//this is fundamental differnce between arrow function and normal function

// Regular function can be used as a constructor
function Man() {
    this.name = "kaif";
    return this; // `this` refers to the new object created
}

const person1 = new Man(); // This works correctly
console.log(person1.name);
