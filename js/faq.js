//récupérer la classe accordion
 let accs = document.getElementsByClassName("accordion");

for ( let acc of accs) {;
    acc.onclick = function() {
        this.classList.toggle("active");
        //récupérer le prochain élément après le bouton
        let answer = this.nextElementSibling;
             // add display block or none / remove display 
        if (answer.classList.contains("d-block")) {
        answer.classList.remove("d-block");
        answer.classList.add("d-none");
        } 
        else if(answer.classList.contains("d-none")){
        answer.classList.remove("d-none"); 
        answer.classList.add("d-block");   
        // aadd transition        
        } if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        } 
        else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        };
    }
}
