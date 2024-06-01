const arr=[1,2,3,4,5]
console.log(1 in arr)//true
console.log(2 in arr)//true
console.log(4 in arr)//false
//why becouse in js array is treated as object and in operator used to check keys in objevct weather the key is present or not in object or in its prototypechain
//same in array index is treated as keys 
console.log(Object.keys(arr)) //here we get all index of array[ '0', '1', '2', '3', '4' ]
//so it will so false for 4 
