
### DAY 12 
# QUESTION 1
```jsx
function checkAge(data) {
    if (data == [1]) {
      console.log('You are an adult!');
    } else if (data ==[1] ) {
      console.log('You are still an adult.');
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
  }
  
  checkAge([1]);

output is  Hmm.. You don't have an age I guess 
because: The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.
This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false
```
