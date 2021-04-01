
//Récupérer la valeur de l'élement HTML user_surface
// let user_surface= document.getElementById("user_surface").value;
// console.log(user_surface);

// Fonction calcul du prix total
function Price(){
    //Récupérer la valeur de l'élement HTML user_surface
    let userSurface= document.getElementById("user_surface").value;
    console.log(userSurface);
    //Calcul du prix de la surface
    let surfacePrice=userSurface * 1000;
    console.log(surfacePrice);

    //Récupérer la valeur de l'élement HTML user_chambers
    let userChambers= document.getElementById("user_chambers").value;
    console.log(userChambers);
    // Calcul du prix des chambres
    let chambersPrice=userChambers* 10000;
    console.log(chambersPrice);
    //Calcul du prix de la surface et des chambres
    let priceWithoutPourcent = surfacePrice + chambersPrice;
    console.log(priceWithoutPourcent);
}





