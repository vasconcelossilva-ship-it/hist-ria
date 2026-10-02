let etapa = 1;
let afirmacoes = []; // Armazena as decisões da Alice

const historia = document.getElementById("historia");
const opcao1 = document.getElementById("opcao1");
const opcao2 = document.getElementById("opcao2");
const opcao3 = document.getElementById("opcao3");

function atualizarJogo() {
    if (etapa === 1) {
        historia.innerHTML = "🍕 Alice abriu sua pizzaria. Qual sabor de pizza ela vai preparar para o primeiro cliente?";
        opcao1.innerHTML = "Calabresa com Acebolado";
        opcao2.innerHTML = "Frango com Catupiry";
        opcao3.innerHTML = "Pizza de Abacaxi com Alho";
        
        opcao1.style.display = "block";
        opcao2.style.display = "block";
        opcao3.style.display = "block";
    } 
    else if (etapa === 2) {
        historia.innerHTML = "😋 O cliente adorou a pizza! Agora, qual bebida a Alice deve oferecer?";
        opcao1.innerHTML = "Refrigerante gelado";
        opcao2.innerHTML = "Suco natural de Laranja";
        opcao3.innerHTML = "Água morna sem gás";

        opcao1.style.display = "block";
        opcao2.style.display = "block";
        opcao3.style.display = "block";
    } 
    else if (etapa === 3) {
        historia.innerHTML = "🍰 O refeição principal foi um sucesso! Qual sobremesa a Alice vai servir?";
        opcao1.innerHTML = "Pizza Doce de Chocolate";
        opcao2.innerHTML = "Pudim da Casa";
        opcao3.innerHTML = "Sopa quentinha";

        opcao1.style.display = "block";
        opcao2.style.display = "block";
        opcao3.style.display = "block";
    }
    else if (etapa === 4) {
        // Vitória final e exibição das afirmações acumuladas
        const resumoAfirmacoes = afirmacoes.join(" ");
        historia.innerHTML = `🎉 **Parabéns! A pizzaria da Alice foi um sucesso absoluto!**