# Day 25 Javascript 
# What are the different way To create objects in js ?
# 1.object literal
```jsx
const person={
    name:'kaif',
    id:'2',
    age:'21'
}
console.log(person)

```
# 2 using Constructor 
#### with the help of this we can create  empty objects and add properties later
```jsx
const person=new Object()
person.name="kaif"
person.age="21"
console.log(person)
```
# 3  using Class constructor
#### with the help of thus we can make object of same type by using new keyword
```jsx
class person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
}
const kaif=new person("kaif","21")
const shahan=new person("shahan","24")
console.log(kaif,shahan)
```
