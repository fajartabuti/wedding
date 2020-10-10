// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAnqf-1bTSQiU1APusOMMBChqq4-3krql0",
    authDomain: "wedding-fajartatu.firebaseapp.com",
    databaseURL: "https://wedding-fajartatu.firebaseio.com",
    projectId: "wedding-fajartatu",
    storageBucket: "wedding-fajartatu.appspot.com",
    messagingSenderId: "942101154856",
    appId: "1:942101154856:web:86c52d04b3d3bade04f91d"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var nextkey = 0;

database.ref().orderByChild("key").limitToLast(20).once('value', function(snapshot){

    if(snapshot.exists())
    {
        var content = '';
        snapshot.forEach(function(data)
        {
            var val = data.val();
            console.log(val.length);

            if(val.length!=0){
                nextkey = val.length;
            }

            var carousel = $('#owl-child');

            carousel.addClass("carousel-testimony owl-carousel ftco-owl");

            for ( i = 0; i < val.length; i++ ){
                content +='<div class="item" id=' + val[i].key + '>';
                content +='<div class="testimony-wrap py-4">';
                content +='<div class="text">';
                content +='<p class="mb-4">' + val[i].message + '</p>';
                content +='<div class="d-flex align-items-center">';
                content +='<div class="pl-3">';
                content +='<p class="name">' + val[i].name + '</p>';
                content +='</div>';
                content +='</div>';
                content +='</div>';
                content +='</div>';
                content +='</div>';
            }
            carousel.html(content);

            var startItem = $('.item').length - 1;

            $('.carousel-testimony').owlCarousel({
                autoplay: true,
                autoHeight: true,
                autoWidth: false,
                center: false,
                loop: true,
                items:1,
                margin: 30,
                stagePadding: 0,
                startPosition: startItem,
                nav: false,
                responsive:{
                    0:{
                        dotsEach: 5,
                        items: 1
                    },
                    600:{
                        items: 2
                    },
                    1000:{
                        items: 3
                    }
                }
            });
        });
    }
});

$("#zoombutton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#ceremony-section").offset().top
    }, 1000);
});

$("#submitmessage").click(function(){
    $("#message-form").validate({
        rules: {
            messagename : {
                required: true,
                minlength: 3
            },
            messagetext : {
                required: true,
                minlength: 15
            }
        },
        messages : {
            messagename: {
                required: "Jangan dikosongin dong",
                minlength: "Yakin namamu kurang dari 3 karakter?"
            },
            messagetext: {
                required: "Jangan dikosongin dong",
                minlength: "Panjangin sedikit pesanmu setidaknya 15 karakter ya"
            },
          }
    });

    if($('#message-form').valid())
    {
        event.preventDefault();
        database.ref('testimony/' + nextkey).set({
            key: nextkey,
            name: messagename.value,
            message: messagetext.value
        });
        $('#messagemodal').modal('show');
        $("#message-form")[0].reset();
    }
    else
    {
        return false;
    }
});

$("#modalmessageclose").click(function(){
    document.body.style.removeProperty('overflow');
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#greeting-section").offset().top
    }, 1000);
});

$("#modalgiftclose").click(function(){
    document.body.style.removeProperty('overflow');
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#gift-section").offset().top
    }, 1000);
});

document.getElementById('un-mute1').style.display = 'none';
				
var x = document.getElementById('ouraudio'); 

function playAudio() { 
	x.play();
	document.getElementById('un-mute1').style.display = 'none';
	document.getElementById('mute1').style.display = 'inline-block';
} 
function pauseAudio() { 
	x.pause();
	document.getElementById('mute1').style.display = 'none';
	document.getElementById('un-mute1').style.display = 'inline-block';
}
