//carousel atumatic
let imgIndex = 0;
carouselAuto();

function carouselAuto() 
{
  let i;
  let imgList = document.getElementsByClassName("carousel-item");
  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }
  imgIndex++;
  if (imgIndex > imgList.length) {
      imgIndex = 1;
  }
  imgList[imgIndex-1].style.display = "block";
  setTimeout(carouselAuto, 6000); // Change images every 2 seconds
}

//carousel by nav
let slideIndex = 1;
showSlides(slideIndex);

function plus(n) {
  showSlides(slideIndex += n);
}

function less(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
} 

