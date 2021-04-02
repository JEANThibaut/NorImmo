
// Fonction calcul du prix total
function Price(){
    //Récupérer la valeur de l'élement HTML user_surface
    let userSurface=document.getElementById("user_surface").value;
    
    //Calcul du prix de la surface
    let surfacePrice=userSurface * 1000;
    
    //Récupérer la valeur de l'élement HTML user_chambers
    let userChambers=document.getElementById("user_chambers").value;
    
    // Calcul du prix des chambres
    let chambersPrice=userChambers* 10000;
    
    //Calcul du prix de la surface et des chambres
    let priceWithoutPourcent = surfacePrice + chambersPrice;
    
    //Choix du matériaux
    let userChoice = document.getElementById("selected").value;
   

    let total= (priceWithoutPourcent*userChoice)+priceWithoutPourcent;
    console.log("total "+total)

}







