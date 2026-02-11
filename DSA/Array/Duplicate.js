
function duplicate(ar){
    let seen={}
    for(let i=0;i<ar.length;i++){
        if(seen[ar[i]]){
            return ar[i]
        }else{
            seen[ar[i]]=true;
        }
    }
}
console.log(duplicate([2,3,1,6,7,2]))

function duplicates(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                return arr[i];
            }
        }
    }
    return "No duplicate";
}
console.log(duplicates([2,3,1,6,7,2,1]))

// All duplicates in array

function allDuplicates(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates.length > 0 ? duplicates : "No duplicates";
}

// Correct function call
console.log(allDuplicates([2,2,3,3,5,5,7,8,9]));


