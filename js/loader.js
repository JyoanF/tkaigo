window.onload = function(){
    $('#imgloader').fadeOut(0);
    $('#imgloader2').fadeOut(0);
    $('#textloader').fadeOut(0);
    $('#imgloader').fadeIn(1500);
    $('#textloader').fadeIn(2000);
    $('#imgloader2').fadeIn(1500);
    setTimeout(noloader,3000);

    setTimeout(scrollagain,3500);
    
}

function noloader(){
    $('#onload').fadeOut();
    $('.loader2').fadeOut();
}

function scrollagain(){
    $('body').removeClass('hidden');
    $('header').removeClass('escondido');
    $('main').removeClass('escondido');
}