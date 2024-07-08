
### JavaScript Microtasks and Macrotasks Examples

Microtasks are higher priority tasks that are executed before the next rendering. Examples include `Promise` (e.g., `promise.then`, `catch`, `finally`). 

Macrotasks are lower priority tasks that are executed after Microtasks. Examples include `setTimeout`, `setInterval`, `setImmediate`.

The order of executing statements is:
- Synchronous code
- Microtasks
- Macrotasks

---

#### Questions 

```jsx
// //Microtask are the higher Priority Task they are executed before the next rendering 
// //example promises(promise.then,cath,finally)
// //Macrotask
// //macrotask are the lower priority task that are executed after Micro task
// //ex setTimout,setinterval,setImmediate
// //order of executing statement
// //synch>microtask>macro
// Promise.resolve().then(()=>{
//     console.log('Fisrst Micro Task');
//     Promise.resolve().then(()=>{
//         console.log('second Micro Task')
//     })
// })
// console.log('Script end')
// // ouput script end ,first micro,second micro

// //2question
// console.log('start')
// setTimeout(()=>{
//     console.log('Timeout')
// },0)
// Promise.resolve().then(()=>{
//     console.log('promise')
// })
// console.log('end')
// // output : start end promise timeout

// //3 question
// console.log('A');
// setImmediate(() => console.log('B'));
// Promise.resolve().then(() => console.log('C'));
// console.log('D');
// //output a,d,c,b

// //question 4
// setTimeout(() => console.log(1), 0);
// setTimeout(() => console.log(2), 100);
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => {
//     console.log(4);
//     setTimeout(() => console.log(5), 0);
// });
// console.log(6);
// //6 3,4,1,5,2

// //question 5

// setTimeout(() => console.log('timeout1'), 0);
// setTimeout(() => console.log('timeout2'), 0);
// Promise.resolve().then(() => console.log('promise1'));
// Promise.resolve().then(() => {
//     console.log('promise2');
//     Promise.resolve().then(() => console.log('promise3'));
// });
// console.log('end');
// //end ,promise1,promise2,promise3,timeout1,timeout2

// //question 6 
// console.log('start');

// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('promise1');
// }).then(() => {
//     console.log('promise2');
// });

// console.log('end');
// //output start,end,promise1,promise2,settimeout

// //question 7

console.log('first');

setTimeout(() => console.log('second'), 0);

Promise.resolve().then(() => {
    console.log('third');
    setTimeout(() => console.log('fourth'), 0);
});

console.log('fifth');
// output first,fifth,third,second,fourth

//question 8
setTimeout(() => console.log('timer1'));

Promise.resolve().then(() => {
    console.log('promise1');
    setTimeout(() => console.log('timer2'));
}).then(() => {
    console.log('promise2');
});

console.log('end');
//output end,promise1,promise2,timer1,timer2

//question 9
setImmediate(() => console.log('immediate1'));
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate2'));
Promise.resolve().then(() => console.log('promise1')).then(() => console.log('promise2'));
//output Promise1,promise2,timeout,immediate1,immediate2

//question 10
setTimeout(() => console.log('timeout1'), 0);
process.nextTick(() => console.log('nextTick1'));
Promise.resolve().then(() => console.log('promise1'));
setTimeout(() => console.log('timeout2'), 0);
process.nextTick(() => console.log('nextTick2'));
Promise.resolve().then(() => console.log('promise2'));
//nextick>promises 
//nexttick1,nextick2,promise1,promise2,timeout1,timeout2

//question 11
console.log('start');
process.nextTick(() => console.log('nextTick'));
setImmediate(() => console.log('immediate'));
Promise.resolve().then(() => console.log('promise'));
console.log('end');
//start,end,nextick,promise,immediate


//question 12
console.log('start');

Promise.resolve().then(() => {
    console.log('promise1');
    setTimeout(() => {
        console.log('timeout1');
    }, 0);
}).then(() => {
    console.log('promise2');
});

setTimeout(() => {
    console.log('timeout2');
}, 0);

console.log('end');

//output start,end,promise1,promise2,timeout2,timeout1

//question 13 
Promise.resolve().then(() => {
    console.log('promise1');
    return Promise.resolve('promise2');
}).then((value) => {
    console.log(value);
});

console.log('script end');
//output script end ,promise1,promise2

//14 
Promise.resolve()
    .then(() => {
        console.log('promise1');
        throw new Error('error1');
    })
    .catch((error) => {
        console.log('caught', error.message);
        return 'promise2';
    })
    .then((value) => {
        console.log(value);
    });

console.log('script end');
//end ,promises1,error1,caught,promise2
```
