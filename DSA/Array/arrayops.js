function ops(arr, elem){
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i]);
  }

  newArr.push(elem);
  return newArr;
}

console.log(ops([1,2,3,4], 23));

// array poping 
function pops(arr){
  arr.pop();
  return arr;
}

console.log(pops([1,2,3,4,5]));
// [1,2,3,4]

// unshift the elemet;

function unshifts(arr, elem){
  let newarray = [];

  newarray.unshift(elem);      // pehle element

  for(let i = 0; i < arr.length; i++){
    newarray.push(arr[i]);     // baaki elements
  }

  return newarray;
}

console.log(unshifts([1,2,3,4,5], 0));
// [0,1,2,3,4,5]


