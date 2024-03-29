$(document).ready(function () {
    $("#displayAll").on("click", function () {
        $("#info-list").empty();
        $.ajax({
            method: "GET",
            url: "http://localhost:44378/api/values",
            dataType: "JSON"
        })
            .done(function (data) {
                $.each(data, function (key, value) {
                    $("#info-list")
                        .append(`<div class="row object-row"><div class="col-3"><a href="${value.Image}"><img src="${value.Image}"></a></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
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
                $.each(data, function (key, value) {
                    if (value.Title == searchTitleInput) {
                        $("#info-list")
                            .append(`<button title='Add image' id='add-image'><i class='fas fa-images'></i></button><button title='Edit Movie' id='movie-edit'><i class='fas fa-film'></i></button><div class="row object-row"><div class="col-3"><a target="_blank" href="${value.Image}"><img src="${value.Image}"></a></div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div></div>")                            
                            
                        $("#add-image").on("click", function () {
                            $("#info-list")
                            .append(`<div class="row object-row">                                
                                <div class='col-6'>
                                    <input type="text" id="newImageInput" placeholder="Image URL" />
                                </div>
                                <div class='col-6'>
                                    <button title="Enter" id="put-icon"><i class="fas fa-edit"></i></button>
                                </div>
                            </div>`)

                            $("#put-icon").on("click", function () {
                                let movieId = value.Id;
                                let newImageUrl = $("#newImageInput").val();
                                $.ajax({
                                    method: "PUT",
                                    url: "http://localhost:44378/api/values/" + movieId,
                                    datatype: "JSON",
                                    data: {
                                        "Title": value.Title,
                                        "Genre": value.Genre,
                                        "DirectorName": value.DirectorName,
                                        "Image" : newImageUrl
                                    },
                                    success: function (data) {
                                    }
                                })
                            });
                        });
                        $("#movie-edit").on("click", function () {    
                            $("#info-list")
                                .append(`<div class="row object-row">
                                <div class='col-3'>
                                    <button title="Edit" id="put-icon"><i class="fas fa-edit"></i></button>
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
                                    url: "http://localhost:44378/api/values/" + movieId,
                                    datatype: "JSON",
                                    data: {
                                        "Title": newTitleInput,
                                        "Genre": newGenreInput,
                                        "DirectorName": newDirectorInput,
                                        "Image": value.Image
                                    },
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
                $.each(data, function (key, value) {
                    if (value.Genre == searchGenreInput) {
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
                                        url: "http://localhost:44378/api/values/" + movieId,
                                        datatype: "JSON",
                                        data: {
                                            "Title": newTitleInput,
                                            "Genre": newGenreInput,
                                            "DirectorName": newDirectorInput,
                                        },
                                        success: function (data) {
                                        }
                                    })
                                });
                            });
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
                $.each(data, function (key, value) {
                    if (value.DirectorName == searchDirectorInput) {
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
                                        url: "http://localhost:44378/api/values/" + movieId,
                                        datatype: "JSON",
                                        data: {
                                            "Title": newTitleInput,
                                            "Genre": newGenreInput,
                                            "DirectorName": newDirectorInput,
                                        },
                                        success: function (data) {
                                        }
                                    })
                                });
                            });
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
            datatype: "JSON",
            headers: {
                "Content-Type": "application/json"
            },
            contentType: "application/json",
            data: JSON.stringify({
                "Title": newTitleInput,
                "Genre": newGenreInput,
                "DirectorName": newDirectorInput,
            }),            
            success: function (data) {
            }
        })
    });

});
