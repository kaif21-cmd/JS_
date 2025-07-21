# SetTimout
## Code is run after the certain delay of time
```jsx
setTimeout(()=>{
    console.log('Hello')
},1000)
```
# setInterval
# Code is run in every interval of time
```jsx
setInterval(()=>{
    console.log("hello bhai")
},1000)

```
# Counter Function using setinterval
```jsx
let count=0;
const interval=setInterval(()=>{
    console.log(count)
    count++
},1000)
```
# ClearInterval
## used to stop the setInterval
```jsx
let count=0;
const interval=setInterval(()=>{
    console.log(count)
    count++
if (count>5){
    clearInterval(interval)
    console.log("Stopped counting.");
}
},1000)
```
# CallBack Hell
## nested call back()
```jsx
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);

```

# Promises
## promises are the cleanway to handel async operation in js 
```jsx
const mypromises=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve('success')
    }
    else{
        reject('failed')
    }
});
```
# Promise 
```jsx
Promise.all([
  Promise.resolve("A"),
  Promise.resolve("B"),
  Promise.resolve("C")
]).then(results => {
  console.log(results); // ["A", "B", "C"]
});

```
