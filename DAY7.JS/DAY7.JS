//1 searching element in the array 
const number=[1,2,3,4,5]
const target=1;
const kaif=number.filter(n=>n==target)
console.log(kaif)
//2 moving element at one end 
const ar=[1,2,5,1,2,5,1,5,2]
const zeros=ar.filter(n=>n==5)
const num=ar.filter(n=>n!=5)
const result=[...zeros,...num]
console.log(result)
//3 change element with onther element 
//uses the ternary (conditional) operator in JavaScript. The ternary operator is a shorthand for an if-else statement and follows the syntax:
// REPLACE ALL ONE WITH ZEROS
const arr=[1,1,1,1,1,3,4,5,6,7,1,1,1]
const newar=arr.map(n=>n===1?0:n)
console.log(newar)
arr.map(num => num === 0 ? 1 : num) 
// iterates through each element (num) of the array (arr).
// For each element, it checks if num is equal to 0. If it is, it replaces num with 1.
// If num is not equal to 0, it leaves num unchanged.

//4  convert all negative element of array to postive 
const ar1=[-1,-2,-3,-4,5]
const results=ar1.map(n=>n<0?-n:n)
console.log(results)
arr.map(num => num < 0 ? -num : num) 
// iterates through each element (num) in the array (arr).
// For each num, it checks if num is less than 0 (num < 0). If true, it converts num to its positive equivalent using -num. If false (i.e., num is non-negative), it leaves num unchanged.
// The map method returns a new array where all negative elements from the original array have been converted to positive.

//5 
//intersection of array 
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// const intersection = array1.filter(value => array2.includes(value));
const intersection=array1.filter(n=>array2.includes(n))
console.log(intersection);
// array1 and array2 are the two arrays for which we want to find the intersection.
// The filter method is used on array1 to keep only those elements that are also present in array2. This is checked using the includes method, which returns true if an element is found in array2.

//6 union of array
const er=[1,2,3,4,5]
const er2=[1,2,7,8,9]
const union=[... new Set([...er,...er2])] //spread operator convert set to array
console.log(union)

//7 Unique Element in the array
const shaikh=[1,2,1,1,1,3,3,3,4,5,]
const newArr=[...new Set(shaikh)] //set contain only unique character here and ... operator convert set to array
console.log(newArr) //[ 1, 2, 3, 4, 5 ]

//8 TCS 
for(var i=0;i<4;i++){
    setTimeout(()=>{
        console.log(i)
    },5);
}// 4 4 4 4 due function scope 

for(let i=0;i<4 ;i++){
    setTimeout(()=>{
        console.log(i)
    },5)
} // 1 2 3  due to curly 

//9 
  let b=[1,2,3,4,5,6]
b[b.length-1]++; 
// console.log(b[b.length-1])//6 give 6 and 6++ icremnet operator increase the value 6++ 7 
console.log(b) //[ 1, 2, 3, 4, 5, 7 ]

//10 use of continue statement used for skiping the statement 
let c=[1,2,3,4,5,6];
for (let i=0;i<c.length;i++){
    if(c[i]==4){
        continue; 
    }
    console.log(c[i])
}
// 1 2 3 5 6

let d = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < d.length; i++) {
    if (d[i] >= 2 && d[i] <= 4) {
        continue;
    }
    console.log([i]);
}
