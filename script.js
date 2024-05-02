

    const QandA = document.getElementsByClassName("QandA");
    
///Adding An Event Listener
 for(let i = 0; i < QandA.length; i++){
    QandA[i].addEventListener("click", function seen(){
        QandA[i].classList.toggle("active");
     }) 
     }
   
    
   
  
 