# Day 19
# Question 1
```jsx
const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

console.log(one, two, three);
|| operator return the 1st truthy value if all value are falsy last operand gets returnd 
```
# Question 2
```jsx
const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('second');
}

async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}

firstFunction();
secondFunction();
second, I have resolved! and I have resolved!, second
```
# Question 3
```jsx
let name = 'Lydia';

function getName() {
  console.log(name);
  let name = 'Sarah';
}

getName();
hoisting not occur in let and const or also let is curly scoped variable can acces only value in thier curly scope 
```
