/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
a = 5
b = 10
suma = a + b
resta = a - b
division = a / b
multiplicacion = a * b
modulo = a % b
exponente = a ** b
console.log(modulo)
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
asigSum = 1
asigSum += suma
asigRest = 1
asigRest -= resta
asigDivi = 1
asigDivi /= division
asigMult = 1
asigMult *= multiplicacion
asigMod = 10
asigMod %= modulo
asigExp = 1
asigExp **= exponente

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(1<3,3>1,2==2,2<=2,2<=3)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(1>3,3<1,2!=2,2<2,2>=3)

// 5. Utiliza el operador lógico and

7 < 2 && 3 < 5

// 6. Utiliza el operador lógico or

7 < 2 || 3 < 5

// 7. Combina ambos operadores lógicos
operation = 7 < 2 && 3 > 5 || 7 > 2 && 3 < 5

// 8. Añade alguna negación
!operation

// 9. Utiliza el operador ternario
operation ? console.log("Verdad") : console.log("Falso")

// 10. Combina operadores aritméticos, de comparación y lógicos
2 + 5 > 1 + 3 && 3 == 3 * 1