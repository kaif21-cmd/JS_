
# DAY 12 
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
# QUESTION 2
```jsx
function getadd(...add){
  console.log(add)
}
getadd(2+2+2+2+2+2+2+2+2+2)
//ouput [20] give in the form of array 
# Rest Operator allows you to represent an indefinite number of arguments as an array. It's particularly useful in function definitions to handle variable-length argument lists.

```
