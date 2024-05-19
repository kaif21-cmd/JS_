//comparing empty array with empty string 
console.log([]=="") //true
//why?
//agar ham empty array ko empty string se compare karenge to true hoga 
//explanation.
console.log([].toString());  // Output: ""
console.log([1,2].toString());  // Output: "1,2"

//if both are the same data types in camparison it will show false 
// empty array empty string me tabhi convert hoga jab different data type se compare hoga 

console.log([]==[])
