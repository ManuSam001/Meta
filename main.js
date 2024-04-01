const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll("aba-conteudo");

for(let i=0; i <botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo")    
         }
        botoes[i].classList.add("ativo");
        textos[j].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempo0objetivo1 = new Date("2024-12-21T00:00:00");
let tempoAtual = new Date();
contadores[0].textContent = calculaTempo(tempo0objetivo1);

function calculaTempo(tempo0objetivo){
 let tempoFinal = tempo0objetivo - tempoAtual;
let segundos = Math.floor(tempoFinal/1000); -
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

segundos %= 60;
minutos %= 60;
horas %= 24;

contadores[0].textContent = dias + " dias " + horas + " horas " + 
minutos + " minutos " + segundos + " sugundos ";
}
    

