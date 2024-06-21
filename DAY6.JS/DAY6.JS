//1 Exponential Operator
console.log(2**3)// ** is exponential operator means 2 cube 3 
console.log(2+ +2) //4 
console.log(2- -2) // 2-(-2) become + operator 2+2->4 

//2 increment decrement question
let a=5; //and a=5 b=a so b=5
let b=a++; //a increment hogya to 6 a=6
console.log(a) 
let c=a+1;// 6+1 =7 c=7 
console.log(a,b,c) // 6 5 7 

//3 
let kaif=2
let er=--kaif; 
console.log(er) //1 ans 

//4 move all zero to one side using for loop 
let num=[0,3,0,1,3,0,1]
const nonzeros=[]
const zeros=[]
for(let i=0;i<num.length;i++){
    if(num[i]!==0){
        nonzeros.push(num[i])
    }
    else{
        zeros.push(num[i])
    }
}
const result =[...nonzeros, ...zeros] //spread operator 
console.log(result)
//2 way 

//5 element using filter methord using same question with filter methord
let array=[1,0,3,0,1,0,3,5,7,0]
const nonzeross=array.filter(n=>n!==0)
const zeross=array.filter(n=>n==0)
const results=[...nonzeross,...zeross]
console.log(results)

//6 
console.log("hello " /2 ) //NaN dividing string by number is result nan

//7 
//reverse array 1 way
let kaifshaikh=[1,2,3,4]
let empty=[]
for(let i=kaifshaikh.length-1;i>=0;i--){
    empty.push(kaifshaikh[i])
}
console.log(empty) // [ 4, 3, 2, 1 ]
 //2 way
 kaifshaikh.reverse()
 console.log(kaifshaikh)

 //8 Empty array
 let arr=[1,2,3,4]
 arr.length=0;
 console.log(arr) //[]
 //2 way
 while(arr.length>0){
    arr.pop()
 }
 console.log(arr)// []
 
 //9
 let ar = [1, 3, 4, 2, 7, 9, 14, 61];
 const peak = ar.sort((a, b) => a - b)[ar.length - 1];
 console.log(peak); // 61
 //This approach directly finds the maximum value without sorting the array, making it more efficient.
 //2nd way
 // explanation The array ar contains [1, 3, 4, 2, 7, 9, 14, 61].
// The spread operator ...ar expands this array into individual elements.
// Math.max(...ar) computes the maximum value among these elements.
// The result, 61, is stored in the constant peak and then logged to the console
 const peaks = Math.max(...ar);
 console.log(peak);

 //10 kth largest element 
 let Erray = [1, 3, 4, 2, 7, 9, 14, 61];
let k = 3;

// Sort the array in descending order
let sortedArray = [...Erray].sort((a, b) => b - a);

// Filter the array to get the first k elements
let kLargest = sortedArray.filter((element, index) => index < k);

console.log(kLargest); // [61, 14, 9]
//explanation
// Copy and Sort: Use let sortedArray = [...ar].sort((a, b) => b - a); to copy and sort in descending order.
// Filter k Elements: Use let kLargest = sortedArray.filter((element, index) => index < k); to get the first k elements.
// Log Result: Use console.log(kLargest); to print the k largest elements.
// Efficiency: Suitable for small k; consider a min-heap for large datasets.
