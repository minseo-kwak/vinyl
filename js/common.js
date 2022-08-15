$(function(){
    $('.btn-prev').click(function(){
        history.back();
    });
    $('.btn-search').click(function(){
        location.href = 'search.html'
    });
    $('.btn-turntable').click(function(){
        location.href = 'turntable.html'
    });

    //add to collection
    $('.btn-add-all').click(function(){
        $(this).children().toggleClass('added');
        $('.btn-add-collection span').toggleClass('added');
    });

    $('.btn-add-collection').click(function(){
        $(this).children().toggleClass('added');
    });

    //add to favorite
    $('.btn-add-favorite').click(function(){
        $(this).toggleClass('on');
    });
})