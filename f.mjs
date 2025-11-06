const objeto = {
  numeros: [1, 2, 3, 4, 5, 6, 7, 8],
  letras: ['a', 'b', 'c', 'd']
}

console.log(Object.keys(objeto))

// FUNCIONES RECURSIVAS:

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

// ABSTRACCIÓN:

// Las abstracciones nos brindan la capacidad de hablar sobre problemas
// a un nivel superior (o más abstracto), sin distraernos con detalles no interesantes.
// como analogia una receta que diga "Córtalo en trozos con un cuchillo"
// si lo abstraemos puede ser solo "Picar"

let etiquetas = []

// Define una funcion repetir que recibe la cantidad de veces que se repite una acción
// recibe dos parametros (cantidad, accion)
function repetir(n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

// llama a la funcion repetir
// le pasa la cantidad de veces que va a repetir
// le pasa la accion que va a repetir
// en este caso la accion puede ser una funcion predefinida
// o puede ser una funcion definida en el mismo parametro
// como es el caso de abajo
repetir(5, (i) => {
  etiquetas.push(`Unidad ${i + 1}`)
})
console.log(etiquetas)

// FUNCIONES DE ORDEN SUPERIOR

// Son funciones que trabajan dentro de otras funciones ya sea tomandolas como argumentos o devolviendolas
// Pueden ser:
// 1.- Funciones que crean otras funciones

function a() {
  return (b) => {
    'hace algo...'
  }
}

// 2.- Funciones que modifican otras funciones

function ruidosa(funcion) {
  return (...args) => {
    console.log('llamando con', args)
    let resultado = funcion(...args)
    console.log('llamado con', args, ', devolvió', resultado)
    return resultado
  }
}

// el primer parentesis tiene el parametro de la primera funcion y
// el segundo parentesis tiene el parametro de la segunda funcion
ruidosa(Math.max)(3, 2, 1)

// 3.- Funciones que proveen nuevos tipos de flujo de control
// si no se cumple la condicion, no se ejecuta, pero si se cumple entonces si

function aMenosQue(prueba, entonces) {
  if (!prueba) entonces()
}

// esta funcion trabaja en conjunto con la funcion repetir donde n vendria siendo el numero que le pasa repetir
// y por la cantidad de veces que se repite ese numero aumenta
// la condicion es que, a menos que el número de la repeticion actual sea par, entonces no lo imprimas en consola
// solo va a imprimir los numeros que sean pares segun la cantidad de repeticiones
// sin incluir (osea que es excluyente) el numero de la ultima repeticion
repetir(6, (n) => {
  aMenosQue(n % 2 == 1, () => {
    console.log(n, 'es par')
  })
})

let matrizObj = [
  {
    key1: "value1"
  },
  {
    key2: "value2"
  },
  {
    key3: "value3"
  },
  {
    key4: "value4"
  }
]


// Prueba de some

console.log(matrizObj.some(obj => Object.values(obj).includes("value1")))