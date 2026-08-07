const historia = {
    inicio: {
        texto: "Você abriu sua pizzaria. Qual será sua primeira decisão?",
        opcoes: [
            {
                texto: "🍕 Fazer pizza de Calabresa",
                destino: "calabresa"
            },
            {
                texto: "🧀 Fazer pizza de Mussarela",
                destino: "mussarela"
            }
        ]
    },

    calabresa: {
        texto: "Os clientes adoraram! Agora você precisa escolher uma bebida.",
        opcoes: [
            {
                texto: "🥤 Refrigerante",
                destino: "sucesso"
            },
            {
                texto: "💧 Água",
                destino: "normal"
            }
        ]
    },

    mussarela: {
        texto: "Um cliente pediu borda recheada. O que você faz?",
        opcoes: [
            {
                texto: "🧀 Colocar borda recheada",
                destino: "sucesso"
            },
            {
                texto: "❌ Não colocar",
                destino: "fracasso"
            }
        ]
    },

    sucesso: {
        texto: "🎉 Sua pizzaria virou a mais famosa da cidade! Parabéns!",
        opcoes: [
            {
                texto: "🔄 Jogar novamente",
                destino: "inicio"
            }
        ]
    },

    normal: {
        texto: "🙂 O dia terminou com vendas razoáveis.",
        opcoes: [
            {
                texto: "🔄 Tentar novamente",
                destino: "inicio"
            }
        ]
    },

    fracasso: {
        texto: "😢 Os clientes ficaram insatisfeitos e foram embora.",
        opcoes: [
            {
                texto: "🔄 Recomeçar",
                destino: "inicio"
            }
        ]
    }
};

const texto = document.getElementById("texto");
const opcoes = document.getElementById("opcoes");

function mostrarCena(cena){

    texto.textContent = historia[cena].texto;

    opcoes.innerHTML = "";

    historia[cena].opcoes.forEach(opcao => {

        const botao = document.createElement("button");

        botao.textContent = opcao.texto;

        botao.onclick = function(){
            mostrarCena(opcao.destino);
        };

        opcoes.appendChild(botao);

    });

}

mostrarCena("inicio");