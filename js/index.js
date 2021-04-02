//class Carousel {
    //parametre 1 : nombre élément visible
    //paramètre 2 : nombre élemnt visible dans slide
    //parametre 3 : le slide est accompagné d'un texte adapté} 

let i=0;
let list_Item= document.getElementsByClassName("carousel-item");
let time = 5000;

function changeImg()
{

    if (i <list_Item.length -1){
        i++
    }
    else {
        i = 0;
    }

    setTimeout("changeImg", time)
}

window.onload = changeImg;

