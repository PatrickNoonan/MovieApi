$(document).ready(function () {
    $("#displayAll").on("click", function () {
        $("#info-list").empty();

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
        $("#info-list").empty();
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
                            $("#info-list")
                                .append(`<div class="row object-row">
                                <div class='col-3'>
                                    <button id="put-icon"><i class="fas fa-edit"></i></button>
                                </div>
                                <div class='col-3'>
                                    <input type="text" id="newTitleInput" placeholder="Edit Title" />
                                </div>
                                <div class='col-3'>
                                    <input type="text" id="newGenreInput" placeholder="Edit Genre" />
                                </div>
                                <div class='col-3'>
                                    <input type="text" id="newDirectorInput" placeholder="Edit Director" />
                                </div>
                            </div>`)
                            //PUT METHOD                
                            $("#put-icon").on("click", function () {
                                let movieId = value.Id;
                                let newTitleInput = $("#newTitleInput").val();
                                let newGenreInput = $("#newGenreInput").val();
                                let newDirectorInput = $("#newDirectorInput").val();
                                $.ajax({
                                    method: "PUT",
                                    url: "http://localhost:44378/api/values" + movieId,
                                    crossDomain: true,
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    data: JSON.stringify({
                                        "Title": newTitleInput,
                                        "Genre": newGenreInput,
                                        "DirectorName": newDirectorInput,
                                    }),
                                    datatype: "json",
                                    success: function (data) {
                                        console.log(data);
                                    }
                                })
                            });
                        });
                    };
                });
            })
    })


    $("#genre-icon").on("click", function () {
        $("#info-list").empty();
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
        $("#info-list").empty();
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
    });
    $("#post-icon").on("click", function () {
        let newTitleInput = $("#newTitleInput").val();
        let newGenreInput = $("#newGenreInput").val();
        let newDirectorInput = $("#newDirectorInput").val();
        $.ajax({
            method: "POST",
            url: "http://localhost:44378/api/values",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                "Title": newTitleInput,
                "Genre": newGenreInput,
                "DirectorName": newDirectorInput,
            }),
            datatype: "json",
            success: function (data) {
                console.log(data);
            }
        })
        // .done(function (data) {
        //     $.each(data, function (key, value) {
        //         if (value.DirectorName == searchDirectorInput) {
        //             $("#info-list")
        //                 .append(`<div class="row object-row"><div class="col-3"><button id="movie-edit"><i class="fas fa-film"></i></button></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
        //         };
        //     });
        // })
    });

});
