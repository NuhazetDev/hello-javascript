/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea

// console.log("¡Hola, JavaScript!")

// 2. Escribe un comentario en varias líneas

/*
console.log("¡Hola, JavaScript!")
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let number = 5
let string = "Hola"
let isBoolean = true
let undefined
let myNull = null
let mySymbol = Symbol("Hola")
let myBigInt = BigInt(4789274827423894732847238742874278493278432847238974238)

// 4. Imprime por consola el valor de todas las variables
console.log(number,string,isBoolean,undefined,myNull,mySymbol,myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof number,typeof string, typeof isBoolean, typeof undefined, typeof myNull, typeof mySymbol, typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

number = 10.4
string = '123'
isBoolean = false
mySymbol = Symbol(123)
myBigInt = 123123123131n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
number = "a"
string = 123
isBoolean = 0
mySymbol = "Not a symbol"
myBigInt = 42.12

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const st = number
const numb = string
const bo = true
const symb = Symbol("A symbol")
const undef = undefined
const nl = null
const bigi = 18739123n

// 9. A continuación, modifica los valores de las constantes
/*st = "gasdf"
numb = 412
bo = false
symb = Symbol("other symbol")
undef = "not undef"
nl = "not null"
bigi = 432
*/
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser
