function linearserach(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
let result=linearserach([1,2,3,4,5,6,7],5)
console.log(result)

// 2nd way index of methord 

[10, 20, 30].indexOf(30); // 2

// complexity 0(n) | Case    | Time |
// | ------- | ---- |
// | Best    | O(1) |
// | Worst   | O(n) |
// | Average | O(n) |

