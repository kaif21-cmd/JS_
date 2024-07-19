# Day 19
# Question 
```jsx
const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

console.log(one, two, three);
|| operator return the 1st truthy value if all value are falsy last operand gets returnd 
```
