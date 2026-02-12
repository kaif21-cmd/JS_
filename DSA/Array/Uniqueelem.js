
function allUnique(arr){
  return [...new Set(arr)];
}

console.log(allUnique([1,2,1,2,3,4]));
// [1,2,3,4]
