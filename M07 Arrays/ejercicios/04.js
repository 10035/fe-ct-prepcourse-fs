function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  console.log(Math.random(array.length));
}

let array = [1,2,3,4,5,6];
obtenerElementoAleatorio(array);

module.exports = obtenerElementoAleatorio;
