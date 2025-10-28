/* Escribe una función contarBs que tome una cadena como único argumento y devuelva un número que indique cuántos caracteres B en mayúscula hay en la cadena.

A continuación, escribe una función llamada contarCaracter que se comporte como contarBs, excepto que toma un segundo argumento 
que indica el carácter que se va a contar (en lugar de contar solo caracteres B en mayúscula). Reescribe contarBs para hacer uso de esta nueva función. */

// 1 Hacer que una cadena me devuelva un caracter

let caracter =  "cadena" // --> posiciones van desde el 0 al 1
console.log("Longitud de la palabra cadena", caracter.length - 1)

// 2 funcion Cortas Bs, toma una cadena como argumento y devuelve un numero que indica cuantos caracteres B en mayúsculas hay en la cadena.

const cortarBs = (chain) => {
  let bCounter = 0

  for (let index = 0; index < chain.length - 1; index++) {
    if (chain[index] === 'B') {
      bCounter++
    }
  }

  return bCounter
}

console.log("Contador de B mayuscula en la palabra Bamonos", cortarBs('Bamonos'))

// 3 funcion cortarCaracter similar a cortarBs, toma dos argumentos, la cadena y el caracter que se va a contar

const contarCaracter = (chain, letter) => {
  let bCounter = 0

  for (let index = 0; index <= chain.length - 1; index++) {
    if (chain[index] === letter) {
      bCounter++
    }
  }

  return bCounter
}

console.log("Contador de letra especificada 'C' en la cadena CCC", contarCaracter("CCC", "C"))