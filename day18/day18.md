const products = [
    { product: 'banana', price: 6 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '0' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '0' }
  ]
 products.forEach((product)=>{
    console.log(product.price)
 })
 products.forEach((items)=>{
    console.log(items.product)
 })
 let totalprice=0
 products.forEach((products)=>{
    totalprice=totalprice+products.price
 })

// products.forEach((product) => {
//     totalPrice += product.price;
// });

// console.log('Total Price:', totalPrice);
//3

//Create an array of prices using map and store it in a variable prices
 const prices =products.map(product=>product.price)
 console.log(prices)
 //[ 3, 6, '10 ', 8, 10, '11' ]

 //4 Filter products with prices
 const kaif=products.filter(product=>product.price>5)
 console.log(kaif)
// //[
//     { product: 'mango', price: 6 },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 }
//   ]
  
//Calculate the sum of all the prices using reduce only
const allsum = products.reduce((accumulator, product) => accumulator + product.price, 0);

console.log('Total Sum of Prices:', allsum);
const productWithoutPrice = products.find(product => product.price === '0');
console.log(productWithoutPrice)
//{ product: 'potato', price: '0' }

const productWithoutPrices=products.findIndex(product=>product.price==='0')
console.log(productWithoutPrices)
//give the index 2

//Check if some products do not have a price value
const somearewithoutprice=products.some((product)=>product.price!=='0')
console.log(somearewithoutprice)
//true
//Check if some products do not have a price value
const allhaveprice=products.every(product=>product.price!=='0')
console.log(allhaveprice)
//false
