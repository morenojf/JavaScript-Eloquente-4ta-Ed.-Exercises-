// Escribe dos funciones: reverseArray y reverseArrayInPlace

let numArray = [1, 2, 3, 4, 5]
console.log('Original array', numArray)

// 1. reverseArray: Tomar un array como argumento y producir un nuevo array que tenga los mismos elementos en orden inverso

function reverseArray(array) {
  let inverseArray = []
  for (let num of array) {
    inverseArray.unshift(num)
  }

  return inverseArray
}

console.log('reverseArray', reverseArray(numArray))

// 2. reverseArrayInPlace: Modificar el array dado como argumento invirtiendo sus elemento

// NO entiendo para que querrias cambiar la función a algo mas complicado si con una función obtienes exactamente el mismo resultado. 
// SOLUCIÓN DEL LIBRO: 
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log('reverseArrayInPlace', reverseArrayInPlace(numArray))

// Nota: Ninguna de las funciones puede utilizar el método reverse estándar.
