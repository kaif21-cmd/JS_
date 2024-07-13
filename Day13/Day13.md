# Day 13
# Question 1
```jsx
console.log(!!null) //null is falsy !falsy->truthy !truthy-falsy
console.log(!!'')//'' empty string is falsy same as first one 
console.log(!!1) // i1 is truthy value here and !truthy-falsy-> again !falsy-truhty
// false false truthy
```
# Question 2
```jsx
console.log([...'kaif'])
// [ 'k', 'a', 'i', 'f' ]
// spread operator will seperate each alabhabet and return new array
```
# Question 3
```jsx

const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
  });
  
  const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
  });
  
  Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
  //promise.race methord it will rej or resolve only whiich have very low time 
```
# QUESTION 4
```jsx
  const person = {
    name: 'Lydia',
    age: 21,
  };
  
  for (const item in person) {
    console.log(item);
  }
  //in operator return the keys of objects //name age 
  function Car() {
    this.make = 'Lamborghini';
    return { make: 'Maserati' }
  }
  //the constructor function Car explicitly returns a new object with make set to "Maserati", which overrides the default behavior. Therefore, when new Car() is called, the returned object is assigned to myCar, resulting in the output being "Maserati" when myCar.make is accessed.
```
# QUESTION 5
```jsx
  (() => {
    let x = (y = 10);
    //this expression look
    //y = 10;
    // let x = y;
    console.log(x);
    console.log(y);
  })();
  //if we want acces outside 
console.log(x) //referce error 
console.log(typeof x);  //x=y undefined
console.log(typeof y)//y =10 number
```

# QUESTION 6 
```jsx
class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  Dog.prototype.bark = function() {
    console.log(`Woof I am ${this.name}`);
  };
  
  const pet = new Dog('Mara');
  
  pet.bark();
  
  delete Dog.prototype.bark;
  
  pet.bark();
```
# QUESTION 7
```jsx
  const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
//The Set object is a collection of unique values: a value can only occur once in a set.
```
# Question 8
```jsx
const name = 'Lydia';
age = 21;

console.log(delete name);//false
console.log(delete age);//true
//delete operator is used to delete the property from an object 
// and if you declare a variable without the name is treated as global object 
//on perfectly deletion it will return the true otherwise false
```
# QUESTION 9
```jsx
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
//{ admin: true, name: "Lydia", age: 21 }
```

# Question 10
```jsx
const persons = { name: 'Lydia' };

Object.defineProperty(persons, 'age', { value: 21 });

console.log(persons);
console.log(Object.keys(persons)); //return only name 
//correct way
console.log(Object.getOwnPropertyNames(person)); // ['name', 'age']
// With the defineProperty method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the defineProperty method, they are by default not enumerable. The Object.keys method returns all enumerable property names from an object, in this case only "name".
```
# QUESTION 11
```jsx
const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90,
  };
  
  const data = JSON.stringify(settings, ['level', 'health']);
  console.log(data);
```
# Question 12
```jsx
  let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
let num=10;
console.log(num++)//10
console.log(++num)//12
```


