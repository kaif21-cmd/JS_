function x(){
    a();
    function a(){
        console.log('a');
    }
    a();
    function a(){
        console.log('a')
    }
    a();
    function a(){
        console.log("b");
    }
    a();
}
x()
// b
// b
// b
// b
// due to hoisting function is overwrite and last function is goinf top of the window and after theat all function will call a() a() a() a() like that 