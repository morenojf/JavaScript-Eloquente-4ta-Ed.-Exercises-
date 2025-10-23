/*Escribe un programa que use console.log para imprimir todos los números del 
1 al 100, con dos excepciones. Para los números divisibles por 3, imprime "Fizz" en lugar del número, 
y para los números divisibles por 5 (y no por 3), imprime "Buzz" en su lugar. Cuando tengas eso funcionando, 
modifica tu programa para imprimir"FizzBuzz " para los números que son divisibles por 3 y 5 
(y sigue imprimiendo "Fizz" o "Buzz" para los números que son divisibles solo por uno de esos). (
Esto es en realidad una pregunta de entrevista que se ha afirmado que elimina a un porcentaje significativo de candidatos a programadores. Entonces, si lo resolviste,
 tu valor en el mercado laboral acaba de aumentar.)  */

for (let index = 1; index <= 100; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log('FizzBuzz')
  } else if (index % 3 === 0) {
    console.log('Fizz')
  } else if (index % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(index)
  }
}

// logica:

/* Primero hacemos un bucle for que imprima numeros del 1 al 100
IMPORTANTE, debe ser del 1 al 100 no del 0 al 100

Luego hacemos una validacion que valide si el numero es divisible por 3 y por 5 para entonces colocar 
FizzBuzz

Sino validamos que sea divisibile solo en 3 
Y que sea divisible solo en cinco para imprimir Fizz o Buzz

de lo contrario se imprimirá el numero normal con el else
	
	Cada iteracion que hace valida el número y si no entra en ninguna condicion
	se imprime el numero tal cual
	
IMPORTANTE, el valor de index jamas se reasigna puesto que es el que se evalua en el ciclo for*/
