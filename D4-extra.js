/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR CODE HERE */
let a = [1,3,5]
a.sort(function(a, b){return b-a});
console.log('Ex 1:', a)

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/
let max= Math.max.apply(Math,a)
console.log('Ex 2:', max)

//another way
let maxArray = [1, 2, 10, 20, 50, 0, 5, 2]
// take the first element
let maxValue = maxArray[0]
for (let i = 1; i < maxArray.length; i++) {
    if (maxArray[i] > maxValue)
        maxValue = maxArray[i]
}
console.log("The maximum is: ", maxValue)

/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/
let minArray= Math.min.apply(Math,a)
console.log('Ex 3 The minimum value is:',minArray)


/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

/* WRITE YOUR CODE HERE */
let evenNumbers = [1, 5, 2, 3, "cat", "whatever", {name: "Test"}]
let evenNum = []
for (let i = 0; i < evenNumbers.length; i++) {
    if (typeof evenNumbers[i] === "number" && evenNumbers[i] % 2 === 0)
    evenNum.push(evenNumbers[i])
}
console.log("Ex 4: Only Even Numerical", evenNum)

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

/* WRITE YOUR CODE HERE */
let ex5newArray=[1,2,3,5,4,6,9,7,8]
let oddNum = []
for (let i = 0; i < ex5newArray.length; i++) {
    if (typeof ex5newArray[i] === "number" && ex5newArray[i] % 2 === 0){

    }else{
        oddNum.push(ex5newArray[i])
    }
    
}
console.log("Ex 5: Delete Even entries", oddNum)


/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

/* WRITE YOUR CODE HERE */
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

//another way using switch case
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

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/
/* WRITE YOUR CODE HERE */
let toBeIncreased = [ 1, 5, 10,"cat", "bob", true, 10]
for (let i = 0; i < toBeIncreased.length; i++) {
    if (typeof toBeIncreased[i] === "number")
        toBeIncreased[i]++
}
console.log('Ex7: increased all numeric values',toBeIncreased)

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/
    
/* WRITE YOUR CODE HERE */
let ex8array=["strive", "is", "great"]
let ex8lengtharr=[]
for (let i = 0; i < ex8array.length; i++) {
    let l=ex8array[i].length
    ex8lengtharr.push(l)
}
console.log('Ex8: string array to their length',ex8lengtharr)


/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/