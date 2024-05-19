var x = [typeof x, typeof y][1];
// console.log( typeof x);
console.log(typeof typeof x);

//explanation
// x and y are the undeclared varibale so the data type of undeclared variable is "undefined"
//so it will seen as x=["undefined",undefined][1];
//it is an array and pointing the index value of 1 which is undefined 
//type of x =undefined =string 
//console.log(typeof string )
//output string 