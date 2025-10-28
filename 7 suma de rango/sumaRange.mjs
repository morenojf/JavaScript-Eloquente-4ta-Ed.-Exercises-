/* 1. Escribe una función range que tome dos argumentos, inicio y fin, y devuelva un array que contenga todos los números desde inicio hasta fin, incluyendo fin. */

let numIni = 10
let numFin = 1
let paso = -2
let numArray = []

function range(numIni, numFin, paso) {
  if (!paso) {
    for (let index = numIni; index <= numFin; index++) {
      numArray.push(index)
    }
  } else if (paso < 0) {
    for (let index = numIni; index >= numFin; index += paso) {
		numArray.push(index)
    }
  } else {
    for (let index = numIni; index <= numFin; index += paso) {
      numArray.push(index)
    }
  }

  return numArray
}

// 2. Escribe una función sum que tome un array de números y devuelva la suma de estos número

function sum(arrayNum) {
  let sumaNum = 0
  for (let numero of arrayNum) {
    sumaNum += numero
  }

  return sumaNum
}

// 3. Modifica tu función range para que tome un tercer argumento opcional que indique el valor de “paso” utilizado al construir el array.

console.log(range(numIni, numFin, paso))

/* 
	a) Si no se proporciona un paso, los elementos deberían aumentar en incrementos de uno, correspondiendo al comportamiento anterior. 
	b) La llamada a la función range(1, 10, 2) debería devolver [1, 3, 5, 7, 9]. 
	c) Asegúrate de que esto también funcione con valores de paso negativos, de modo que range (5, 2, -1) produzca [5, 4, 3, 2]. 
*/
