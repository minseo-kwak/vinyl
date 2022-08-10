$(function(){
    $('.top-bar').click(function(){
        history.back();
    });
    $('.btn-view-list').click(function(){
        $(this).find('span').toggleClass('active-view');
        $('#controls, #playlist').slideToggle();
        if($('.coverset').width() != 260)
            $('.coverset').animate({
                width: "260px",
                marginRight: 0,
            }, 300);
        else 
            $('.coverset').animate({
                width: "408px",
                marginRight: "50px" 
            }, 300)
    });

    $('.btn-add-collection').click(function(){
        $(this).find('span').toggleClass('active-add');
    });
    $('#playlist .options button').click(function(){
        $(this).toggleClass('active-play');
    });
});