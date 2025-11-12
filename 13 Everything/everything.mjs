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
  if (array.length <= 0) return false
  // alguno de los que esta aqui cumple esta condicion? (verdadero, al menos uno si cumple esta condicion)
  // alguno de los que esta aqui ! no cumple esta condicion? (falso, hay al menos uno que si lo cumple)
  // esta funcion la hizo AI. 
  return !array.some((x) => !test(x))
}

console.log(everySome([1, 3, 5], (n) => n < 10))
// → true
console.log(everySome([2, 4, 16], (n) => n < 10))
// → false
console.log(everySome([], (n) => n < 10))
// → true

//el ultimo deberia regresar un true pero añadi una validacion para que si estuviera vacio regresara false porque 
// me genera conflicto un array vacio que retorna true
