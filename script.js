let etapa = 1;

const historia = document.getElementById("historia");
const opcao1 = document.getElementById("opcao1");
const opcao2 = document.getElementById("opcao2");

function atualizarJogo(){

    if(etapa === 1){

        historia.innerHTML = "🍕 Você abriu uma pizzaria. Qual pizza vai preparar?";

        opcao1.innerHTML = "Calabresa";
        opcao2.innerHTML = "Frango com Catupiry";

    }

    else if(etapa === 2){

        historia.innerHTML = "😋 O cliente adorou a pizza! Agora escolha a bebida.";

        opcao1.innerHTML = "Refrigerante";
        opcao2.innerHTML = "Suco";

    }

    else if(etapa === 3){

        historia.innerHTML = "🎉 Parabéns! Sua pizzaria fez muito sucesso!";

        opcao1.innerHTML = "Jogar novamente";
        opcao2.style.display = "none";

    }

    else if(etapa === 4){

        historia.innerHTML = "😢 O cliente não gostou e foi embora.";

        opcao1.innerHTML = "Tentar novamente";
        opcao2.style.display = "none";

    }

}

opcao1.onclick = function(){

    if(etapa === 1){

        etapa = 2;

    }

    else if(etapa === 2){

        etapa = 3;

    }

    else{

        etapa = 1;
        opcao2.style.display = "block";

    }

    atualizarJogo();

}

opcao2.onclick = function(){

    if(etapa === 1){

        etapa = 4;

    }

    else if(etapa === 2){

        etapa = 4;

    }

    atualizarJogo();

}

atualizarJogo();