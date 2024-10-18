//[SECTION] Syntax, Statement, and Comments
/*
	Statements
		- are instructions that will tell the computer to perform

		- JS statements usually end with semicolon(;)<optional>
			- semicolons are not required in javascript, but then again we will use it to help us train to locate where the statement ends
	
	Syntax
		- in programming, it is the set of rules that describes how statements must be constructed
*/
//Syntax: console.log("message");

console.log("hello");

//all lines/blocks of code should be written in a specific manner to work. This is due to how these codes were initially programmed to function and perform in a certain manner.

//Comments are parts of the code that gets ignored by the language and it is meant to describe the written code

/*
	Two types of comments
		- single linen somment denoted by two slashes (ctrl + /)
		- multi-line comment is denoted by slash and asterisk (ctrl + shift +/)
*/

/*
	[SECTION] Variables
		- it is used to contain data
	- declaring variable
		- tells our devices that a variable name is created and is ready to store data
*/
//Syntax: let/const variableName;
let myVariable //= "Faith";
console.log(myVariable); //returns undefined due to the lack of value for the container
// console.log is useful for printing values of variables or certain results of our code

/*
	Software Engineers should be:
		- attentive to detials
		- separation concern - magkakahiwalay ng folder, organized dapat
			*cascading: isa-isa yung pagrun ng program, should finish the first one made before running the next program.
*/


//Variable Initialization
//Syntax: let/const variableName;
let hello = "Asan na yung order?! Yung babycakes ko! Gutom na!";
console.log(hello);
//var hello = "babycakes"; // returns undefined because var surpasses/ignores the scope. a problem in js.
// let hello = "Asan na yung order?! Yung babycakes ko! Gutom na!"; - error

/*
	Guides in writing variables
		1. use the "let" keyword followed by the variable name of your choosking use the assignment operator (=) to assign value
		2. variable names should start with lowercase character, use camelCase for multiple words
			ex: camelCase (like firstName) is used in js
				snake_case is used in python
		3. fro constant variables use "const" keyword
		4. variable names should be indicative for descriptive of the value being stored to avoid confusion
*/

let productName = "Alcohol na BTS";
console.log(productName);

const pi = 3.1416;
console.log(pi);

//reassign variables vs initializing variables
//intializing vars
let supplier;
supplier = "Anik Anik ni Peyt";
console.log(supplier);

//reassigning vars
supplier = "Hindi na Anik Anik ni Peyt";
console.log(supplier);


//hoisting is js default behaviour of moving declarations to the top
//in terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting
a = 5;
console.log(a);
var a;

/*
	hoisting only works on "var"
	b = 5;
	console.log(a);
	let b;
*/

/*
	let/const local/global scope
	- scope
		- means these variables are available for use
	- let/const are block scope
		- block is a chunk of code bounded by {}. a block lives in curly braces. anything within the curly braaces is a block
*/

let outerVariable = "sensing";
{
	let innerVariable = "hello again";
}


console.log(outerVariable);
//console.log(innerVariable); - innervariable is not defined

let productPrice = "20000", productCode = "DC103";
console.log(productCode, productPrice); //doesn't matter what order it is initialized, nakadepend sa call

/*
	let productPrice = "20000", const productCode = "DC103";
	console.log(productCode, productPrice);

	error
*/

/*
	Data types
		- strings
			- are a series of characters that create a word, a phrase, a sentence or anything related to creating a text
			- 'single quotes' or "double quotes" string literals
*/

let country = "Japan";
let city = "Chiba";

//concatenation - to combine the strings to create a single string using the (+) symbol

let fullAddress = city + ", " + country
console.log(fullAddress);

let greetings = "I live at " + city;
console.log(greetings);

//use the escape character (\) in strings in combination with other characters that can produce different effects
// '\n' refers to creating a new line in between texts

let mailAddress = "Bahay ko po\n\nsa may tabi po ng Alfamart";
console.log(mailAddress);

//let message = "Babycakes, mukhang na-cancel order naten";
//console.log(message);
let message = 'Juno\'s Chair'; //putting a back slash para lang di malito
console.log(message);

//numbers - integers or whole numbers
let headCount = 34;
console.log(headCount);

let grade = 98.7;
console.log(grade);

//boolean values are normally used to store values relating to the state of certain things
let isMarried = false;
let inGoodConduct = true;
console.log("Is Jane married? ", + isMarried);
//template literal
console.log("Does Jane have good conduct? ${inGoodConduct}");