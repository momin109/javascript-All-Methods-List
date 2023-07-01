/**
 * 1. string
 * 2. datatype
 * 3. bollen
 * 4.
 */






// console.log('10 + 15=' + (10 + 15))
// console.log('10 - 15=' + (10 - 15))
// console.log('10 * 15=', (10 * 15))
// console.log('10 / 15=', (15 / 10))


/*
let a = 50
let b = 40
let c = a + b

console.log(a + "+" + b + "=" + c)
console.log(a + "-" + b + "=" + (a - b))
console.log(a + "*" + b + "=" + (a * b))
console.log(a + "/" + b + "=" + (a / b))

*/

/**
 *
 * //datatype
let x = 22
let y = "hellow world"
let z = true

let t
let h = null

console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(typeof t)
console.log(typeof h)
 *
 */



// Arithematic Operators
//console.log("Arithematic Operators");
/*
let a = 20, b = 10;
console.log(a + " + " + b + "=" + (a + b))
console.log(a + " - " + b + "=" + (a - b))
console.log(a + " * " + b + "=" + (a * b))
console.log(a + " / " + b + "=" + (a / b))
console.log(a + " % " + b + "=" + (a % b))

// Assignement Operators
console.log("Assignment Operators");
let aso = 10;  // 10
console.log("a = " + aso) //10
aso += 5;  // 10
console.log("a += " + aso) //15
aso -= 5;  // 10
console.log("a -= " + aso) //10
aso *= 5;  // 10
console.log("a *= " + aso) //50
aso /= 5;  // 10
console.log("a /= " + aso) //10
aso %= 4;  // 10
console.log("a %= " + aso) //2
*/

// Relation Operators


/*
let m = 10, n = 15, o = 10;
console.log(m + " > " + n + " = " + (m > n)); // m > n =false
console.log(m + " > " + n + " = " + (m < n))
console.log(m + " >= " + n + " = " + (m >= o))
console.log(m + " <= " + n + " = " + (m <= n))
console.log(m + " == " + n + " = " + (m == n))
console.log(m + " == " + n + " = " + (m == o))
console.log(m + " != " + n + " = " + (m != n))
console.log(m + " != " + n + " = " + (m != o))

*/



// Logical Operator


/**
 * let k = 50, l = 100;

let operation = (k > 220) && (l < 150)
// true && true = true
console.log("(k > 20) && (l < 150)=", operation)

operation = (k > 20) || (l < 150)
console.log("(k > 20) && (l < 150)=", operation)

console.log("Operation = " + "And Not Operation =" + !operation);
 */




/**
 * And Operation
 *
 * var1   var2   = Result
 * true   true   = true
 * false  true   = false
 * true   false  = false
 * false  false  = false
 *
 * * OR Operation
 *
 * var1   var2   = Result
 * true   true   = true
 * false  true   = true
 * true   false  = true
 * false  false  = false
 */

// == increment Decrement operator  ==

//post-increment operator
/**
 *
 * let x = 5;
let result = x++;
console.log("x =" + result)



//pre-increment operator

let y = 5;
let result2 = ++y;
console.log("y =" + result2)

//

let n = 5
let m = (10) + n++;
console.log(n)
console.log("m =" + m++)
console.log(m)
 */

// discrement operator


/**
 * let b = 5;
let bb = b--;

console.log(bb)

//

let g = 5
let h = (10) - g--;
console.log(g)
console.log("h =" + h--)
 */


// Operator Precedence

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

// const a = parseInt(lines[0]);
// const b = parseInt(lines[1]);

// const x = a + b
// console.log("x=" + x)


//========================
//=======condition========
//========================


// const myAge = 20
// const myBrotherAge = 30
// const whoIsElder = myAge > myBrotherAge
// console.log(whoIsElder)

// const myAge = 20
// const myBrotherAge = 20

// if (myAge > myBrotherAge) {
//     console.log('ami bari sobai boro vai')
// }
// else if (myAge < myBrotherAge) {
//     console.log('my brother amar boro')
// }
// else {
//     console.log('ami and amar vai same')
// }


// RESULT

// const input = 59

// if (input > 80) {
//     console.log('A+')
// }
// else if (input > 70) {
//     console.log("A")
// }
// else if (input > 60) {
//     console.log("A-")
// }
// else if (input > 50) {
//     console.log("B")
// }
// else if (input > 40) {
//     console.log("C")
// }
// else if (input > 33) {
//     console.log("D")
// }

// else {
//     console.log("f")
// }

//======================
//======switch==========
//======================

const day = 4

switch (day) {
    case 0:
        console.log('saturday')
        break;
    case 1:
        console.log('sunday')
        break;
    case 2:
        console.log('manday')
        break;
    case 3:
        console.log('tuesday')
        break;
    case 4:
        console.log('wednesday')
        break;
    case 5:
        console.log('thriday')
        break;
    case 6:
        console.log('friday')
        break;
    default:
        throw new Error('invalid  day')
}


//===for loop===

// for (let i = 1; i <= 50; i = i - 2) {

//     console.log(i)
// }

// let sum = 0;
// for (let i = 1; i < 10; i++) {
//     sum = i + sum
//     console.log('sum= ', sum, 'i = ', i, 'sum+i =', sum + i)
//     console.log(sum)
// }



//== while loop===


// while (true) {
//     console.log("hello world")
// }

// let i = 1
// while (i <= 100) {
//     console.log(i)
//     i++
// }

// let i = 1
// let sum = 0
// while (i <= 10) {
//     sum += i //sum = i + sum
//     i++
// }
// console.log(sum)


//==================
//===do while loop==
//==================

// const isloop = false // ata while loop
// while (isloop) {
//     console.log('this is loop never run')
// }

// do while loop

// const isLoop = false
// do {
//     console.log('this is run now')
// } while (isLoop)


//==================
//===for in loop==
//==================

// for in loop i hollo sobsomai index man return

// const gname = 'abdul Momin';

// for (let i in gname) {
//     console.log(gname[i])
// }


// const kname = 'Mehedi Hasan';

// for (let i2 of kname) {
//     console.log(i2)
// }
//for of loop i hollo sobsomai value man return

