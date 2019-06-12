$(document).ready(function () {
    $("#displayAll").on("click", function () {
        //.remove all things that were appended
        var movie = new Object();
        movie.Title = $('#title').val();
        movie.Genre = $('#genre').val();
        movie.DirectorName = $('#directorName').val();

        $.ajax({
            method: "GET",
            url: "https://localhost:44378/api/values",
            dataType: "JSON"
        })
            .done(function (data) {
                console.log(data);
                $.each(data, function (key, value) {
                    $("#info-list")
                        .append(`<div class="row object-row"><div class="col-3"><button id="movie-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")

                    $("#movie-edit").on("click", function () {
                        //PUT METHOD
                        let movieId = value.Id;
                        $.ajax({
                            method: "PUT",
                            url: "https://localhost:44378/api/values/" + movieId,
                            dataType: "JSON"
                        })
                            .done(function (data) {
                                // console.log(data);
                                // $.each(data, function (key, value) {
                                //     $("#info-list")                        
                                //         .append(`<div class="row object-row"><div class="col-3"><button id="move-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
                                // });
                            })
                    });
                })
            });
    });

    $("#title-icon").on("click", function () {
        let searchTitleInput = $("#user-search").val();
        $.ajax({
            method: "GET",
            url: "https://localhost:44378/api/values",
            dataType: "JSON"
        })

            .done(function (data) {

                console.log(data);

                // for (let i = 0; i < data.length; i++){
                //     if (data[i].Title == searchTitleInput) {
                //         $("#info-list")
                //             .append(`<div class="row object-row"><div class="col-3"><button id="movie-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
                //     };
                // }

                $.each(data, function (key, value) {
                    if (value.Title == searchTitleInput) {
                        $("#info-list")
                            .append(`<div class="row object-row"><div class="col-3"><button id="movie-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
                    };
                });
            })
    })
});

$("#genre-icon").on("click", function () {
    let searchGenreInput = $("#user-search").val();

    $.ajax({
        method: "GET",
        url: "https://localhost:44378/api/values",
        dataType: "JSON"
    })

        .done(function (data) {

            console.log(data);

            for (let i = 0; i < data[0].length; i++){
                if (data[0][i].Genre == searchGenreInput) {
                    $("#info-list")
                        .append(`<div class="row object-row"><div class="col-3"><button id="movie-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
                };
            }

            // $.each(data, function (key, value) {
            //     if (value.Title == searchTitleInput) {
            //         $("#info-list")
            //             .append(`<div class="row object-row"><div class="col-3"><button id="movie-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
            //     };
            // });
        })
});

$("#director-icon").on("click", function () {
    let searchDirectorInput = $("#user-search").val();

    var movie = new Object();
    movie.Title = $('#title').val();
    movie.Genre = $('#genre').val();
    movie.DirectorName = $('#DirectorName').val();

    $.ajax({
        method: "GET",
        url: "https://localhost:44378/api/values",
        dataType: "JSON"
    })

        .done(function (data) {

            console.log(data);

            for (let i = 0; i < data[0].length; i++){
                if (data[0][i].DirectorName == searchDirectorInput) {
                    $("#info-list")
                        .append(`<div class="row object-row"><div class="col-3"><button id="movie-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
                };
            }

            // $.each(data, function (key, value) {
            //     if (value.Title == searchTitleInput) {
            //         $("#info-list")
            //             .append(`<div class="row object-row"><div class="col-3"><button id="movie-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
            //     };
            // });
        })
});
