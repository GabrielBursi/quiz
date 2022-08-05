import mod from './modul.js';

let btn = document.querySelectorAll(".alternativa-input")
let res = document.querySelector(".btn-responder-container")
let final = document.querySelector(".btn-finalizar-container")
let refazer = document.querySelector(".btn-refazer-container")
let campoPergunta = document.getElementById("pergunta")
let lab1 = document.getElementById("primeiro-label")
let lab2 = document.getElementById("segundo-label")
let lab3 = document.getElementById("terceiro-label")
let i = 1

campoPergunta.textContent = mod.perguntas[0]

  lab1.innerText = mod.respostas[0].opcao1
  lab2.innerText = mod.respostas[0].opcao2
  lab3.innerText = mod.respostas[0].opcao3



btn[0].addEventListener("click", function(){
  if(btn[0].checked || btn[1].checked || btn[2].checked){
    res.innerHTML = "<button id='btn-enviar'>Responder</button>"
  }
  if(lab1.innerText === mod.respostas[5].opcao1){
    console.log("Certo!")
    mod.respostasCertas.push(mod.respostasCertas.length + 1)
    console.log(mod.respostasCertas)
  }
  if(lab1.innerText === mod.respostas[6].opcao1){
    console.log("Certo!")
    mod.respostasCertas.push(mod.respostasCertas.length + 1)
    console.log(mod.respostasCertas)
  }
})

btn[1].addEventListener("click", function(){
  if(btn[0].checked || btn[1].checked || btn[2].checked){
    res.innerHTML = "<button id='btn-enviar'>Responder</button>"
  }
  if(lab2.innerText === mod.respostas[3].opcao2){
    console.log("Certo!")
    mod.respostasCertas.push(mod.respostasCertas.length + 1)
    console.log(mod.respostasCertas)
  }
  if(lab2.innerText === mod.respostas[4].opcao2){
    console.log("Certo!")
    mod.respostasCertas.push(mod.respostasCertas.length + 1)
    console.log(mod.respostasCertas)
  }
  if(lab2.innerText === mod.respostas[7].opcao2){
    console.log("Certo!")
    mod.respostasCertas.push(mod.respostasCertas.length + 1)
    console.log(mod.respostasCertas)
  }
  if(lab2.innerText === mod.respostas[8].opcao2){
    console.log("Certo!")
    mod.respostasCertas.push(mod.respostasCertas.length + 1)
    console.log(mod.respostasCertas)
  }
})

btn[2].addEventListener("click", function(){
  if(btn[0].checked || btn[1].checked || btn[2].checked){
    res.innerHTML = "<button id='btn-enviar'>Responder</button>"
  }
  if(lab3.innerText === mod.respostas[0].opcao3){
    console.log("Certo!")
    mod.respostasCertas.push(mod.respostasCertas.length + 1)
    console.log(mod.respostasCertas)
  }
  if(lab3.innerText === mod.respostas[1].opcao3){
    console.log("Certo!")
    mod.respostasCertas.push(mod.respostasCertas.length + 1)
    console.log(mod.respostasCertas)
  }
  if(lab3.innerText === mod.respostas[2].opcao3){
    console.log("Certo!")
    mod.respostasCertas.push(mod.respostasCertas.length + 1)
    console.log(mod.respostasCertas)
  }
  if(lab3.innerText === mod.respostas[9].opcao3){
    console.log("Certo!")
    mod.respostasCertas.push(mod.respostasCertas.length + 1)
    console.log(mod.respostasCertas)
  }
})

res.addEventListener("click", function(){
  if(i==mod.perguntas.length){
    campoPergunta.textContent = mod.perguntas[i-1]
    lab1.innerText = mod.respostas[i-1].opcao1
    lab2.innerText = mod.respostas[i-1].opcao2
    lab3.innerText = mod.respostas[i-1].opcao3
    res.innerHTML= ""
    final.innerHTML = "<button id='btn-finalizar'>Finalizar</button>"
  }else{
    btn[0].checked = false
    btn[1].checked = false
    btn[2].checked = false
    res.innerHTML=""

    campoPergunta.textContent = mod.perguntas[i]

    lab1.innerText = mod.respostas[i].opcao1
    lab2.innerText = mod.respostas[i].opcao2
    lab3.innerText = mod.respostas[i].opcao3
    i++
  }
})

final.addEventListener("click", function(){
  final.innerHTML=""
  refazer.innerHTML = "<button id='btn-refazer'>Refazer Quiz?</button>"
  let acertos = document.querySelector(".acertos")
  acertos.innerHTML=`Voce acertou ${mod.respostasCertas.length}/10`
  console.log(`Voce acertou ${mod.respostasCertas.length}/10`)
})

refazer.addEventListener("click", function() {
  i=1
  mod.respostasCertas=[]
  btn[0].checked = false
  btn[1].checked = false
  btn[2].checked = false
  refazer.innerHTML =""
  campoPergunta.textContent = mod.perguntas[0]

  lab1.innerText = mod.respostas[0].opcao1
  lab2.innerText = mod.respostas[0].opcao2
  lab3.innerText = mod.respostas[0].opcao3
})