function twosum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [arr[i],arr[j]] 
            }
        }
    }
     return "No pair found";
}
console.log(twosum([2,7,11,15], 13));

// All pairs 

function twosum(arr, target) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result.length > 0 ? result : "No pair found";
}

// Example
console.log(twosum([2, 7, 11, 15, 6, 9], 13));
