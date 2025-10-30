const objeto = {
	numeros: [1, 2, 3, 4, 5, 6, 7, 8],
	letras: ['a', 'b', 'c', 'd']
}

console.log(Object.keys(objeto))

// es importante recordar que, para las funciones recursivas puras: 
// la funcion produce (retorna) sus propios resultados en base a cada llamada sin depender de variables exteriores
// los parametros que se le ven entregados a la funcion son modificados en cada llamada

// ej

function nthRecursive(list, position) {
  if (!list) return undefined // si la lista no existe devuelve undefined
  if (position === 0) return list.value // cuando position sea === 0 entonces devuelve el list.value de la llamada en curso

  return nthRecursive(list.rest, position - 1) 
  // si no se cumplen las condiciones anteriores, se llama de nuevo a la funcion
  // pero restamos uno a position para aproximarlo a cero
}