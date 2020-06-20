$('#showBtn').on('click',function(){
    $('.menu').removeClass('hide').addClass('show');
    shadowMenu();
});
$('#closeBtn').on('click',function(){
    $('.menu').removeClass('show').addClass('hide');
    shadowMenu();
});

$(window).resize(shadowMenu);

function shadowMenu(){
    if($(window).innerWidth()<=992 && $('.menu').hasClass('show')){
        $('body').css('overflow','hidden');
    }else{
        $('body').css('overflow','auto');
    }
}