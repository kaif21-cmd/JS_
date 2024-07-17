 # For Each Methord In js 
We use forEach when we like to iterate through an array of items. The forEach is a higher-order function and it takes call-back as a parameter. The forEach method is used only with array and we use forEach

```jsx
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
countries.forEach((country,i)=>{
    console.log(i,country.toUpperCase())
})
//0 FINLAND
// 1 ESTONIA
// 2 SWEDEN
// 3 NORWAY
```

# 2
 ```jsx
const number=[1,2,3,4,5]
let sum=0
number.forEach((n)=>{
    sum=sum+n
})

console.log(sum)//15
```

#  Map methord
We use the map method whenever we like to modify an array. We use the map method only with arrays and it always returns an array
```jsx
const country=['Finland', 'Estonia', 'Sweden', 'Norway']
const New=country.map(n=>n.toUpperCase())
console.log(New)
//[ 'FINLAND', 'ESTONIA', 'SWEDEN', 'NORWAY' ]
```


#3
As you can see that map is very handy to modify an array and to get an array back. Now, let us create an array of the length of the countries from the countries array.
```jsx
const contries = ['Finland', 'Estonia', 'Sweden', 'Norway']

const contriesLength = countries.map(contry => contry.length)

console.log(contriesLength) // [7, 7, 6, 6]

const numberss = [1, 2, 3, 4, 5]
const squares = numberss.map(n => n ** 2)

console.log(squares) 
// [1, 4, 9, 16, 25]
```
# filter methord 
As you may understand from the literal meaning of filter, it filters out items based on some criteria. The filter method like forEach and map is used with an array and it returns an array of the filtered items.
```jsx
const kaifcountries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countriesWithLand = kaifcountries.filter(n=>!n.includes('land'))
console.log(countriesWithLand) 
// ["Estonia", "Sweden", "Norway"]
const countriesWithLands = kaifcountries.filter(n=>n.includes('land'))
// finland iceland 
```
```jsx
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = numbers.filter(n => n % 2 === 0)
const odds = numbers.filter(n => n % 2 !== 0)
console.log(evens) // [0, 2, 4, 6, 8, 10]
console.log(odds) // [1, 3, 5, 7, 9]
```
# Reduce Methord
Like forEach, map, and filter, reduce is also used with an array and it returns a single value. You can associate reduce with a blender
The default initial value is 0. We can change the initial value if we want to change it.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```jsx
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce((acc, cur) => acc + cur)
console.log(sum) // 55
const numberss = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sums = numberss.reduce((acc, cur) => acc + cur, 5)
console.log(sums) // 60
```
```jsx
Let us concatenate strings using reduce
const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => acc + ' '+  cur)
console.log(helloWorld) // "Hello world !"
```
```jsx
const numbers = [1, 2, 3, 4, 5]
const value = numbers.reduce((acc, cur) => acc * cur)
console.log(value) // 120

```
```jsx
const numbers = [1, 2, 3, 4, 5]
const value = numbers.reduce((acc, cur) => acc * cur, 10)
console.log(value) // 1200
```

# Find Methord
If we are interested in the first occurrence of a certain item or element in an array we can use find method. Unlike map and filter,
agar hma filter map methord use krenge to first occurence nmi milega 
```jsx
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenNum = numbers.find((n) => n % 2 === 0)
const firstOddNum = numbers.find((n) => n % 2 !== 0)
console.log(firstEvenNum)  // 0
console.log(firstOddNum)
```
 # Let us find the first country which has only six characters
```jsx
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const sixCharsCountry = countries.find((country) => country.length === 6)
console.log(sixCharsCountry)
// Sweden
```

# Let us find the first country in the array which has the letter 'o'
```jsx

const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const index = countries.find((country) => country.includes('o'))
console.log(index )

```
# FindIndex Methord

The findIndex method works like find but findIndex returns the index of the item. If we are interested in the index of a certain item or element in an array we can use findIndex. The findIndex return the index of the first occurrence of an item
```jsx
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenIndex = numbers.findIndex((n) => n % 2 === 0)
const firstOddIndex = numbers.findIndex((n) => n % 2 !== 0)
console.log(firstEvenIndex)  // 0
console.log(firstOddIndex)   // 1
```
```jsx
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const index = countries.findIndex((country) => country.length === 6)
console.log(index) //2
```

