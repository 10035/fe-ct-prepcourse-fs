function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  // if (x >)
  let largest = Math.max(x,y);
  if (x === y) {
    return x || y;
  } else {
    return largest;
  }
  // console.log(largest);
}

module.exports = obtenerMayor;
