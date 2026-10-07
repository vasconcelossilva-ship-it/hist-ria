// Estrutura das etapas da história usando Objeto JavaScript
const fases = {
    1: {
        texto: "Alice abriu sua pizzaria hoje e recebeu seu primeiro cliente! Qual sabor ela deve sugerir?",
        opcao1: { texto: "Calabresa Especial", proximaFase: 2 },
        opcao2: { texto: "Frango com Catupiry", proximaFase: 3 },
        opcao3: { texto: "Pizza Doce de Morango", proximaFase: 4 }
    },
    2: {
        texto: "O cliente adorou a escolha! Agora, como Alice deve preparar a massa?",
        opcao1: { texto: "Massa fina e crocante no forno a lenha", proximaFase: 5 },
        opcao2: { texto: "Massa grossa recheada com borda de queijo", proximaFase: 6 },
        opcao3: null
    },
    3: {
        texto: "Alice exagerou um pouco no Catupiry e a pizza demorou para assar. O cliente está impaciente. O que Alice faz?",
        opcao1: { texto: "Oferecer um suco cortesia enquanto ele espera", proximaFase: 7 },
        opcao2: { texto: "Apressar o forno e tirar a pizza antes da hora", proximaFase: 8 },
        opcao3: null
    },
    4: {
        texto: "O cliente achou estranho comer pizza doce no almoço e decidiu ir embora.",
        opcao1: { texto: "Tentar novamente", proximaFase: 1 },
        opcao2: null,
        opcao3: null
    },
    5: {
        texto: "🏆 A pizza ficou perfeita! O cliente virou fã e a pizzaria da Alice foi um sucesso total!",
        opcao1: { texto: "Jogar novamente", proximaFase: 1 },
        opcao2: null,
        opcao3: null
    },
    6: {
        texto: "A borda de queijo queimou um pouco, mas o cliente achou saborosa e prometeu voltar.",
        opcao1: { texto: "Jogar novamente", proximaFase: 1 },
        opcao2: null,
        opcao3: null
    },
    7: {
        texto: "A gentileza de Alice salvou o dia! A pizza ficou ótima e o cliente elogiou o atendimento.",
        opcao1: { texto: "Jogar novamente", proximaFase: 1 },
        opcao2: null,
        opcao3: null
    },
    8: {
        texto: "A massa ficou crua por dentro! O cliente reclamou e foi embora insatisfeito.",
        opcao1: { texto: "Tentar novamente", proximaFase: 1 },
        opcao2: null,
        opcao3: null
    }
};

let faseAtual = 1;

// Seleção dos elementos do HTML
const historia = document.getElementById("historia");
const btnOpcao1 = document.getElementById("opcao1");
const btnOpcao2 = document.getElementById("opcao2");
const btnOpcao3 = document.getElementById("opcao3");

function atualizarJogo() {
    const dadosFase = fases[faseAtual];

    // Atualiza o texto da história
    historia.innerText = dadosFase.texto;

    // Configura o Botão 1
    if (dadosFase.opcao1) {
        btnOpcao1.innerText = dadosFase.opcao1.texto;
        btnOpcao1.style.display = "block";
    } else {
        btnOpcao1.style.display = "none";
    }

    // Configura o Botão 2
    if (dadosFase.opcao2) {
        btnOpcao2.innerText = dadosFase.opcao2.texto;
        btnOpcao2.style.display = "block";
    } else {
        btnOpcao2.style.display = "none";
    }

    // Configura o Botão 3
    if (dadosFase.opcao3) {
        btnOpcao3.innerText = dadosFase.opcao3.texto;
        btnOpcao3.style.display = "block";
    } else {
        btnOpcao3.style.display = "none";
    }
}

// Eventos de clique para cada opção
btnOpcao1.onclick = function() {
    if (fases[faseAtual].opcao1) {
        faseAtual = fases[faseAtual].opcao1.proximaFase;
        atualizarJogo();
    }
};

btnOpcao2.onclick = function() {
    if (fases[faseAtual].opcao2) {
        faseAtual = fases[faseAtual].opcao2.proximaFase;
        atualizarJogo();
    }
};

btnOpcao3.onclick = function() {
    if (fases[faseAtual].opcao3) {
        faseAtual = fases[faseAtual].opcao3.proximaFase;
        atualizarJogo();
    }
};

// Inicia o jogo na fase 1
atualizarJogo();