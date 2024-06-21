
//Methords 
// 1 flatmap methord 
const kaif = ["hello", "kaif"]; //split like h,e,l,l,o,k flat map methord used 
const ar = kaif.flatMap(n => n.split(''));
console.log(ar);
//2  concat and spread methord 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1.concat(array2);
const combinedWithSpread = [...array1, ...array2];
console.log(combined); // Outputs: [1, 2, 3, 4, 5, 6]
console.log(combinedWithSpread); // Outputs: [1, 2, 3, 4, 5, 6]

//3 all methord  

const arrays = [5, 4, 3, 2, 1];
const kaif_ki_arrays = arrays
    .sort((a, b) => a - b) // Sort the array
    .filter(n => n % 2 === 0) // Filter even numbers
    .map(n => n * n) // Square each number
    .reduce((a, b) => a + b, 0) // Sum all the squared numbers
    .toString() // Convert the sum to a string
    .split('') // Split the string into an array of digits
console.log(kaif_ki_arrays) // [2,0]

// 4  fil methord 
const arrayss = [1, 2, 3, 4, 5];
arrayss.fill(0, 1, 4);
console.log(arrayss); // Outputs: [1, 0, 0, 0, 5]

// 5  find methord 
const bhai=[1,2,3,4,5,6,7]
const kaifs=bhai.find(n=>n>3)
console.log(kaifs)//return only one index which is grater than 3 mean ans is 4 

// 6  set methord 
const bhais = [1, 2, 3, 3, 4, 5, 6, 7];
const kaifss = [...new Set(bhais)];

console.log(kaifss); // Outputs: [1, 2, 3, 4, 5, 6, 7]

// 7 sliced methord 
const numbers = [1, 2, 3, 4, 5];
const sliced = numbers.slice(1, 3);

console.log(sliced); // Outputs: [2, 3]

// 8 spliced methord 
const numberss = [1, 2, 3, 4, 5];
numberss.splice(2, 1, 99); // Removes 1 element at index 2 and inserts 99

console.log(numberss); // Outputs: [1, 2, 99, 4, 5]


