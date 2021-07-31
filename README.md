# JavaScript Homework 3 - Object, Array and Loops


### EXERCISE 1
Create an array containing the first 5 positive numbers.
```
let exercise1= [2,3,6,1,8]
console.log(exercise1)
```

### EXERCISE 2
Create an object containing your name, surname, email address and age.
```
let person={
    name:"Muslim Uddin",
    surname:"Arju",
    email:"muslimuddinarju@gmail.com",
    age: 25
}
console.log(person)
```

### EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.

```
person.hasDrivingLicence = false
console.log(person)
```

###  EXERCISE 4
Remove from the previously created object the age property.

```
delete person.age
console.log(person)
```

### EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different 
email address than the previous one.

```
let secondPerson={
    name: "John",
    surname: "Doe",
    email: "john@gmail.com"
}
let verify= (person.email == secondPerson.email) ? "Email address is same :) ": "Email address is not same!"
console.log(verify)
```


###  EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount
spent by the current user. Currently you have a promotion: if the customer's shopping cart total is more than
50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.

```
let totalShoppingCart=44
if(totalShoppingCart>50){
    
}else{
    totalShoppingCart +=10
}
console.log("Ex 6: Total shopping amount:", totalShoppingCart)
```

### EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end 
of the purchase. Modify the previous answer inserting this information and, applying the same rules for the
shipping cost, calculate the totalCost.

```
let discount= (totalShoppingCart * 20) / 100
if(totalShoppingCart>50){
    totalShoppingCart = totalShoppingCart - discount
}else{
    totalShoppingCart +=10
    totalShoppingCart = totalShoppingCart - discount
}
console.log("Ex 7: Total shopping amount:", totalShoppingCart)
```


###  EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car 
without affecting the original one.

```
let car={
    brand: "BMW",
    model: "A2016",
    licensePlate: "XYZ123"
}
let car2 = {
    ...car,
    licensePlate: "ABC123"
}
let car3 = {
    ...car,
    licensePlate: "KLG544"
}
let car4= {
    ...car,
    licensePlate: "HJAS21"
}
let car5= {
    ...car,
    licensePlate: "RWE123"
}
```


###  EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.

```
let carsForRent=[car,car2,car3,car4,car5]
```

###  EXERCISE 10
Remove the first and the last car from the carsForRent array.

```
carsForRent.shift()
console.log("ex 10:", carsForRent)
carsForRent.pop()
console.log("ex 10:", carsForRent)
```

### EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.

```
let Cartype= car.brand + " " + car.model + " " + car.licensePlate
console.log("ex 11:", Cartype)
```


### EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.

```
let carsForSale =[car2,car3,car4]
let totalCars = carsForRent.length + carsForSale.length
console.log("ex 12:", totalCars)
```


### EXERCISE 13
Print in the console the data from each car in the carsForSale array.
```
console.log(carsForSale)
```

## Extra Exercises
### EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
```
let a = [1,3,5]
a.sort(function(a, b){return b-a});
console.log('Ex 1:', a)
```

### EXERCISE 2
Write the code to get the maximum value in an array.
```
let max= Math.max.apply(Math,a)
console.log('Ex 2:', max)
```
Another way:
```
let maxArray = [1, 2, 10, 20, 50, 0, 5, 2]
// take the first element
let maxValue = maxArray[0]
for (let i = 1; i < maxArray.length; i++) {
    if (maxArray[i] > maxValue)
        maxValue = maxArray[i]
}
console.log("The maximum is: ", maxValue)
```

### EXERCISE 3
Write the code to get the minimum value in an array.
```
let minArray= Math.min.apply(Math,a)
console.log('Ex 3 The minimum value is:',minArray)
```

### EXERCISE 4
Write the code to get only even numerical values in an array.
```
let evenNumbers = [1, 5, 2, 3, "cat", "whatever", {name: "Test"}]
let evenNum = []
for (let i = 0; i < evenNumbers.length; i++) {
    if (typeof evenNumbers[i] === "number" && evenNumbers[i] % 2 === 0)
    evenNum.push(evenNumbers[i])
}
console.log("Ex 4: Only Even Numerical", evenNum)
```

### EXERCISE 5
Write the code to delete even entries from an array.

```
let ex5newArray=[1,2,3,5,4,6,9,7,8]
let oddNum = []
for (let i = 0; i < ex5newArray.length; i++) {
    if (typeof ex5newArray[i] === "number" && ex5newArray[i] % 2 === 0){

    }else{
        oddNum.push(ex5newArray[i])
    }
    
}
console.log("Ex 5: Delete Even entries", oddNum)
```

### EXERCISE 6
Write the code to remove all the vowels from a string.
```
let ex6string= "Strive School"
let eachlatter= ex6string.split('')
let newstring=""
eachlatter.forEach(latter => {
    if(latter==="a" || latter==="e" || latter==="i" || latter==="o" || latter==="u"){
        newstring +=""
    }else{
        newstring +=latter
    }
});
console.log("Ex 6: removed all vowels",newstring)
```
Another way using switch case
```
let str = "Strive School"
let result = ""
for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
        case "a":
        case "e":
        case "i":
        case "u":
        case "o":
            break;
        default:
            result += str[i]
    }
}
```

### EXERCISE 7
Write the code to increase all the numeric values in a array by 1.

```
let toBeIncreased = [ 1, 5, 10,"cat", "bob", true, 10]
for (let i = 0; i < toBeIncreased.length; i++) {
    if (typeof toBeIncreased[i] === "number")
        toBeIncreased[i]++
}
console.log('Ex7: increased all numeric values',toBeIncreased)
```

### EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
```
let ex8array=["strive", "is", "great"]
let ex8lengtharr=[]
for (let i = 0; i < ex8array.length; i++) {
    let l=ex8array[i].length
    ex8lengtharr.push(l)
}
console.log('Ex8: string array to their length',ex8lengtharr)
```
