// 1. Escribe una función deepEqual que tome dos valores y devuelva true solo si son el mismo valor
// o son objetos con las mismas propiedades,
// donde los valores de las propiedades son iguales cuando se comparan con una llamada recursiva a deepEqual

// solo los valores de las propiedades son comparados con la recursividad

// si es object llamas a la recursividad
// si no es object devuelves un true

// La función Object.keys será útil cuando necesites recorrer las propiedades de los objetos para compararlas.


// con object keys se produce un array de las llaves de cada objeto
// el array se llena con cadena de textos...

function deepEqual(valor1, valor2) {
  // falta comparacion de valores de propiedades con funcion recursiva
  if (typeof (valor1, valor2) == 'object') {
    // comparacion de llaves superficiales
    for (let index = 0; index < Object.keys(valor1).length; index++) {
      const element1 = Object.keys(valor1)[index]
      const element2 = Object.keys(valor2)[index]

	  console.log(index, element1, element2)

	  // evalua las propiedades
	  if (element1 != element2) return false

	  // evalua valores de las propiedades (de momento)
      if (
        valor1[element1] != valor2[element2] &&
        typeof (valor1[element1], valor2[element2]) != 'object'
      )
        return false



      if (typeof (valor1[element1], valor2[element2]) == 'object')
        deepEqual(valor1[element1], valor2[element2])
    }
  }
  return true
}

// errores de mi versión: EL ERROR ESTUVO EN LA COMA PARA COMPARAR TYPE OF
// typeof(valor1, valor2) está mal: la coma devuelve solo el último operando. Comprueba cada valor por separado.
// No manejas null (typeof null === "object") — hay que descartar null antes.
// Comparas llaves por índice (element1 vs element2); el orden puede variar. Mejor recorrer las llaves de un objeto y comprobar que existen en el otro.
// Usas element2 para leer el valor de valor2 pero deberías usar la misma llave (element1) para comparar ambos valores.
// No devuelves el resultado de la llamada recursiva (si la recursión falla, no lo propagas).
// No verificas que ambos objetos tengan la misma cantidad de propiedades.


// codigo correcto del libro

function deepEqual(a, b) {
	
	// el primero caso se evalua como falso cuando le paso un object
	// verdadero cuando paso un valor para cada parametro
	if (a === b) return true;
	
	// el segundo caso si algun valor es null, se descarta automaticamente
	// si alguno de los dos valores es distinto de object tambien se descarta automaticamente
	// los dos tienen que ser object para avanzar
	if (a == null || typeof a != "object" ||
		b == null || typeof b != "object") return false;
		
		
		// aca se obtienen las llaves de A y las llaves de B
		let keysA = Object.keys(a), keysB = Object.keys(b);
		
		// aca se comparan que tengan ambos valores la misma cantidad de llaves
		// si no tienen la misma cantidad se descarta
		if (keysA.length != keysB.length) return false;
		
		// aca se toman las llaves dentro del array de llaves de a y se recorren
		for (let key of keysA) {

			console.log(a[key], b[key])
			// aca compara que la llave de a esté dentro del array de llaves de b
			if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
			
			// en la evaluación recursiva, llama a la funcion, 
			// a[key] y b[key] es igual a { is: 'an' } que es el valor de here:
			// por lo que en la llamada recursiva se le pasa un object como parametro
			// para que los evalue nuevamente
			// entra al for de nuevo y hace otra llamada recursiva pero con 
			// los valores de is: (en este caso 'an')

			// en todo caso la expresion !deepEqual(a[key], b[key]) evalúa nuevamente
			// toda la función deepEqual y donde esta retorne false en alguna de sus condiciones
			// todo el resto del ciclo for retornará false y toda la función retorna false 
		}

		// Por último pero no menos importante, este true se retorna si todos los demas casos de false no aplican
		// es decir si nada es false se sobreentiende que los dos valores son iguales
		return true;
	}
	
let obj = { here: { is: 'an' }, object: 2 }
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}))