$(window).scroll(function() {
    $('#examples-cta').each(function(){
        var imagePos = $(this).offset().top;
        
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
            $(this).addClass("slideUp");
        }
    });
});

$('#slideUpBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();	
        $('#object').addClass("slideUp");
    });
});

$('#slideDownBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("slideDown");
    });
});	

$('#slideLeftBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("slideLeft");
    });
});		

$('#slideRightBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("slideRight");
    });
});	

$('#slideExpandUpBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("slideExpandUp");
    });
});	

$('#expandUpBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("expandUp");
    });
});

$('#fadeInBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("fadeIn");
    });
});

$('#expandOpenBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("expandOpen");
    });
});		

$('#bigEntranceBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("bigEntrance");
    });
});		

$('#hatchBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("hatch");
    });	
});		


/*
	MISC
	*/

$('#bounceBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("bounce");
    });	
});	

$('#pulseBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("pulse");
    });	
});		

$('#floatBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("floating");
    });	
});

$('#tossingBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("tossing");
    });	
});		

$('#pullUpBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("pullUp");
    });	
});

$('#pullDownBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("pullDown");
    });	
});

$('#stretchLeftBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("stretchLeft");
    });	
});

$('#stretchRightBtn').click(function() {
    $(this).each(function(){
        $('#object').removeClass();				
        $('#object').addClass("stretchRight");
    });	
});



