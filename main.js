const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll("aba-conteudo");

for(let i=0; i <botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
            
        }

        botoes[i].classList.add("ativo");
        textos[j].classList.add("ativo");
        
    }
}
const contadores = document.querySelectorAll(".contador");
const tempo0objetivo1 = new Date("2024-12-21T00:00:00");
let tempoAtual = new Date();
 contadores[0].textContent = calculaTempo(tempo0objetivo1);
    
let segundos = tempo0objetivo1 - tempoAtual;
let minutos = segundos/60;
let horas = minutos/60;
let dias = horas/24;
