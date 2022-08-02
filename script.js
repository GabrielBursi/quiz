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
  "Qual atributo abaixo não pertence a tag <a>?"
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