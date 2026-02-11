function count_even_odd(ar) {
  let counteven = 0;
  let countodd = 0;

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] % 2 === 0) {
      counteven++;
    } else {
      countodd++;
    }
  }

  return { even: counteven, odd: countodd };
}

let result = count_even_odd([1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(result);

function evenoddidx(ar){
    let idx=[]
    for(let i=0;i<ar.length;i++){
        if(ar[i]%2===0){
         idx.push(i)
        }
    }
    return idx;
}
let result2=evenoddidx([1,2,3,4,5,6]) // [ 1, 3, 5 ]
console.log(result2)




