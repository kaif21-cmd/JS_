# question
```jsx
const products = [
    { product: 'banana', price: 6 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '0' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '0' }
  ]
```
#  Print the price of each product using forEach
```
 products.forEach((product)=>{
    console.log(product.price)
 })
```
# 2 Print the product items as follows using forEach
```jsx
 products.forEach((items)=>{
    console.log(items.product)
 })
```
 # 3 Calculate the sum of all the prices using forEach
 ```jsx
 let totalprice=0
 products.forEach((products)=>{
    totalprice=totalprice+products.price
 })


// products.forEach((product) => {
//     totalPrice += product.price;
// });

// console.log('Total Price:', totalPrice);
```


 # 4 Create an array of prices using map and store it in a variable prices
 ```jsx
 const prices =products.map(product=>product.price)
 console.log(prices)
 [ 3, 6, '10 ', 8, 10, '11' ]
```

# 5 Filter products with prices
```jsx
 const kaif=products.filter(product=>product.price>5)
 console.log(kaif)
 
[
     { product: 'mango', price: 6 },
    { product: 'avocado', price: 8 },
     { product: 'coffee', price: 10 }   ]
```
  
# 6 Calculate the sum of all the prices using reduce only
```jsx
const allsum = products.reduce((accumulator, product) => accumulator + product.price, 0);

console.log('Total Sum of Prices:', allsum);
```
# 7 Find the first product which doesn't have a price value
```jsx
const productWithoutPrice = products.find(product => product.price === '0');
console.log(productWithoutPrice)
{ product: 'potato', price: '0' }
```
# 8 Find the index of the first product which does not have price value
```jsx
const productWithoutPrices=products.findIndex(product=>product.price==='0')
console.log(productWithoutPrices)
give the index 2
```
# 9 Check if some products do not have a price value
```jsx
const somearewithoutprice=products.some((product)=>product.price!=='0')
console.log(somearewithoutprice)
//true
```
# 10 Check if some products do not have a price value
```jsx
const allhaveprice=products.every(product=>product.price!=='0')
console.log(allhaveprice)
false
```
