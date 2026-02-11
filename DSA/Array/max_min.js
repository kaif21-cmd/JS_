function max(arr){
let max=arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
return max;
}
let result=max([1,2,3,4,5])
console.log(result)

function min(arr){
    let min=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

let result2=min([1,2,3,4,5])
console.log(result2)