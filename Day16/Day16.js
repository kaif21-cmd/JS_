//For Each Methord In js 
//We use forEach when we like to iterate through an array of items. The forEach is a higher-order function and it takes call-back as a parameter. The forEach method is used only with array and we use forEach
//[ 'FINLAND', 'ESTONIA', 'SWEDEN', 'NORWAY' ]
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
countries.forEach((country,i)=>{
    console.log(i,country.toUpperCase())
})
//0 FINLAND
// 1 ESTONIA
// 2 SWEDEN
// 3 NORWAY
 
const number=[1,2,3,4,5]
let sum=0
number.forEach((n)=>{
    sum=sum+n
})

console.log(sum)//15

//2 Map methord
//We use the map method whenever we like to modify an array. We use the map method only with arrays and it always returns an array
const country=['Finland', 'Estonia', 'Sweden', 'Norway']
const New=country.map(n=>n.toUpperCase())
console.log(New)
//[ 'FINLAND', 'ESTONIA', 'SWEDEN', 'NORWAY' ]

//3 As you can see that map is very handy to modify an array and to get an array back. Now, let us create an array of the length of the countries from the countries array.
const contries = ['Finland', 'Estonia', 'Sweden', 'Norway']
const contriesLength = countries.map(contry => contry.length)

console.log(contriesLength) // [7, 7, 6, 6]

const numberss = [1, 2, 3, 4, 5]
const squares = numberss.map(n => n ** 2)

console.log(squares) 
// [1, 4, 9, 16, 25]

//As you may understand from the literal meaning of filter, it filters out items based on some criteria. The filter method like forEach and map is used with an array and it returns an array of the filtered items.
const kaifcountries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countriesWithLand = kaifcountries.filter(n=>!n.includes('land'))
console.log(countriesWithLand) 
// ["Estonia", "Sweden", "Norway"]
const countriesWithLands = kaifcountries.filter(n=>n.includes('land'))
// finland iceland 

//5
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = numbers.filter(n => n % 2 === 0)
const odds = numbers.filter(n => n % 2 !== 0)
console.log(evens) // [0, 2, 4, 6, 8, 10]
console.log(odds) // [1, 3, 5, 7, 9]