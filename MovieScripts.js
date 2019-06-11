$(document).ready(function () {  
    $("#Submit").click(function () {  
        var movie = new Object();  
        movie.Title = $('#title').val();  
        person.Genre = $('#genre').val();  
        person.DirectorName = $('#directorName').val();  
        $.ajax({  
            url: 'http://localhost:44378/api/movies',
            type: 'Get',  
            dataType: 'json',  
            data: movie,  
            success: function (data, textStatus, xhr) {  
                console.log(data);  
            },  
            error: function (xhr, textStatus, errorThrown) {  
                console.log('Error in Operation');  
            }  
        });  
    });  
}); 