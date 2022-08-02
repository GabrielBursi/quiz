let btn = document.querySelectorAll(".alternativa-input")
let res = document.querySelector(".btn-container")
let campoPergunta = document.getElementById("pergunta")
let lab1 = document.getElementById("primeiro-label")
let lab2 = document.getElementById("segundo-label")
let lab3 = document.getElementById("terceiro-label")
let i = 1

var perguntas = [
  "Qual a linguagem de estilo?",
  "Qual a linguagem de marcação?",
  "Qual dessas linguagens manipula o DOM?"
]

var respostas = [{
  opcao1:"HTML",
  opcao2:"CSS",
  opcao3:"JavaScript"
},
{
  opcao1:"CSS",
  opcao2:"JavaScript",
  opcao3:"HTML"
},
{
  opcao1:"JavaScript",
  opcao2:"HTML",
  opcao3:"CSS"
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