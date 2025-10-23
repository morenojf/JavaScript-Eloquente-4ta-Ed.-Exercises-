// Escribe un bucle que realice siete llamadas a console.log para mostrar el siguiente triángulo

/*

# 
## 
### 
#### 
##### 
###### 
#######

*/

// Puede ser útil saber que puedes encontrar la longitud de una cadena escribiendo .length después de ella.

for (let symbol = '#'; symbol.length <= 8; symbol += '#') {
  console.log(symbol)
}
