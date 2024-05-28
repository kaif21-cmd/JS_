//MAKE SURE NO ONE CAN MODIFY THE OBJECT 
const obj={
    name:'kaif'
}
//with the help of freeze function
function freeze(val){
    return Object.freeze(val);
}
//we can not modify the object
freeze(obj);
obj.name="zara";
console.log(obj)

//but there is limitation this can not work properly in nested condition 
// for this we have to write code

const obj2={
    name:'zaras',
    work:{
        profile:'engineer'
    }
}
function freeze(val){
    Object.keys(val).forEach(key=>{
        if(typeof val[key]==='object');
    })
}
//now we can not modify the object 
console.log(obj2)
