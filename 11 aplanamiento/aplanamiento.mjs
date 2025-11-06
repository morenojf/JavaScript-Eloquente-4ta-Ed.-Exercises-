// Utiliza el método reduce en combinación con el método concat para “aplanar”
// un array de arrays en un único array que contenga todos los elementos de los arrays originales.

let arrays = [[1, 2, 3], [4, 5], [6]]


// a es el array previo [1, 2, 3]
// b es el array siguiente [4, 5] y luego [6]


console.log(arrays.reduce((a, b) => a.concat(b)))
// explicacion: al pasarle un array de arrays, la funcion reduce toma los arrays dentro del array como argumento completo
// es decir [1, 2, 3] primer argumento, [4, 5] segundo argumento, [6] tercer argumento. 
// de modo que, basta con decirle que, concatene lo que ya tiene a con lo que encuentra b
// por ende las iteraciones quedan de la siguiente forma: 

// 1era: [1, 2, 3]
// 2da: [1, 2, 3, 4, 5]
// 3era: [1, 2, 3, 4, 5, 6 ]