function occurence(arr,target){
let count=0
for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
        count++
    }
}
return count;
}
let result=occurence([1,2,3,4,51,1,1,1,1,1],1)
console.log(result);