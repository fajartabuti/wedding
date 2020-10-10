$(document).ready(function(){
    $('#guestInputModal').modal('show');
    $('#ourvideo').attr('src', '');
    $('#ouraudio').attr('src', '');
});

$("#submitGuest").click(function(){
    if($('#basic-form').valid())
    {
        $('#guestModal').modal('show');  
        var str = $("#guestname").val();
        var strCaps = str.toUpperCase();
        $('#guest').text(strCaps);
        $('#ourvideo').attr('src', 'images/Untitled.mp4');
        $('#ouraudio').attr('src', 'images/music.mp3');
    }
    else
    {
        return false;
    }
    document.body.style.overflow = 'hidden'; 
});

$(document).keypress(function(e) {
    if(e.which == 13) {
        $('#guestModal').modal('hide');
        document.body.style.removeProperty('overflow');
        $('#ourvideo').attr('src', '');
    }
});

$(document).ready(function(){
    $("#basic-form").validate({
        rules: {
            guestname : {
                required: true,
                minlength: 3
            }
        },
        messages : {
            guestname: {
                required: "Jangan dikosongin dong",
                minlength: "Yakin namamu kurang dari 3 karakter?"
            }
          }
    });
});

$("#modalclose").click(function(){
    document.body.style.removeProperty('overflow');
    $('#ourvideo').attr('src', '');
});