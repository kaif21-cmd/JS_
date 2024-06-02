let a={};
 let b=a;
 console.log(a==b) //due to a and b referebce value both a and b are equal pointing to the sane memory 
 console.log(a===b)//true here datatype is same and value also

let a1=[];
let b1=a1;
console.log(a1==b1)
console.log(a1===b1);

let a2=9;
let b2=a2;
console.log(a2==b2)
console.log(a2===b2)

let a3="kaif";
let b3=a3;
console.log(a3==b3)
console.log(a3===b3)

console.log({}==[]) //"object"==" " false 

data="false";
data1=false
console.log(typeof data)//string 
console.log( typeof data1)//boolean

console.log([]=="")//true agar ham empty array ko string me convert krenge to empty string milega
console.log([].toString()); // Output: ""

console.log([]==[])//false  //array to string me tabhi convert krta hai jab data type different ho or ye do array memory alag alag point kr rhu hogie 
console.log({}=={})//false 
console.log({}.toString())//memory me alag alag point kr rhe honge that why false

console.log(([43,21]>[89]))//false //when we using <,> sign array convert to the string so "43">"89" false
console.log([3]>[9])//false "3">"9" false
console.log([3]<[9])//true

console.log(2==2)//true
console.log(2==2==2)//false //2==2->true->1==2->false

console.log(2==2==2==0)//true //2==2->true-1 , 1===2->false-0 ,0==0->true

console.log(undefined==null)//undefined null ke sath hamesha true deta hai 

console.log([5]=="5")//true
console.log([2]==2)//true //first 2 convert to string "2" then string convert to number 2 now 2==2 true 
console.log("2"==2)//true //jab bhi string ko number ke sath compare kroge to string number me convert hojata hai 
console.log(["5"]=="5")//true //first array is convery to string it become "5"=="5" which means true
console.log("2"==2)//true sting to number and 2==2 
console.log("2"===2)//false it also check datatype here

console.log(null==0)// false null lo hamesha undefined ke sath compare kroge to true milega only 
console.log(null>0) // false null-> 0>0 false
console.log(null<0)// false 0<0
console.log(null>=0)//true 0>=0

let a4=1;
let b4=new Number(1);
console.log(a4==b4) //true values is same
console.log(a4===b4)//false beacause of different datatypes b4 is refer to objects
console.log([]==true)//false  //[]==1 when an array compared to number convert array to primitve value ''==0 -> 0==1 //false
console.log([]==false)//true
console.log([]==![]) //true //in js all object in js including array is truthy value nut ![]= !true-give false
//[]==false //when comparing an object with boolean convert boolean to number 
//[]==0 same when array campared with boolean array convert to primitve value ''==0 -> 0==0 //true
console.log(!+[]+[]+![]);
//!+ " "+ " "+ false
//!""+" "+false //empty string is falsy value !""->true
//true+" "+false
//'true false'







