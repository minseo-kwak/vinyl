$(function(){
    $('.btn-signup').click(function(){
        location.href = 'signup.html'
    });
    $('.btn-proceed').click(function(){
        location.href = 'turntable.html'
    });
    $('.btn-prev').click(function(){
        history.back();
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

const mailchk = document.getElementById('btn-mailchk')

mailchk.addEventListener("click", function(){
    if(mailchk.innerText === '입력했습니다.') {
        mailchk.innerText = '로그인하러 가기';
        document.getElementById('afterchk').style.opacity = '1.0';
    } else window.location.href = 'login.html';
});