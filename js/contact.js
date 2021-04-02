
let btn=document.getElementById("submit");
let insults=["connard","connasse","salop","salope","pute","putain","con","sexe","sex","batard","merde", "enculé", "troudebal", ]


function keyPress(){
    let message=document.getElementById("message").value.toLowerCase();
    let strLength= message.length;
    let words= message.split(' ');
    
    document.getElementById("dfCase").textContent="";
    document.getElementById("nbCase").textContent= "Il vous reste " + (400-strLength) + " "+ "caractères";
    document.getElementById("msgInsult").textContent = "";

    for (i=0; i<insults.length; i++){
        for (j=0; j<words.length; j++){
            if(insults[i] == words[j]){
               document.getElementById("msgInsult").textContent = "Merci de ne pas mettre d'insultes dans votre message";
               btn=document.getElementById("submit").classList.remove("colorSecond");
               btn=document.getElementById("submit").setAttribute("disabled");
            
            }
        }   
    }    
}
function clearContents(element) {
    element.value = '';
  }