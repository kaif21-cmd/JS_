//COMPARISION QUESTION
console.log(2==2) 
//output :true
console.log(2==2==2) 
// output :false
// why? compilation occurs from left to right 
//2==2-> true js convert true to 1 and 1==2 so it is false 
console.log(2==2==2==0)
//output :true 
//2==2->true-1
//1==2->false -0
//0==0-> true 

console.log(0==-0) 
console.log(0===-0)
//ouput give true due to bug in js 
// to overcome from this problem we use object.is
console.log(Object.is(0,-0));

