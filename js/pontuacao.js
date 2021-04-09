if(localStorage.getItem('pontos')==0){
    document.querySelector(".mostraPontuacao").innerHTML = `Triste ${localStorage.getItem("nome")} vc não fez nenhum ponto`
}else if(localStorage.getItem('pontos') == 1){
    document.querySelector(".mostraPontuacao").innerHTML = `Parabéns ${localStorage.getItem("nome")} Você fez ${localStorage.getItem("pontos")} ponto`
}else{
    document.querySelector(".mostraPontuacao").innerHTML = `Parabéns ${localStorage.getItem("nome")} Você fez ${localStorage.getItem("pontos")} pontos`
}



