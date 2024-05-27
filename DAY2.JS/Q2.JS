//check weather the number is integer and float
//1st way
 function isInteger(num){
    return num%1===0; //by formula 
 }
 console.log(isInteger(2));
 console.log(isInteger(2.5));

//2nd way //Number builtin methord 
 function isInteger(num){
    return Number.isInteger(num)
 }
 console.log(isInteger(3));

