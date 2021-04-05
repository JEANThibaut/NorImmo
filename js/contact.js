
//Variables
 let btn=document.getElementById("submit");
 let insults=["connard","connasse","salop","salope","pute","putain","con",
                 "sexe","sex","batard","merde", "enculé", "enculer", "troudebal",
                  "pignouf", "cul", "enfoiré", "enflure", "raclure" ];
  // Functions
function enableSubmit(){
    btn=document.getElementById("submit").classList.add("colorSecond");
    btn=document.getElementById("submit").removeAttribute("disabled", "");
    btn=document.getElementById("submit").setAttribute("enable", "")

}function disableSubmit(){
    btn=document.getElementById("submit").classList.remove("colorSecond");
    btn=document.getElementById("submit").setAttribute("disabled", "");
}

//Check number Case
function numberCase(){
    let userName=document.getElementById("name").value;
    let forename=document.getElementById("forename").value;
        if (userName.length<2 || forename.length<2){
            disableSubmit();
            document.getElementById("msgNbCase").textContent = "Vos Nom et Prénom doivent faire au moins deux caratères";
        }
        else {
            enableSubmit();
        document.getElementById("msgNbCase").textContent ="";
        }
}       
// Function on key press
function textarea(){
    numberCase();
    let message=document.getElementById("message").value.toLowerCase();
    let strLength= message.length;
    let words= message.split(' ');
    document.getElementById("dfCase").textContent="";
    document.getElementById("nbCase").textContent= "Il vous reste " + (400-strLength) + " "+ "caractères";
    document.getElementById("msgInsult").textContent = "";
    //Insults array compar
    for (i=0; i<insults.length; i++){
        for (j=0; j<words.length; j++){
            if(insults[i] == words[j]){
               document.getElementById("msgInsult").textContent = "Merci de ne pas entrer d'insultes dans votre message";
               disableSubmit();
            }
            
        }   
    }
}
