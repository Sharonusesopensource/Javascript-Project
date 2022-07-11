
// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
@returns number the sum of the numbers */
 
// I started of by creating an array of numbers(comprising of positive, negative and neutral integers) in conformity with the instruction above.

let arrayOfNumbers = [ 20, 30, -20, 200, -300, -65, 0, 2, 12, -17, -520, 662, 1234, -999, 240, 34, 77, -78, -32, -21, 30,0]
// I declare my global variable.
let add = 0
//  I define my function by calling its keyword-function- and assign a descriptive name to it, giving it a parameter- the array of numbers to sum.
function sumOfNumbers(arrayOfNumbers) {
  // In this section of my function, I employed the use of the 'for' loop to iterate over the data in the array.
  for ( let s = 0; s < arrayOfNumbers.length; s++)
  // Above, I used the length property to iterate through the array numbers and below, I use that same property to sum up the elements.
  {add = add + arrayOfNumbers[s]};
  // Finally in this section, I print this result in my console.
  console.log(add)
}
// To conclude, I execute my function by calling its name with its appointed parameter.
sumOfNumbers(arrayOfNumbers)







/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
    return arrayOfNumbers.length;
}
// assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
// The first thing I did was to create an array of temperatures in celcius.
let celsiusTemps = [ 20, 14, 32, 12]
// My next step was to unpack the values of this array individually, using the destructuring assignment syntax. 
let [ c1, c2, c3, c4] = celsiusTemps
// Here, you can see me creating a function with the name required by the question and giving it parameters(the parameters here are the content of the array just with the names I assigned them after destructuring).
function celsiusToFahrenheit(c1, c2, c3, c4) {
  // Then, the math operation section following the conversion formula specified by Anne Marie Helmenstine, Ph.D., from the link provided in the question.
  let Fah1 = ( c1 * 9/5) + 32
  let Fah2 = ( c2 * 9/5) + 32
  let Fah3 = ( c3 * 9/5) + 32
  let Fah4 = ( c4 * 9/5) + 32
  // Above, I individually applied the conversion formula to each of the elements in the array.
  // I used the .toFixed method to round up the results to whole number units. 
  let fah1 = Fah1.toFixed()
  let fah2 = Fah2.toFixed()
  let fah3 = Fah3.toFixed()
  let fah4= Fah4.toFixed()
  // Below, I printed my result in the console alongside the unit for fahrenheit.
  
  console.log (fah1 + "°F" )
  console.log (fah2 + "°F"  )
  console.log (fah3 + "°F" )
  console.log (fah4 + "°F" )
  
  
}
// Finally, I execute the function.
celsiusToFahrenheit(c1, c2, c3, c4)

// The array of temperatures in Fahrenheit equivalent to the values in the array of temperatures in Celsius. 
let fahrenheitTemps = [celsiusToFahrenheit(c1, c2, c3, c4)]
// Displaying the content of my new array of temperatures in Fahrenheit.
fahrenheitTemps.toString()


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

