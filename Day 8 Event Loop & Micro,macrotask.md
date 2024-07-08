
### JavaScript Microtasks and Macrotasks Examples

Microtasks are higher priority tasks that are executed before the next rendering. Examples include `Promise` (e.g., `promise.then`, `catch`, `finally`). 

Macrotasks are lower priority tasks that are executed after Microtasks. Examples include `setTimeout`, `setInterval`, `setImmediate`.

The order of executing statements is:
- Synchronous code
- Microtasks
- Macrotasks

---

#### Question 1

```javascript
Promise.resolve().then(()=>{
    console.log('First Micro Task');
    Promise.resolve().then(()=>{
        console.log('Second Micro Task')
    })
})
console.log('Script end')
//output 
Script end
First Micro Task
Second Micro Task
//question 2
console.log('start')
setTimeout(()=>{
    console.log('Timeout')
},0)
Promise.resolve().then(()=>{
    console.log('promise')
})
console.log('end')
