// USE OF HASOWN() METHORD
// hasown is a static methord return true if the specific object has the indicated property as it own property if the property is inherited or does not exits the methord return false 
// hasown

const obj1={};
let key1="constructor";
if(Object.hasOwn(obj1,key1)){
    console.log("key found");
}
else{
    console.log("key not found")
}
//-2nd example 
const obj = { myProp: 42 };
let key = "myProp";

if (Object.hasOwn(obj, key)) {
    console.log("key found");
} else {
    console.log("key not found");
}
