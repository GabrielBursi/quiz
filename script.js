let btn = document.querySelectorAll(".alternativa-input")
let res = document.querySelector(".btn-container")
let campoPergunta = document.getElementById("pergunta")
let lab1 = document.getElementById("primeiro-label")
let lab2 = document.getElementById("segundo-label")
let lab3 = document.getElementById("terceiro-label")
let i = 1

var perguntas = [
  "Dentro de qual elemento HTML colocamos o JavaScript?",
  "Onde é o lugar correto para inserir o JavaScript?",
  "Qual atributo abaixo não pertence a tag <a>?",
  "O que significa CSS?",
  "Qual tag HTML é usada para definir uma folha de estilo interna?",
  "Qual não é um tipo de dado JavaScript?",
  "Qual palavra-chave é usada para criar uma variável JavaScript?",
  "O que não é um elemento HTML5?",
  "Qual propriedade é usada para alterar a cor do texto de um elemento?",
  "var a = []; O que 'typeof a' retorna?"
]

var respostas = [{
  opcao1:"<js>",
  opcao2:"<javascript>",
  opcao3:"<script>"
},
{
  opcao1:"<head>",
  opcao2:"<body>",
  opcao3:"Os dois estão corretos"
},
{
  opcao1:"target",
  opcao2:"src",
  opcao3:"title"
},
{
  opcao1:"Computer Style Sheets",
  opcao2:"Cascading Style Sheets",
  opcao3:"Creative Style Sheets"
},
{
  opcao1:"<css",
  opcao2:"<style>",
  opcao3:"<script>"
},
{
  opcao1:"boolean",
  opcao2:"undefined",
  opcao3:"double"
},
{
  opcao1:"var",
  opcao2:"string",
  opcao3:"variable"
},
{
  opcao1:"header",
  opcao2:"section",
  opcao3:"blink"
},
{
  opcao1:"textcolor",
  opcao2:"color",
  opcao3:"fontcolor"
},
{
  opcao1:"object",
  opcao2:"array",
  opcao3:"undefined"
}]

campoPergunta.textContent = perguntas[0]

lab1.innerText = respostas[0].opcao1
lab2.innerText = respostas[0].opcao2
lab3.innerText = respostas[0].opcao3

function alternativa(){
  if(btn[0].checked || btn[1].checked || btn[2].checked){
    res.innerHTML = "<button id='btn-enviar' onclick='responder()'>Responder</button>"
  }
}

function responder(){
  if(i==perguntas.length){
    campoPergunta.textContent = perguntas[i-1]
    lab1.innerText = respostas[i-1].opcao1
    lab2.innerText = respostas[i-1].opcao2
    lab3.innerText = respostas[i-1].opcao3
    res.innerHTML= "<button id='btn-enviar' onclick='finalizar()'>Finalizar</button>"
  }else{
    btn[0].checked = false
    btn[1].checked = false
    btn[2].checked = false
    res.innerHTML=""

    campoPergunta.textContent = perguntas[i]

    lab1.innerText = respostas[i].opcao1
    lab2.innerText = respostas[i].opcao2
    lab3.innerText = respostas[i].opcao3
    i++
  }
}