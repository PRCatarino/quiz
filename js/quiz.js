var numeroPergunta = 0
var respostaSelecionada = -1
var pontos = 0

function preenchePerguntaTela(numeroPergunta){
    
    document.getElementById('perguntaTexto').innerHTML = listaPerguntas[numeroPergunta].perguntas;
    document.querySelector('.botoes').innerHTML = ""
    for(let i=0; i<4; i++){
        let resposta = `<p onclick="selecionarResposta(this,${i})" tabindex="0" class="respostasCss">${listaPerguntas[numeroPergunta].respostas[i]}</p>`
        document.querySelector('.botoes').innerHTML = document.querySelector('.botoes').innerHTML + resposta;
    }
    document.querySelector('.divTitulo').innerHTML ='<p>Pergunta '+(numeroPergunta+1 )+' de '+listaPerguntas.length+'</p>'
}

function confirma(){
    if(respostaSelecionada == -1){
        alert("Selecione uma Resposta");
        return
    }

    if(respostaSelecionada == listaPerguntas[numeroPergunta-1].respostasCorreta){
        pontos++;
        localStorage.setItem("pontos",pontos.toString())
        alert("acertou")
    }else{
        alert("errou")
    }
    respostaSelecionada = -1

    if(numeroPergunta == listaPerguntas.length){
        window.location = "/pontuacao"
    }else{
        preenchePerguntaTela(numeroPergunta++)
    }
}

preenchePerguntaTela(numeroPergunta++)

function selecionarResposta(elemento,numeroDaResposta){
    if (document.querySelector(".mudei")){
        document.querySelector(".mudei").className = ""
    }
    elemento.className = 'mudei';
    respostaSelecionada = numeroDaResposta
}

localStorage.setItem("pontos",0)