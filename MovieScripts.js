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
        let searchType = "song";
        let searchInput = $("#user-search").val();
        let inputToUrl = searchInput.replace(" ", "+");

        $.ajax({
            method: "GET",
            url: "https://itunes.apple.com/search?entity=" + searchType + "&limit=8&term=" + inputToUrl,
            dataType: "JSON"
        })

            .done(function (data) {

                console.log(data);
                /*
                let albumCover = data.results[0].artworkUrl100;
                let artistName = data.results[0].artistName;
                let songName = data.results[0].trackName;
                let songPreview = data.results[0].previewUrl
                */

                console.log(data.results);

                //$("#info-list").append(`<div class="col-2"><h3>Album Cover</h3></div><div class='col-2'><h3>Artist</h3></div><div class='col-2'><h3>Song</h3></div><div class='col-4'><h3>Album Name</h3></div><div class='col-2'><h3>Song Preview</h3></div>`);

                $.each(data.results, function (key, value) {

                    $("#info-list")
                        .append(`<div class="row object-row"><div class="col-2"><img src="${value.artworkUrl100}"></div>` + "<div class='col-2'>" + value.artistName + "</div><div class='col-2'>" + value.trackName + "</div><div class='col-4'>" + value.collectionName + "</div><div class='col-2'><audio controls='controls'><source src='" + value.previewUrl + `' type="audio/mpeg"></audio></div></div>`)
                });
            })

            .fail(function () {
                console.log("fail");
                $(".iTunes-seach").append("<p>search failed, try again</p>")
            });

    });
});