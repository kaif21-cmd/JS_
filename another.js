//difference between arrow function and normal function 
//difference between call and bind ()

// // arrowFunction()
//not acces 
// // const arrowFunction = () => {
// //   console.log("This is an arrow function.")
// // }

// // kif();
//acces
// // function kif(){
// // console.log("bhai")
// // }

// Syntax: Arrow functions use a concise syntax.
// this Keyword: Arrow functions lexically bind this from the parent scope; normal functions have their own this.
// arguments Object: Arrow functions do not have their own arguments; normal functions do.
// Constructors: Arrow functions cannot be used as constructors; normal functions can.
// Object Methods: Arrow functions are not suitable for object methods if this is needed; normal functions are suitable.

// var ans=new Promise((res,rej)=>{
//    if(true){
//       return res();
//    }
//    else{
//       return rej();
//    }

// })
// ans.then(function(){
//    console.log("resolbe hogay ")
// })
//objects 
const obj={
   name:"kaif",
   course:"btech"
}

delete obj.name;
// delete the property value and property itself 
console.log(obj.name)

//object banane ka dusra tarika by using new object keyword 
const person=new Object()
person.name='kaif';
console.log(person.name+" "+"is a bad boy ") 

// values in an object can be another objects

const engineer= new Object()
engineer.name="kaif",
engineer.age=23;
console.log(engineer.age)

//this keyword use to acces property in function of object 

const kaifshaikh={
   firstname:"kaif",
   id:2,
   info:function(){
      this.name+""+this.id;
   }
}
console.log(kaifshaikh.id)

//4 tarika object create krne ka 
function AI(name,lang,work){
   this.name=name;
   this.name=lang;
   this.work=work;
}
//with the help of this blueprint template we create many obj
const kaif=new AI("kaifshaikh","c++","robot")
console.log(kaif.work)

// if you forget to add more property in object than
// prototype property allows you to add new properties to object
// AI.prototype.id="1";

//difference between call() and apply() amd bind()
// call() an object can use methord belonging to another objects 
// call() it take argument as an variable
const persons={
   fullname:function(){
      return this.name+" "+this.id;
   }
}
const person1={
   name:"kaif",
   id:1
}
const person2={
   name:"zara",
   id:2
}
const check=persons.fullname.call(person2)//zara 2
console.log(check) 

//we can also do it by argument
const robot = {
   fullname: function(lang, work) {
     return this.name + " " + this.id + " " + lang + " " + work;
   }
 };
 
 const robot1 = {
   name: "xyz11",
   id: "001"
 };
 
 const robot2 = {
   name: "Atlas",
   id: "123xt"
 };
 
 const result = robot.fullname.call(robot1, "c++", "Analyzer");
 console.log(result); // Expected output: "xyz11 001 c++ Analyzer"
 //using apply 
 const resultApply = robot.fullname.apply(robot2, ["Python", "Researcher"]);
console.log(resultApply); // Output: "Atlas 123xt Python Researcher"

 // apply() methord is same as call() an object can use methrod belonging to another object 
 //but it take argument as an array this ia difference between call() and apply() 

 //bind() methord()?
 function greet(greeting, punctuation) {
   return greeting + ', ' + this.name + punctuation;
 }
 
 const person = {
   name: 'Alice'
 };
 
 // Creates a new function with 'person' as 'this'
 const greetPerson = greet.bind(person);
 
 console.log(greetPerson('Hello', '!')); // Output: "Hello, Alice!"
 
 // Creates a new function with 'person' as 'this' and 'Good evening' as the first argument
 const greetPersonFormally = greet.bind(person, 'Good evening');
 
 console.log(greetPersonFormally('!')); // Output: "Good evening, Alice!"
 