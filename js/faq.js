//récupérer la classe accordion
 let accs = document.getElementsByClassName("accordion");
    
for ( let acc of accs) {;
    acc.onclick = function() {
        //récupérer le prochain élément après le bouton
        let answer = this.nextElementSibling;
             // ajouter display block ou none / enlever le display 
        if (answer.classList.contains("d-block")) {
        answer.classList.remove("d-block");
        answer.classList.add("d-none");
        } else if(answer.classList.contains("d-none")){
            answer.classList.remove("d-none"); 
                answer.classList.add("d-block");    
        } 
    }
}


