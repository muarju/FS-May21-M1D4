/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

/* WRITE YOUR CODE HERE */
let exercise1= [2,3,6,1,8]
console.log(exercise1)

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
let person={
    name:"Muslim Uddin",
    surname:"Arju",
    email:"muslimuddinarju@gmail.com",
    age: 25
}
console.log(person)

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR CODE HERE */
person.hasDrivingLicence = false
console.log(person)

/* EXERCISE 4
Remove from the previously created object the age property.
*/
delete person.age
console.log(person)
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different 
email address than the previous one.
*/

/* WRITE YOUR CODE HERE */
let secondPerson={
    name: "John",
    surname: "Doe",
    email: "john@gmail.com"
}
let verify= (person.email == secondPerson.email) ? "Email address is same :) ": "Email address is not same!"
console.log(verify)

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount
spent by the current user. Currently you have a promotion: if the customer's shopping cart total is more than
50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCart=44
if(totalShoppingCart>50){
    
}else{
    totalShoppingCart +=10
}
console.log("Ex 6: Total shopping amount:", totalShoppingCart)

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end 
of the purchase. Modify the previous answer inserting this information and, applying the same rules for the
shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */
let discount= (totalShoppingCart * 20) / 100
//let discount2 = totalShoppingCart * 0.2
if(totalShoppingCart>50){
    totalShoppingCart = totalShoppingCart - discount
}else{
    totalShoppingCart +=10
    totalShoppingCart = totalShoppingCart - discount
}
console.log("Ex 7: Total shopping amount:", totalShoppingCart)


/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car 
without affecting the original one.
*/

/* WRITE YOUR CODE HERE */
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

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */
let carsForRent=[car,car2,car3,car4,car5]
/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
carsForRent.shift()
console.log("ex 10:", carsForRent)
carsForRent.pop()
console.log("ex 10:", carsForRent)
/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

/* WRITE YOUR CODE HERE */
let Cartype= car.brand + " " + car.model + " " + car.licensePlate
console.log("ex 11:", Cartype)
/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */
let carsForSale =[car2,car3,car4]
let totalCars = carsForRent.length + carsForSale.length
console.log("ex 12:", totalCars)
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */
console.log(carsForSale)
/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
