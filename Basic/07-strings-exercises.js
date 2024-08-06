/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto

"hola " + "qué tal"

// 2. Muestra la longitud de una cadena de texto
console.log("".length)

// 3. Muestra el primer y último carácter de un string

word = "avión"

console.log(word[0],word[word.length-1])

// 4. Convierte a mayúsculas y minúsculas un string

word.toUpperCase()
word.toLowerCase()

// 5. Crea una cadena de texto en varias líneas

song = `lalala
lalal
lalal
ou ou ou`

// 6. Interpola el valor de una variable en un string

console.log(`¿es un ${word} ?`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

 question ="¿Cuántos espacios harán falta para escribir esto?"
 question = question.replaceAll(' ','-')
 
// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(question.includes(' '))

// 9. Comprueba si dos strings son iguales

console.log('hola' == 'hola')

// 10. Comprueba si dos strings tienen la misma longitud

console.log('asd'.length == 'asdf'.length)