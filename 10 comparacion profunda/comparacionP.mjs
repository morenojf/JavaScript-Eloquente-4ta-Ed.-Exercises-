// 1. Escribe una función deepEqual que tome dos valores y devuelva true solo si son el mismo valor
// o son objetos con las mismas propiedades,
// donde los valores de las propiedades son iguales cuando se comparan con una llamada recursiva a deepEqual

// solo los valores de las propiedades son comparados con la recursividad

// si es object llamas a la recursividad
// si no es object devuelves un true

// La función Object.keys será útil cuando necesites recorrer las propiedades de los objetos para compararlas. 

function deepEqual(valor1, valor2) {



  if (typeof (valor1, valor2) == 'object') {
    console.log(Object.keys(valor1))
	console.log(Object.keys(valor2))
  } 
  
 
 // funcional
  else {
    return valor1 == valor2 ? true : false
  }
}

let obj = { here: { is: 'an' }, object: 2 }

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}))
