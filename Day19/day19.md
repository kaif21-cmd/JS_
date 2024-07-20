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
# Qyestion 6
```jsx
const foo=[1,2]
const bar=foo
console.log(foo,bar)
[ 1, 2 ] [ 1, 2 ]
console.log(foo[0],bar[0])
 1 1
```
# Question 7

```jsx
{
    let a=1;
    const b=1
    var c=1;
}
console.log(a) //give referce error becouse of let and const are function scope 
 console.log(b)//reference error
 console.log(c)//print  1 functional scope 
```
# Question 8
```jsx
new way to create array without sing new kwyword
const items = [];
items.push("Kaif")
console.log(items)
[ 'Kaif' ]
```
# Question 9
```jsx
const result=[1, 2, 3].map((x) => {
    const y = x + 1; 
    return x * y;
  });
 y=1+1=2
y=2+1=3
y=3+1=4
retun X*y [1,2,3]*[2,3,4]=[2,6,12]
```
# Question 10
```jsx
const resultss=[1, 2, 3].map((x) => x + 1);
console.log(resultss)
[ 2, 3, 4 ]

```


