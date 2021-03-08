// Array em Javascript

//array.prototype.concat()

var letraqs = ['a','b','c']
var num = ['1,2,3,4']

var letrasenum = letras.concat(num)
console.log(letrasenum) // [a,b,c,1,2,3,4]

/*------------------------------------*/

//array.prototype.filter()

function isBig(value) {
	return value >= 10;
}

var filtered = [12,5,8,130,44].filter(isBig)
console.log(isBig) // print = [12,130,44]

/*------------------------------------*/

// array.prototype.find()

const array = [10,13,2,3,4,20]
const found = array.find(element => element > 10)

console.log(found)

/*------------------------------------*/


// Array.prototype.flatmap()

var arr1 = [1, 2, 3, 4]
arr1.flatMap(x => [x * 2]) // [2, 4, 6, 8]

// Array.prototype.forEach

function logArrayElements(element, index, array) {
    console.log("b[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements); 

// a[0] = 2, a[1] = 5, a[2] = 9


/*------------------------------------*/

// Array.prototype.include

[1, 2, 3].includes(2); // true, o 2 está incluído no array

 /*------------------------------------*/

 // Array.prototype.map()

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots = [1, 2, 3] tirou a raiz

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
	return num * 2
}) 

console.log(doubles)// doubles = [2, 8, 18]


/*------------------------------------*/


// Array.prototype.reduce

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

/*------------------------------------*/

// Array.prototype.shift()

const array = [1, 2, 3]
const firstElement = array1.shift()
console.log(array1) // 1 
console.log(firstElement) // [2, 3]

/*------------------------------------*/

