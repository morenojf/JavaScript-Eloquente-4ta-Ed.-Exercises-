function findSolution(objetivo) {
  function find(actual, historial) {
    if (actual === objetivo) {
      return historial
    } else if (actual > objetivo) {
      return null
    } else {
      return (
        find(actual + 5, `(${historial} + 5)`) ??
        find(actual * 3, `(${historial} * 3)`)
      )
    }
  }
  return find(1, '1')
}
console.log(findSolution(26))
