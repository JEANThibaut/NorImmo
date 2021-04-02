
// Fonction calcul du prix total
function Price(){
    //Vider les champs à la sélection
    document.getElementById("msgSurface").textContent = "";
    document.getElementById("msgSelect").textContent = "";
     //Récupérer la valeur de l'élement HTML user_surface
    let userSurface=document.getElementById("user_surface").value;
    //Récupérer la valeur de l'élement HTML user_chambers
    let userChambers=document.getElementById("user_chambers").value;
     //Calcul du prix de la surface
    let surfacePrice=userSurface * 1000;
    // Calcul du prix des chambres
    let chambersPrice=userChambers* 10000;
    //Calcul du prix de la surface et des chambres
    let priceWithoutPourcent = surfacePrice + chambersPrice;
    //Choix du matériaux
    let userChoice = document.getElementById("selected").value;
    console.log(userChoice)
    //Calcul du total
    let total= (priceWithoutPourcent*userChoice)+priceWithoutPourcent;
    console.log("total "+total);
    //Message d'erreur et affichage estimation
    if(userSurface == "") {
        document.getElementById("msgSurface").textContent = "Merci d'entrer une surface"
         
    }
    else if (userChoice == "0"){
        document.getElementById("msgSelect").textContent = "Merci de sélectionner un martériaux"
    }
    else{
        document.getElementById("result").textContent = total + "€";  
    }
}









