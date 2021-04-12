function jogar(){
    if(document.querySelector(".nome").value ==""){
        alert("Nome Obgrigatorio")
        return
    }
    window.location = "/quiz/quiz"    
}

function mudaTextoV2(elemento){
    document.querySelector(".jogar").innerHTML ="Vamos jogar "+ elemento.value 
    localStorage.setItem("nome", elemento.value)
}