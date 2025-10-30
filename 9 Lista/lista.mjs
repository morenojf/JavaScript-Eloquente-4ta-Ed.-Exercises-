// Los objetos sirven para crear listas
// Las listas son un conujnto de objetos anidados donde un objeto hace referencia al otro

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: {
        value: 4,
        rest: null
      }
    }
  }
}

// inclusive podemos añadir objetos independientes que hacen referencia
// a la lista anterior y seguirian siendo parte de la lista

let addOn = {
  value: 0,
  rest: list
}

// 1. Escribe una función arrayToList que construya una estructura de lista como la mostrada
//	cuando se le da [1, 2, 3] como argumento

const arrayNum = [30]
let newList = {}

function arrayToList(array) {
  // Al empezar a crear el nuevo objeto, creaba los value a la inversa del array por lo que apliqué un array.reverse()
  array.reverse()

  // necesitaba el contador para añadir el null en la primera iteración
  // lo mismo se podía hacer con el index de un for común.
  let counter = 0

  for (let num of array) {
    counter == 0
      ? (newList = { value: num, rest: null })
      : (newList = { value: num, rest: newList })
    counter++
  }

  return newList
}

// 2. Escribe una función listToArray que produzca un array a partir de una lista
// entrada { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }

// ¿Como accedo a los valores?
// list.value
// list.rest.value

// ¿Que pasa si accedo a un valor que no existe?
// retorna un error

let newArray = []
function listToArray(list) {
  // Esto lo tome de las pistas del libro
  // basicamente lo que esta haciendo es con cada iteracion acceder mas adentro del objeto
  // hasta la iteración llega a nodo.rest = null
  // ahi la condicion nodo se hace false y termina el bucle

  for (let nodo = list; nodo; nodo = nodo.rest) {
    newArray.push(nodo.value)
  }

  return newArray
}

// 3. Agrega las funciones auxiliares prepend
// toma un elemento y una lista y crea una nueva lista que añade el elemento al principio de la lista de entrada

function prepend(element, list) {
  let addedList = { value: element, rest: list }
  return addedList
}

// 4. crear funcion nth, toma una lista y un número y devuelve el elemento en la posición dada en la lista
// (siendo cero el primer elemento) o undefined cuando no hay tal elemento

// posiciones:
// 0 = list.value
// 1 = list.rest.value
// ...

// Accedemos utilizando el mismo bucleo for solamente que esta vez le damos la cantidad de veces que se puede iterar
// si al iterarse una cantidad de veces mayor a las posibles donde la lista ya no existe (false)
// entonces retornará un undefined

function nth(list, position) {
  let selectedValue
  for (
    let index = 0, nodo = list;
    index <= position;
    index++, nodo = nodo.rest
  ) {
    if (nodo) {
      selectedValue = nodo.value
    } else {
      return undefined
    }
  }

  return selectedValue
}

// 5. Escribir una versión recursiva de nth (pendiente)

// al principio lo intente hacer asi pero esto no es recursion pura, dado que tiene una variable global
// coutner y obtained value

// let counter = 0
// let obtainedValue
// function nthRecursive(list, position) {

// 	console.log(Boolean(list))

//   if (list && counter <= position) {
//     counter++
//     let nodo = list.rest
//     obtainedValue = list.value
//     nthRecursive(nodo, position)
//   } 

//   return counter > position ? undefined : obtainedValue
// }

// IDEALMENTE cada llamada devuelve su resultado (recursión pura)
// codigo IA 

function nthRecursive(list, position) {
  if (!list) return undefined // si la lista no existe devuelve undefined
  if (position === 0) return list.value // cuando position sea === 0 entonces devuelve el list.value de la llamada en curso

  return nthRecursive(list.rest, position - 1) 
  // si no se cumplen las condiciones anteriores, se llama de nuevo a la funcion
  // pero restamos uno a position para aproximarlo a cero
}


// cuando le doy un numero que no existe en la lista, position se resta hasta que la lista no existe
// es decir !list = true 
// por lo que se retorna un undefined. 

console.log(nthRecursive(prepend(10, prepend(20, arrayToList(arrayNum))), 1))

// Realmente la ultima función seria la función definitiva (hablando de nth recursivo)