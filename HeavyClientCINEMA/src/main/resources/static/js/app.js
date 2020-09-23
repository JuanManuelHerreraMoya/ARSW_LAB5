var app = (function () {


    return {
        setCinema: function (cinema) {
            document.getElementById("CinemaS").innerHTML = "Cinema selected: " + cinema;
        },
        getCinemas: function (cinema,fecha) {
            app.setCinema(cinema);
            var fn = apimock.getFunctionsByCinemaAndDate(fecha,cinema, null)

        }
    };

})();
/*var app = (function () {

  var nombreCinema;
  var fechaFunciones;
  var funcionesCinema;
  var module = "js/apimock.js";


  function setNombreCinema(cinema){
       nombreCinema = cinema;
  }

  function setFechaFuncion (date){
    fechaFunciones = date.substring(0, 10);;
  }

  return {
    setNombreCinema: setNombreCinema,
    setFechaFuncion: setNombreCinema
  };

  function getFunctionsByCinemaAndDate(cinema, date){
    console.log(cinema);
    console.log(date);
    apimock.getFunctionsByCinemaAndDate(cinema,date,callB);
    }
    function callB(functions){
        funcionesCinema= [];
        functions.map(function(funct){
            funcionesCinema.push({
            name: funct.movie.name,
            genre: funct.movie.genre,
            hour: fun.date.split(" ")[1]});
        })
        updateTable();
    }
    function updateTable(){
        for (i=0;i<funcionesCinema.length;i++){
            console.log(funcionesCinema[i]);
            $("#idTable > tbody").append(
                '<tr><tr>' + funcionesCinema[i].name +'</tr>'+
                '<tr>' + funcionesCinema[i].genre +'</tr>' +
                '<tr>' + funcionesCinema[i].hour +'</tr>' +
                '<tr>' + "available" +'</tr></tr>');
        }
    }
    return{
        getFunctionsByCinemaNameAndDate:function (cinema,date){
            setNombreCinema(cinema);
            setFechaFuncion(date);
            getFunctionsByCinemaAndDate(cinema,date);

        }
    }
})();*/