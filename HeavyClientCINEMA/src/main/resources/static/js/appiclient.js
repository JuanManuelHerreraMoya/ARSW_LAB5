appiclient = (function (){

    function getFunctionsByCinemaAndDate(cinema, date, callback){

        $.get("http://localhost:8080/cinemas/"+cinema+"/"+date, function(data){
                console.log(data);
                console.log(cinema);
                console.log(date);
                callback(data);
            }, 'json');
    },

    function getFunctionsByCinema(cinema, callback){

        $.get("http://localhost:8080/cinemas/"+cinema, function(data){
                callback(data);
            }, 'json');
    },

    getFunctionByCinemaMovieAndDate: function (cinema, date, movieName, callback){
                //http://localhost:8080/cinemas//{cinemaName}/{date}/{movieName}
        $.getJSON("http://localhost:8080/cinemas/"+cinema+"/"+date+"/"+movieName, function (data) {
                callback(data);
            });
        },
    putFunction: function(cinema, newFunc, callback) {
            var cinemaFunction = JSON.stringify(new_function);
                const promise = new Promise((resolve, reject) => {
                    $.ajax({
                        url: "http://localhost:8080/cinemas/" + cinema,type: 'PUT',data: cinemaFunc,contentType: "application/json"
                    }).done(function () {
                        resolve('SUCCESS');

                    }).fail(function (msg) {
                        reject('FAIL');
                    });
                });

                promise
                    .then(res => {
                        callback();
                    })
                    .catch(error => {
                        alert(error);
                    });

         },
         deleteFunction: function(cinema, funct, callback){
                     var cinemaFunction = JSON.stringify(funct);
                     const promise = new Promise((resolve, reject) => {
                         $.ajax({
                             url: "http://localhost:8080/cinemas/" + cinema_name,
                             type: 'DELETE',
                             data: cinemaFunction,
                             contentType: "application/json"
                         }).done(function () {
                             resolve('SUCCESS');
                         }).fail(function (msg) {
                             reject('FAIL');
                         });
                     });

                     promise
                         .then(res => {
                             callback();
                         })
                         .catch(error => {
                             alert(error);
                         });
                  },

    return{
        //saveAndUpdate:saveAndUpdate,
        //createFunction:createFunction,
        //deleteFunction:deleteFunction,
        getFunctionsByCinema: getFunctionsByCinema,
        getFunctionsByCinemaAndDate: getFunctionsByCinemaAndDate
    };
})();