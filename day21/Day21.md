# DAY 21 
# question 1 
```jsx
function show(){
    this.name="kaif";
    return {name:'zara'};
}
const Person=new show();
console.log(Person.name)
->if we add explicit return here then console with print return statemnet 
->return {name:'zara'};// output zara 
 ->agar  hmne khud se return kya hai to wahi console hoga Agar koi return ni hai to newly created hi console hoga 


```
# question 2 Checxk number is integer or not ?
```jsx
 function isInteger(num){
    return num%1===0; //by formula 
 }
 console.log(isInteger(2));
 console.log(isInteger(2.5));

# 2ND WAY
function isInteger(num){
    return Number.isInteger(num)
 }
 console.log(isInteger(3));

```
