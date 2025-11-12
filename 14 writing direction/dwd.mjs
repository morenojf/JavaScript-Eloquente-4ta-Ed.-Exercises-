// Escribir funcion para calcular la direccion de escritura dominante de una cadena de texto
// Recuerda: cada objeto Script tiene una propiedad direction (ltr, rtl, ttb)

// la idea es pasar a la funcion una cadena de texto completa ej "Hey, مساء الخير",
// y que la funcion logre identifica de todo el texto que es lo que domina, si ltr - rtl - o ttb

import { scripts } from './scripts.mjs'
const SCRIPTS = scripts
// divide y conquistaras

// 1 identificar a que script pertenece la cadena de texto
// para ello es necesario entender como cada caracter se ve reflejado en los rangos

// 1.1 recorrer cada caracter
// 2.2 Determinar a que script pertenece cada caracter de una cadena de texto y representarlo en porcentajes

// 2. calcular que cadena tiene mas caracteres del mismo grupo

// 3. De la cadena que tenga mayor caracteres del mismo grupo definir si es ltr, rtl o ttb

function dominantDirection(text) {
	
	// Usamos las funciones del libro para obtener todos los scripts involucrados en el parametro de texto
	// ademas de cuantos caracteres se involucran por script
	let scripts = textScripts(text)

	// cuando ya tenemos el array de objetos con los scripts involucrados y sus caracteres
	// determinamos cual de todos es el dominante
	// es decir, cual script tiene mas caracteres involucrados en la cadena de texto
    let domain = scripts.reduce((max, s) => (max.count >= s.count ? max : s))


	// posterior a ello hacemos una busqueda en la base de datos
	// para determinar el writing direction de dicho script
	let wrtDirection = SCRIPTS.find(s => s.name == domain.name)
	return wrtDirection.direction

}

console.log(dominantDirection("Hello!"))

// la siguiente funcion, dado un numero cualquier (codigo) determina a que Script pertenece dicho numero(codigo)
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to
      })
    ) {
      return script
    }
  }
  return null
}

function countBy(items, groupName) {
  // items son el array de numeros
  // grupoName es una funcion que dice que retorna un boolean si se cumple su condicion

  let counts = []
  // counts es el nuevo array de objetos que se llenará con los resultados del retorno de la funcion groupName

  for (let item of items) {
    // iteramos el array de numeros

    let name = groupName(item)
    // name guarda en su variable el resultado boolean (False/ True) de la funcion groupName n > 2
    // si item es menor o igual a dos entonces name = false
    // si item es mayor a dos entonces name = true

    let known = counts.find((c) => c.name == name)
    // Known itera sobre el array de objetos que estamos creando counts
    // en la primera iteracion es undefined
    // luego, en know almacena el par llave valor
    // {name: value, count: value}
    // donde el nombre actual de la iteracion, sea igual al nombre encontrado en counts

    // basicamente, esto lo que hace es, organizar en que grupo se suma al contador,
    // en el grupo true p en el grupo false

    if (!known) {
      // si known es false (es decir undefined en la primera iteracion)
      counts.push({ name, count: 1 })
      // añades al array el primer objeto con el nombre de grupo actual e inicializas la llave count en 1
    } else {
      // Si known SI Existe (no es undefined)
      // al objeto seleccionado
      // {name: true o false, count: value}
      // le sumas uno a la llave count
      known.count++
    }
  }
  return counts
}

// La siguiente funcion, utiliza a la funcion countBy y characterScript para determinar
// a que script pertenece cada character

function textScripts(text) {
  // La funcion recibe  la cadena de texto

  let scripts = countBy(text, (char) => {
    // se crea una variable que contiene un objeto
    // {name: any, count: number}
    // para ello ejecuta la funcion countBy
    let script = characterScript(char.codePointAt(0))
    // se crea la variable script que determina
    // a que script pertenece cada caracter de
    // la cadena de texto

    return script ? script.name : 'ninguno'
    // Si el script del caracter evaluado existe,
    // retorna un objeto
    // (Hey)
    // {name: latin, contador: 3}

    // si no existe,crea una entrada llamada ninguno
  }).filter(({ name }) => name != 'ninguno')
  // Este filtro simplemente elimina las entradas con nombre ninguno
  // para dejar solo los scripts que si exsiten

  let total = scripts.reduce((n, { count }) => n + count, 0)
  // Aunque conocemos el total de letras para cada script
  // Ej: [{name: latin, count: 3}, {name: arabic, count: 13}]
  // Necesitamos conocer el total de letras en toda la cadena
  // Por ende, utilizamos reduce para que, revise todos los objetos
  // y sume lo que encontró en el objeto actual 
  // mas lo siguiente
  // eso se almacena en la variable total 
  // es decir: total = 3 + 13 (segun el ejemplo anterior)

  if (total == 0) return 'No se encontraron scripts'
  // si total esta en cero quiere decir que no se introdujo ningun caracter
  // O cadena de texto

  return scripts
  // se retornan los scripts encontrados
  // [{ name: 'Han', count: 11 },
  // { name: 'Latin', count: 4 },
  // { name: 'Cyrillic', count: 3 }]

    // .map(({ name, count }) => {
	// 	// map se encarga de destructurar el array de objetos para obtener
	// 	// los valores de las llaves name y count
	// 	// Ej Latin 4
    //   return `${Math.round((count * 100) / total)}% ${name}`
	//   // se retorna count convertido en porcentaje con mathRound y total
	//   // se retorna el name
	//   // Ej 22% Latin
    // })
    // .join(', ')
	// // se hace join de cada objeto dentro del array con una coma.
	// // Ej 61% Han, 22% Latin, 17% Cyrillic
}

// codePointAt da un caracter Unicode Completo segun el caracter evaluado
