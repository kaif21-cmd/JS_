function second_largest(arr){
    let largest=-Infinity
    let second=-Infinity

    for(let i=0;i<=arr.length;i++){
        if(arr[i]>largest){
            second=largest
            largest=arr[i]
        }
        else if(arr[i]>second && arr[i]!==largest){
            second=arr[i]
        }
        
    }
    return second === -Infinity ? "Not exists" : second;
}
console.log(second_largest([10, 5, 20, 8])); // 10
 