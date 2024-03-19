window.addEventListener('scroll', function() {
    // Get the scroll position of the page
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Use scrollPosition as needed
    console.log("Scroll position: " + scrollPosition);
    if (scrollPosition>100 && scrollPosition < 745) {
        console.log(`now`);
        // 1100-2300
        let rotateValue = (scrollPosition/100)*2;
        console.log(rotateValue);
        let outerElement = document.querySelector('.welcome-main-middle-left')
        let innerElement = document.querySelector('.welcome-main-middle-left-image');
        outerElement.style.transform=`rotateX(${-rotateValue}deg)`;
        innerElement.style.transform=`rotateY(${rotateValue}deg)`;
    }
});