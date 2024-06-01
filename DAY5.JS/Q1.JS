function test(){
    try{
        return 1;
    }
    finally{
        return 2;
    }
}
const result=test()
console.log(result)
// when we dealing with try and catch,finally always priority givies to finally so it will return 2
