/*Escribe un programa que cree una cadena que represente un tablero de 8x8, 
usando caracteres de salto de línea para separar las líneas. En cada posición del tablero hay un carácter de espacio o un carácter "#". 
Los caracteres deben formar un tablero de ajedrez. Al pasar esta cadena a console.log debería mostrar algo como esto: 

# # # # 
 # # # # 
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # # 


Cuando tengas un programa que genere este patrón, define una variable size = 8 y cambia el programa para que funcione para cualquier size, 
generando un tablero con el ancho y alto dados*/

//Pista: es necesario descomponer el problema, primero trabajar las
// filas y luego las columnas para entregar un dashboard completo

let board = ''
let size = 8

for (let r = 1; r <= size; r++) {
  let row = ''

  // este bucle es el que se repite tantas veces se
  // le haya dado el size para construir la linea
  // es decir, no saldrá del bucle interno hasta llegar al 8(size) por lo que
  // la condición se evalúa hasta terminar el bucle
  // llenando asi la variable row 
  for (let c = 0; c < size; c++) {

	// r + c determina la posición en la que está
	// si es par añade un caracter, si es impar añade un espacio
	// 12345678 = # # # # #
    row += (r + c) % 2 === 0 ? '#' : ' '
  }

  // cuando sale del for interno, se llena la variable board con lo que tiene row
  // y al final se salta la linea
  //vuelve a iniciar el ciclo for externo lo que activa de nuevo el interno.
  board += row + '\n'


}

console.log(board)
