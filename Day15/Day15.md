# Day 15
# question 1
```jsx
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
// Classes are syntactical sugar for function constructors. The equivalent of the Person class as a function constructor would be:
//object
```
# question 2
//2
// let newList = [1, 2, 3].push(4);sss

// console.log(newList.push(5));
//The .push method returns the new length of the array, not the array itself! By setting newList equal to [1, 2, 3].push(4), we set newList equal to the new length of the array: 4.
//Then, we try to use the .push method on newList. Since newList is the numerical value 4, we cannot use the .push method: a TypeError is thrown.



//3 
function giveLydiaPizza() {
    return 'Here is pizza!';
  }
  
  const giveLydiaChocolate = () =>
    "Here's chocolate... now go hit the gym already.";
  
  console.log(giveLydiaPizza.prototype);
  console.log(giveLydiaChocolate.prototype);
  //normal function ke pass prototype property hoti hai
  //arrow function ke pass ni hoti
  //Regular functions, such as the giveLydiaPizza function, have a prototype property, which is an object (prototype object) with a constructor property. Arrow functions however, such as the giveLydiaChocolate function, do not have this prototype property. undefined gets returned when trying to access the prototype property using giveLydiaChocolate.prototype.
  
  //4
  const person = {
    name: 'Kaif',
    age: 22,
    Professiona:'Er'

  };
  
  for (const [x, y] of Object.entries(person)) {
    console.log(x, y);
  }
  //.entries give keys as well property
  //Object.entries(person) returns an array of nested arrays, containing the keys and objects:

//[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]
//Using the for-of loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using const [x, y]. x is equal to the first element in the subarray, y is equal to the second element in the subarray.
//The first subarray is [ "name", "Lydia" ], with x equal to "name", and y equal to "Lydia", which get logged. The second subarray is [ "age", 21 ], with x equal to "age", and y equal to 21, which get logged.

//5 
function getItems(fruitList, ...args, favoriteFruit) {
    return [...fruitList, ...args, favoriteFruit]
  }
  
  getItems(["banana", "apple"], "pear", "orange")
  //har function me last parameter sirf rest operator hoga agar wo last ni hai to error dega
  //error

//6
function getItems(fruitList, favoriteFruit, ...args) {
    return [...fruitList, ...args, favoriteFruit];
  }
  
  getItems(['banana', 'apple'], 'pear', 'orange');
//[ 'banana', 'apple', 'orange', 'pear' ]

//7
function nums(a, b) {
    if (a > b) console.log('a is bigger');
    else console.log('b is bigger');
    return
    a + b;
  }
  
  console.log(nums(4, 2));
  console.log(nums(1, 2));
