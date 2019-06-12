$(document).ready(function () {
    $("#displayAll").on("click", function () {
        //.remove all things that were appended
        // var movie = new Object();
        // movie.Title = $('#title').val();
        // movie.Genre = $('#genre').val();
        // movie.DirectorName = $('#directorName').val();

        $.ajax({
            method: "GET",
            url: "http://localhost:44378/api/values",
            dataType: "JSON"
        })
            .done(function (data) {
                console.log(data);
                $.each(data, function (key, value) {
                    $("#info-list")
                        .append(`<div class="row object-row"><div class="col-3"><button id="movie-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
                })
            });
    });

    $("#title-icon").on("click", function () {
        let searchTitleInput = $("#user-search").val();
        $.ajax({
            method: "GET",
            url: "http://localhost:44378/api/values",
            dataType: "JSON"
        })
            .done(function (data) {
                console.log(data);
                $.each(data, function (key, value) {
                    if (value.Title == searchTitleInput) {
                        $("#info-list")
                            .append(`<div class="row object-row"><div class="col-3"><button id="movie-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")

                            $("#movie-edit").on("click", function () {
                                //PUT METHOD
                                let movieId = value.Id;
                                $.ajax({
                                    method: "PUT",
                                    url: "http://localhost:44378/api/values/" + movieId,
                                    data: value,
                                    success: function (data) {
                                        console.log(data);
                                    }
                                })
                            });
                    };
                });
            })
    })


    $("#genre-icon").on("click", function () {
        let searchGenreInput = $("#user-search").val();

        $.ajax({
            method: "GET",
            url: "http://localhost:44378/api/values",
            dataType: "JSON"
        })

            .done(function (data) {

                console.log(data);

                $.each(data, function (key, value) {
                    if (value.Genre == searchGenreInput) {
                        $("#info-list")
                            .append(`<div class="row object-row"><div class="col-3"><button id="movie-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
                    };
                });
            })
    });

    $("#director-icon").on("click", function () {
        let searchDirectorInput = $("#user-search").val();
        $.ajax({
            method: "GET",
            url: "http://localhost:44378/api/values",
            dataType: "JSON"
        })
            .done(function (data) {
                console.log(data);
                $.each(data, function (key, value) {
                    if (value.DirectorName == searchDirectorInput) {
                        $("#info-list")
                            .append(`<div class="row object-row"><div class="col-3"><button id="movie-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
                    };
                });
            })
    })
});
