// $(document).ready(function () {  
//     $("#Submit").click(function () {  
//         var movie = new Object();  
//         movie.Title = $('#title').val();  
//         person.Genre = $('#genre').val();  
//         person.DirectorName = $('#directorName').val();  



//         $.ajax({  
//             url: 'http://localhost:44378/api/movies',
//             type: 'Get',  
//             dataType: 'json',  
//             data: movie,  
//             success: function (data, textStatus, xhr) {  
//                 console.log(data);  
//             },  
//             error: function (xhr, textStatus, errorThrown) {  
//                 console.log('Error in Operation');  
//             }  
//         });  
//     });  
// }); 

$(document).ready(function () {

    $("button").on("click", function () {
        let searchTitleInput = $("#user-search").val();

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
                /*
                let albumCover = data[0].artworkUrl100;
                let artistName = data[0].artistName;
                let songName = data[0].trackName;
                let songPreview = data[0].previewUrl
                */

                //$("#info-list").append(`<div class="col-2"><h3>Album Cover</h3></div><div class='col-2'><h3>Artist</h3></div><div class='col-2'><h3>Song</h3></div><div class='col-4'><h3>Album Name</h3></div><div class='col-2'><h3>Song Preview</h3></div>`);

                $.each(data, function (key, value) {

                    $("#info-list")
                        // .append(`<div class="row object-row"><div class="col-2"><img src="${value.artworkUrl100}"></div>` + "<div class='col-2'>" + value.artistName + "</div><div class='col-2'>" + value.trackName + "</div><div class='col-4'>" + value.collectionName + "</div><div class='col-2'><audio controls='controls'><source src='" + value.previewUrl + `' type="audio/mpeg"></audio></div></div>`)
                        // .append(`<div class="row object-row"><div class="col-2"><img src="${value.artworkUrl100}"></div>` + "<div class='col-2'>" + value.title + "</div><div class='col-2'>" + value.genre + "</div><div class='col-4'>" + value.DirectorName + "</div><div class='col-2'><audio controls='controls'><source src='" + value.previewUrl + `' type="audio/mpeg"></audio></div></div>`)
                        .append(`<div class="row object-row"><div class="col-3">` + value.Id + `</div>` + "<div class='col-3'>" + value.Title + "</div><div class='col-3'>" + value.Genre + "</div><div class='col-3'>" + value.DirectorName + "</div>")
                });
            })

            .fail(function () {
                console.log("fail");
                $(".movieSearch").append("<p>search failed, try again</p>")
            });

    });
});