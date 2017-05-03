$(document).ready(function(){

    $('#activator').click(function(){
        $('#overlay').fadeIn(200,function(){
            $('.box').addClass('showbox');
        });
        return false;
    });
    $('#exit').click(function(){
        $('.box').removeClass('showbox');
        $('#overlay').fadeOut('fast');
    });
    
 	$('#activator').hover(
 	function(){
 		$('#activator').css("color", "black");
 	},
 	function(){
 		$('#activator').css("color", "white");
 	});

});