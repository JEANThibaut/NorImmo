//precBtn.addEvenListener('click', function() {list_Item.style.transition = "transform 0.4s ease-in-out";i++;})//
//suivBtn.addEvenListener('click', function() {list_Item.style.transition = "transform 0.4s ease-in-out";i--;})

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
  setTimeout(carouselAuto, 20000); // Change image every 2 seconds
}


