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
hoisting not occur in let and const 
```
# Question 4
```jsx
let name = 'Lydia';

function getName() {
  console.log(name);
}

getName(); // Lydia
in this case it point the global object 
```
# Question 5
```jsx
const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))
The Promise.all method runs the passed promises in parallel. If one promise fails, the Promise.all method rejects with the value of the rejected promise. In this case, promise3 is rejected with the value "Third". We’re catching the rejected value in the chained catch method on the runPromises invocation to catch any errors within the runPromises function. Only "Third" gets logged, since promise3 is rejected with this value.


```
kaif shaikj
kaif sjhaikh
kAIF SHaikj
kaif shaikh
