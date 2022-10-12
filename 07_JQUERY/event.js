console.log(document); //js
console.log($(document)); //jquery

// 1. Load Event
// jquery
$(document).ready(function() {
    console.log('ready - 문서의 dom 트리가 완성되면 실행')
});

$(function () {
    console.log('안녕?');
});

// js
document.addEventListener('DOMContentLoaded', function () {
    console.log('domcontentloaded - 문서의 dom 트리가 완성되면 실행');
})

//2. Mouse Event
$('.p-msg').click(function(){ //.p-msg가 클릭이 일어났을 때
    $('.p-msg').css('color', 'red');
});

console.log($('.num'));

$('.num').click(function(){ //length : 4 => nums인 li 태그 4개 모두 다 파란색으로 바뀜.
    $('.num').css('color', 'blue');
});

$('.num').click(function(){ //length : 4 => nums인 li 태그 4개 모두 다 파란색으로 바뀜.
    //$(this) : 자기 자신을 의미한다.
    $(this).css('color', 'blue');
    console.log($(this)); // 클릭이 발생한 그 요소를 의미
});

//js

// const nums = document.querySelectorAll('.num');

// for(let i = 0; i < nums.length; i++){
//     nums[i].addEventListener('click', function(){
//         // console.log(nums[i]);
//         // nums[i].style.color = "blue";
//         this.style.color = 'blue';
//         console.log(this);
//     })
// }


//mouseover() : 요소에 마우스를 올렸을 때
$('.numbers').mouseover(function(){
    $(this).css('background-color', "skyblue");
    $(this).append('<div>.mouseover() called</div>')
})

//hover() : 마우스 올렸을 떄랑 떼었을 떄
//hover(inFunc, outunc)

$('.div-hover').hover(
    function(){
        $(this).addClass('hover');
    },

    function(){
        $(this).removeClass('hover');
    }
)

//scroll() : 스크롤 할 때
console.log(window); //js
console.log($(window)); //jquery

$(window).scroll(function(){
    console.log('scrollllll');
})

//3. key Evnet
//keydown : 키 눌렀을 떄
$('.input-key').keydown(function (e) {
    console.log(e);
    
    if (e.code == 'ArrowUp') {
        console.log('up')
    } else if (e.code == 'ArrowDown') {
        console.log('down')
    } else {
        console.log('others');
    }
})

//4. Form Event
$('#todo-form').submit(function(e){
    e.preventDefault(); //기본 동작 막기

    console.log('submit');

    const todo = $('input[name="todo"]').val(); //input 값 저장
    $('.todos').append(`<li>${todo}</li>`);// ul에 li추가하는 코드

    $('input[name="todo"]').val(''); //input초기화
})
