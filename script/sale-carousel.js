let slide = document.querySelectorAll('.slide');
let slideList = document.querySelector('.carousel .boxes');


function sliderMove(direction) {
    stopAutoSlide()
    let item = document.querySelectorAll('.carousel .boxes .slide');
    if (direction==='next') {
        slideList.appendChild(item[0]);
    } else {
        slideList.prepend(item[item.length-1]);
    }
    startAutoSlide()
}

let intervalId;
function startAutoSlide() {
    intervalId = setInterval(function() {
        sliderMove('next');
    }, 3000);
}
function stopAutoSlide() {
    clearInterval(intervalId);
}
startAutoSlide()