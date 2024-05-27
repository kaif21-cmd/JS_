function show(){
    this.name="kaif";
    return {name:'zara'};
}
const Person=new show();
console.log(Person.name) //output will be kaif 
// if we add explicit return here then console with print return statemnet 
// return {name:'zara'};// output zara 
// agar  hmne khud se return kya hai to wahi console hoga Agar koi return ni hai to newly created hi console hoga 