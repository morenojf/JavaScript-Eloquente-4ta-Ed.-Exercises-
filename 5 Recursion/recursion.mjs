// Crear una funcion que determine si el numero dado es par o impar y que retorne un booleano
// Probar con  50 y 75
// Observas como se comporta con -1 (Repsuesta: se stackea la pila de llamadas)
// Buscar una solucion para -1 (pasar el valor a positivo entero antes de evaluar)

// par = true | impar = false

const isEven = (number) => {
  // Math.abs cambia el numero a un valor
  // positivo independientemente de ser negativo

  let positiveNumber = Math.abs(number)

  if (positiveNumber === 0) {
    return true
  } else if (positiveNumber === 1) {
    return false
  } else {
    return isEven(positiveNumber - 2)
  }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
