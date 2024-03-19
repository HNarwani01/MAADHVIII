let nextButton = document.getElementById('next');
let preButton = document.getElementById('pre');
let backButton = document.getElementById('back');
let seeMoreButton = document.querySelectorAll('.seeMore');
let coreusel = document.querySelector('.carosel');
let listHtml = document.querySelector('.carosel .list');

nextButton.onclick = function () {
    showSlider('next');
}
preButton.onclick = function () {
    showSlider('pre');
}
let unAcceptClick;
function showSlider(type) {
    nextButton.style.pointerEvents='none';
    preButton.style.pointerEvents='none';
    coreusel.classList.remove('pre','next')
    let item = document.querySelectorAll('.carosel .list .item');
    if (type ==='next') {
        listHtml.appendChild(item[0]);
        coreusel.classList.add('next');
    }else{
        let positionLast = item.length -1;
        listHtml.prepend(item[positionLast]);
        coreusel.classList.add('pre');
    }
    clearTimeout(unAcceptClick)
    unAcceptClick = setTimeout(()=>{
        nextButton.style.pointerEvents='auto';
        preButton.style.pointerEvents='auto';
    },2000)
}
seeMoreButton.forEach(button =>{
    button.onclick = function () {
        coreusel.classList.add('showDetail');
    }
})
backButton.onclick = function () {
    coreusel.classList.remove('showDetail');
}