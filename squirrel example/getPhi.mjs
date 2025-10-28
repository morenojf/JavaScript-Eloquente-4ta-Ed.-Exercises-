import { journaldb } from './journaldb.mjs'

// 1. Tenemos una función que crea una tabla 2x2 de un evento específico

function tableFor(event, journal) {
  let table = [0, 0, 0, 0]
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0
    if (entry.events.includes(event)) index += 1
    if (entry.squirrel) {
      index += 2
    }
    table[index] += 1
  }
  return table
}

// 2. Tenemos otra función que calcula la correlación (phi) de la tabla obtenida

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  )
}

// ANALISIS FINAL Calcular una correlación para cada tipo de evento que ocurre en el conjunto de datos.

// 1. Encontrar todos los eventos que existen dentro del diario (desde comer pizza hasta tocar un árbol)

function journalEvents(journaldb) {
  let events = []
  for (let entry of journaldb) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event)
      }
    }
  }
  return events
}

// 2. Imprimir las correlaciones de cada uno de los eventos usando la función de obtención de tabla y calculo de correlación

for (let event of journalEvents(journaldb)) {
	console.log('correlación de', event, phi(tableFor(event, journaldb)))
}