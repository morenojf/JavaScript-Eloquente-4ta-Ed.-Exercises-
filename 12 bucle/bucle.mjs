// Escribe una funcion de orden superior llamada loop
// similar a for loop
// Recibe un valor, una funcion de prueba, una función de actualización y una funcion de cuerpo
// En cada iteracion:
// primero ejecutar la funcion de prueba en el valor actual del bucle y detenerse si devuelve falso
// segundo llamar a la funcion de cuerpo, dandole el valor actual
// tercero llamar a la funcion de actualizacion para crear un nuevo valor y empezar de nuevo desde el principio

// -- Código --
function loop(value, test, update, action) {
  if (!test(value)) {
    return
  } else {
    action(value)
  }
  loop(update(value), test, update, action)
}

// -- Llamada --
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
)

// parametro 1: 3 (valor)
// parametro 2: funcion de prueba n > 0
// parametro 3: funcion de actualización
// parametro 4: funcion de cuerpo (acción)

// -- Salida --
// → 3
// → 2
// → 1
