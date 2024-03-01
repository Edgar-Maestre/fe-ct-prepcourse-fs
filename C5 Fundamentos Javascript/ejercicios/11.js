function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  var fechaActual = new Date();

  // Obtenemos el año actual 
  var añoActual = fechaActual.getFullYear();

  // Obtenemos el año de nacimiento de la fecha de nacimiento proporcionado
  var añoNacimiento = fechaNacimiento.getFullYear();

  //Calculamos la edad restando el año actual al año de nacimiento
  var edad = añoActual - añoNacimiento;

  //verificamos si la edad es mayor o igual a 18
  return edad >= 18;
  
}

module.exports = esMayorDeEdad;