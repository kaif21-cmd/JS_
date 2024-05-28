//FILTER AND FOUND ODD NUMBER 
function odd(no){
    if(no%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}
const result=odd(2);
console.log(result);

//different methord
const arr=[1,2,3,4,5];
const kaif_ki_array=arr.filter(n=>n%2==0).map(n=>n*n);
console.log(kaif_ki_array)