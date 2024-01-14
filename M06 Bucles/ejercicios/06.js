function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  strNum = num.toString()
  numLength = strNum.length;
  return numLength === 3;
  // console.log(strNum.length)
  // if (strNum.length === 3) {
  //   return true;
  // } else {
  //   return false;
  // }

}

// console.log(tieneTresDigitos(333));
// console.log(tieneTresDigitos(4444));
// console.log(tieneTresDigitos(22));
// console.log(tieneTresDigitos(1));


module.exports = tieneTresDigitos;
