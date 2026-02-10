function popAndInsert(ar) {
    let inArr = [];

    while (ar.length > 0) {
        inArr.push(ar.pop());
    }

    return inArr;
}

// Example
let ar = [1, 2, 3, 4, 5];
let result = popAndInsert(ar);

console.log("Original array:", ar);   // []
console.log("New array:", result);    // [5, 4, 3, 2, 1]
