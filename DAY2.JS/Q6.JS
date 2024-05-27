//use of in operator 
//IN OPERATOR IS USED TO CHECK IF A SPECIFIED PROPERTY EXIST IN AN OBJECT OR NOT OR IT IS INHERITED PROPERTY IN OTHER WORDS ITS PROTOTYPE CHAIN RETURN TRUE OTHERWISE FALSE 
//UBER
const obj={};
let key="constructor";
if(key in obj){
    console.log("key found");
}
else{
    console.log("key is not found ")
}
// output is key found why ? because constructor kewowrd present in prototype chain when you create object
const obj2={};
let key2="kaif";
if(key2 in obj2){
    console.log("key found");
}
else{
    console.log("key is not found ")
}
//output is key not found becouse kaif is not foun in object as well in prototype chain