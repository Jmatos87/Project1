console.log($)
$('#menuButtons').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $($href).offset();
    console.log($href);
    console.log($anchor);

    $('body').animate({ scrollTop: $anchor.top },1200);
    return false;
});
