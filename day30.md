# Question 1 K largest numnbers in array 
```jsx
function klargest(ar, k) {
    ar.sort((a, b) => a - b); // Sort the array in ascending order
    console.log("K largest elements:");
    for (let i = ar.length - 1; i >= ar.length - k; i--) {
        console.log(ar[i] + " ");
    }
}

// Example usage
klargest([1, 2, 3, 4, 5], 2); // Output: 5 4

```
# Question 2 K smaleest Number in the array 
```jsx


```
# Question 3 Replace all zeros with one 
```jsx
function replaceOnesWithTwos(arr) {
    return arr.map(num => num === 1 ? 2 : num);
}

// Example usage
const originalArray = [1, 2, 3, 1, 4, 1];
const modifiedArray = replaceOnesWithTwos(originalArray);
console.log(modifiedArray); // Output: [2, 2, 3, 2, 4, 2]


```
# Question 4 Replace All a with b 
```jsx
function replaceAll(str) {
    return str.replace(/a/g, 'b'); // Replace all 'a' with 'b'
}

const result = replaceAll("kaif");
console.log(result); // Output: "kbif"

```
# Question 5 Reverse a Array 
```jsx
function reverse(ar){
    let reverse=ar.reverse()
    return reverse
}
const result=reverse([1,2,3,4,5])
console.log(result)
```
# Question 6 Reverse an array byu second methord 
```jsx
function reverse(ar) {
    let reversed = [];  // Renamed variable to 'reversed' for clarity
    for (let i = ar.length - 1; i >= 0; i--) {
        reversed.push(ar[i]);  // Add each element to the 'reversed' array
    }
    return reversed;  // Return the reversed array
}

// Example usage
const result = reverse([1, 2, 3, 4, 5]);
console.log(result);  // Output: [5, 4, 3, 2, 1]

```
# Question Reverse a String 
```jsx
function reverse(str){
    let result=str.split('').reverse().join('')
    return result
}
const result=reverse("kaif")
console.log(result)

```

