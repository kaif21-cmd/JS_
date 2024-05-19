// function sum(num1,num2){
//     return num1+num2;
// }
// var result=sum(10,10);
// console.log(result); // ouput is 20
//problem statement
// if we overwrite in this function koi change hoga ?
function sum(num1,num2){
    "use strict";
    num1=100;
    num2=200;
    return num1+num2;
}
var result=sum(10,10);
console.log(result);
// how to overcome from this problem of overwrite use " use strict "
//" with the help of "use strict " argumnet are not overwrite"
