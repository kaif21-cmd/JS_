//CHECK IF A GIVEN CHARACTER IS UPPERCASE OR NOT ?
function isuppercase(char){
    return char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90;
    
}
console.log(isuppercase("A"));
console.log(isuppercase("b"));
console.log(isuppercase("c"));
console.log(isuppercase("D"));
// output
// true
// false
// false
// true

