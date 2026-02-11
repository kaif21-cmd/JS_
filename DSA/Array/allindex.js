function allindex(arr,target){
    let idx=[];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]===target){
         idx.push(i)
        }
    }
    return idx;
}
let result=allindex([1,2,3,3,1,1,3,12,3,3],3)
console.log(result)