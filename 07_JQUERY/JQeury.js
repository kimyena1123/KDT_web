//jquery로 요소 선택하기
console.log($('div'));


// 변수에 담을 수도 있다.
let myDiv = $('div');
console.log(myDiv);

//js로 html과 css 변환
function submitjs(){
    document.querySelector('.div1').innerHTML = "반갑습니다."
    document.querySelector('.div1').setAttribute('style', 'border: 2px solid red;');

}

//jquery로 html과 css 변환
function submitjquery(){
    $('.div1').text('안녕하세요');
    $('.div1').css('border', '3px solid blue');
}s