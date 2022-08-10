$(function(){
    $('.btn-box-search').click(function(){
        location.href = 'search_result.html'
    });
    $('input[type=radio]').click(function(){
        $('input[type=radio]').siblings('.about-opt').removeClass('active');
        $(this).siblings('.about-opt').addClass('active');
    });
});