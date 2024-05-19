//SPOTIFY
function show(){
    this.name="kaif";
    this.showsdetail=()=>{
        console.log(this.name)
    }
}
const data=new show();
const fn=data.showsdetail;
fn();
//output kaif
// js me arrow function hota hai wo hamesha parent scope ko point karta hai 