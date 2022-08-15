$(function(){
    $('.top-bar').click(function(){
        history.back();
    });
    
    $('.btn-box-search').click(function(){
        location.href = 'search-result.html'
    });
    $('input[type=radio]').click(function(){
        $('input[type=radio]').siblings('.about-opt').removeClass('active');
        $(this).siblings('.about-opt').addClass('active');
    });

    //search 탭메뉴
    $('.tab li').click(function() {
        var activeTab = $(this).attr('data-tab');
        $('.tab li').removeClass('on');
        $('.tabcont').removeClass('on');
        $(this).addClass('on');
        $('#' + activeTab).addClass('on');
    });
});