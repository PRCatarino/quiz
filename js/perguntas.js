class Pergunta{
    constructor(_pergunta, _respostas, _respostaCorreta){
        this.perguntas = _pergunta;
        this.respostas = _respostas;
        this.respostasCorreta = _respostaCorreta;
    }
}

const listaPerguntas = []

listaPerguntas.push(new Pergunta("Quando foi lançado o primeiro filme do homem de ferro?",["2020","2019","2015","2008"], 1))
listaPerguntas.push(new Pergunta("Quem é o mais forte da Marvel?", ["hulk","homem de ferro","capitão america","Miranha"], 0))
listaPerguntas.push(new Pergunta("Qual é o nome do martelo de Thor?",["Vanir","Mjolnir","Aesir","Norn"],1))
listaPerguntas.push(new Pergunta("No Incrível Hulk, o que Tony diz a Thaddeus Ross no final do filme?",["Que ele quer estudar o Hulk","Que ele sabe sobre a SHIELD","Que eles estão montando uma equipe","Que Thaddeus lhe deve dinheiro"],2))
listaPerguntas.push(new Pergunta("Do que é feito o escudo do Capitão América?",["Adamantium","Vibranium","promécio","Carbonádio"],1))
listaPerguntas.push(new Pergunta(" Os Flerkens são uma raça de alienígenas extremamente perigosos que se assemelha a quê?",["Gatos","Patos",,"répteis",,"Guaxinins"],0))
listaPerguntas.push(new Pergunta("Antes de se tornar Vision, qual é o nome do mordomo de IA do Homem de Ferro?",["HOMER","JARVIS","ALFRED","MARVIN"],1))
listaPerguntas.push(new Pergunta("Qual é o verdadeiro nome da Pantera Negra?",["T'Challa","M'Baku",,"N'Jadaka",,"N'Jobu"],1))
listaPerguntas.push(new Pergunta("Qual é a raça alienígena que Loki envia para invadir a Terra em Os Vingadores?",["Os Chitauri","Os skrulls","The Kree","The Flerkens"],0))
listaPerguntas.push(new Pergunta("Quem foi o último detentor do Pedra do espaço antes de Thanos reivindicá-lo por sua Manopla do Infinito?",["Thor","Loki","O Colecionador","Tony Stark"],1))