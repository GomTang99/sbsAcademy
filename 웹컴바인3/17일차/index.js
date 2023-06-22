// 버튼 클릭시 증가
function increase_btn() {
    let result = document.getElementById('myNumber');

    let num = result.innerText;

    num = parseInt(num) + 1; 

    result.innerText = num;
}

// 버튼 클릭시 감소
function decrease_btn() {
    let result = document.getElementById('myNumber');

    let num = result.innerText;

    num = parseInt(num) - 1;

    result.innerText = num;
}

// 버튼 클릭시 색깔변경
function changeRed() {

    let color = document.getElementsByClassName('btnColor');
}