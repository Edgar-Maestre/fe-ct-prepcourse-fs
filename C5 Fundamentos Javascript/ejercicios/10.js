function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if (Object.prototype.toString.call(fecha) === "[object Date]" && !isNaN(fecha)){
    //si la fecha es un objeto date y no NaN, entonces es valida
    return true;
  } else {
    // si no cumple con las condiciones anteriores, la fecha no es valida
    return false; 
  }
}

module.exports = esFechaValida;