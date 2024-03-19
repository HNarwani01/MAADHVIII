let targetElements = document.querySelectorAll('.productPrev-main-left .select-item li');

targetElements.forEach(element => {
    element.addEventListener('click', function() {
        // Remove 'active' class from all elements
        document.querySelectorAll('.productPrev-main-left .select-item .active').forEach(active => {
            active.classList.remove('active');
        });

        // Add 'active' class to the clicked element
        element.classList.add('active');
        let imgElement = element.querySelector('img');

        // Get the src attribute of the img element
        let imgSrc = imgElement.getAttribute('src');

        // Call the changeImage function with the imgSrc
        changeImage(imgSrc);
    });
});
function changeImage(src) {
    let changeelment = document.querySelector('.current img');
    changeelment.src= src;
}
// for selecting type of product
let productType = document.querySelectorAll('.option-box button');
productType.forEach(element =>{
    element.addEventListener('click', function () {
        document.querySelectorAll('.option-box .active').forEach(active => {
            active.classList.remove('active');
            element.classList.add('active');
            document.querySelector('.option-box-result p span').innerHTML = element.innerHTML;
        });
    })
})
let colorType = document.querySelectorAll('.color-options .color-box');

colorType.forEach(element => {
    element.addEventListener('click', function () {
        // Remove 'active' class from all elements
        document.querySelectorAll('.color-options .color-box.active').forEach(active => {
            active.classList.remove('active');
        });

        // Add 'active' class to the clicked element
        element.classList.add('active');

        // Update image source using the correct selector
        
        document.querySelector('.color p img').src = element.querySelector('img').getAttribute('src');
    });
});

let sizeType = document.querySelectorAll('.size-boxes button');
sizeType.forEach(element =>{
    element.addEventListener('click', function () {
        document.querySelectorAll('.size-boxes .active').forEach(active => {
            active.classList.remove('active');
        });
        element.classList.add('active');
    })
})
let addLikeProduct = document.querySelectorAll('.fa-heart');
let isHeartSolid = false;
addLikeProduct.forEach(element=>{
    element.addEventListener('click',function () {
        if (isHeartSolid) {
            element.classList.replace('fa-solid', 'fa-regular');
            isHeartSolid = false;

          } else {
            element.classList.replace('fa-regular', 'fa-solid');
            isHeartSolid = true
          }
    })
})

// <i class="fa-sharp fa-solid fa-heart"></i>
{/* <i class="fa-solid fa-heart"></i> */}
{/* <i class="fa-light fa-heart"></i> */}