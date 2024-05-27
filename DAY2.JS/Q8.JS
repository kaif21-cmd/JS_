function ispass(){
    console.log("kaif is pass");
    return 0;
}
function isTopper(){
    console.log("kaif is topper");
    return false;
}
let msg=ispass()||isTopper();
console.log(`msg=${msg}`)

//output 
// kaif is pass
// kaif is topper
// msg=false

//explanation ?
// left to right compilation in js when you combine two function with || this or in both function if the truthy value not found so it return last value and if the truthy value found then comoilation will stop
