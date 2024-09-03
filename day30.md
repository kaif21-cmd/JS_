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
```
