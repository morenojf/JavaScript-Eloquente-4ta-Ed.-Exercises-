// implementa every como una funcion que recibe un array y una función de predicado como parámetros
// escribe dos versiones, una usando un bucle y otra usando some

// la idea es validar que todos los numeros dentro del array sean menores a diez.
// recuerda, every valida que todos cumplan la condicion
// some valida que alguno cumpla la condicion

function everyBucle(array, test) {
  if (array.length <= 0) return false
  for (let number of array) {
    if (!test(number)) return false
  }

  return true
}

function everySome(array, test) {
	console.log(array.some(test))
}

console.log(everySome([1, 3, 5], (n) => n < 10))
// → true
console.log(everySome([2, 4, 16], (n) => n < 10))
// → false
console.log(everySome([], (n) => n < 10))
// → true
