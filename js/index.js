//class Carousel {
    //parametre 1 : nombre élément visible
    //paramètre 2 : nombre élemnt visible dans slide
    //parametre 3 : le slide est accompagné d'un texte adapté} 


//precBtn.addEvenListener('click', function() {list_Item.style.transition = "transform 0.4s ease-in-out";i++;})//
//for(let item of selectItems) 
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
  setTimeout(carouselAuto, 2000); // Change image every 2 seconds
}


