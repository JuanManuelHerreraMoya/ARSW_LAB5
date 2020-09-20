var app = (function () {

  var nombreCinema;
  var fechaFunciones;
  var funcionesCinema;

  var setNombreCinema = function (nuevoNombreCinema){
       nombreCinema = nuevoNombreCinema;
  }

  var setFechaFuncion = function (nuevaFechaFuncion){
    fechaFunciones = nuevaFechaFuncion;
  }

  return {
    setNombreCinema: setNombreCinema,
    setFechaFuncion: setNombreCinema
  };

})();