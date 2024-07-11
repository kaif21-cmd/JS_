
```jsx
#QUESTION 1
function sayhi(){
    console.log(name)
    console.log(age)
    var name='kaif'
    let age='23'
}
sayhi`` //ouput is reference  error and undefined
// hoisting is only occur in var variable

#question 2
for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },1) //due to functional scope 3 3 3
}
for(let i=0;i<3;i++){
    setTimeout(() => {
    console.log(i)
    }, 1);
}// due to block scope 0 1 2 

#QUESTION 3
const shape={
    radius:10,
    diameter(){
    return this.radius*2
    },
    perimeter:()=>{
     return 2*Math.PI*this.radius // PERIMETER IS AN ARROW FUNCTION ,SO IN ARROW FUNCTION THIS KEYWORD REFERSE TO ITS CURRENT SUUROUNDING SCOPE UNLIKE REGULAR FUNCTION 
     //Arrow Function: The this keyword is lexically bound, meaning it takes the this value from the surrounding code 
}
}
console.log(shape.perimeter())// so it will so Nan //due pi oyherwise it show reference error
console.log(shape.diameter())//20

#question 4 what will be the output 
// + unary operator turns true to 1 and false to zero 
// falsy value in js 
// 0
// -0
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN (Not-a-Number)
// Single NOT (!): Converts true to false and false to true.
# question 5
console.log(+true ,!'kaif') 

//QUESTION 5
let c={
    greeting:'hey'
}
let d=c;
//for completely copy we use spread operator 
// let d={...c} now it will give hey
c.greeting='hello'
console.log(d.greeting)
//output hello due to refernce type 

// //QUESTION 6
let a=3;
let b=new Number(3) //new number is an built in function constructor it look like a number nbut it is not a number it is an object
let c=3;
console.log(a==b)//true
console.log(a===b)//false beacuase different data type 
console.log(b===c)//false different data types

//question 7
let greeting;
greeting={

}
console.log(greeting)

//QUESTION 8 
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.getfullname = function() {
        return `${this.firstname} ${this.lastname}`;
    };
}

const member = new Person('kaif', 'siddique');
console.log(member.getfullname()); //KAIF SIDDIQUE 

//QUESTION 9 WHAT IF 
function Person(firstname,lastname){
    this.firstname=firstname
    this.lastname=lastname
}
const member=new Person('kaif','shaikh')
Person.getFullname=function(){
    return `${this.firstname} ${this.lastname}`
}
console.log(member.getFullname()) //it will show type error 
//because object ke andr aisa ko function  ni hai but we can fix this by using 
//person.prototype.getFullname //with help prototype keyword we can fix this 
//In JavaScript, the prototype keyword is used to add properties and methods to constructors. This allows all instances created by that constructor to inherit these properties and methods, which is a key feature of JavaScript's prototype-based inheritance model.


//QUESTION 10
function sum(a,b){
    return a+b;
}
const result=sum(1,'2')
console.log(result)//12 string

let num=0;
console.log(num++);//post incremnet
console.log(++num)//2 1+1=2 
console.log(num)//2 
// Step 1: console.log(num++);
// num++ is the post-increment operator. This means that the value of num is used first, and then it is incremented.
// Initially, num is 0.
// console.log(num++) prints the current value of num, which is 0.
// After printing, num is incremented by 1. So now, num is 1.
// Output: 0

// Step 2: console.log(++num);
// ++num is the pre-increment operator. This means that num is incremented first, and then the new value is used.
// Currently, num is 1.
// ++num increments num to 2.
// console.log(++num) prints the new value of num, which is 2.
// Output: 2

// Step 3: console.log(num);
// At this point, num has already been incremented to 2 in the previous step.
// console.log(num) simply prints the current value of num, which is 2.
// Output: 2
```
