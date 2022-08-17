$(function(){
    $('.btn-signup').click(function(){
        location.href = 'signup.html'
    });
    $('.btn-proceed').click(function(){
        location.href = 'turntable.html'
    });

    //가입 시 비밀번호 일치 여부 확인
    $('#userPWChk').keyup(function(){
        if($('#userPW').val() != $('#userPWChk').val()){
            $('.non-cord').show();
            $('.cord').hide();
        } else {
            $('.non-cord').hide();
            $('.cord').show();
        }
    });  
});