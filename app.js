listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, `Brazilian Portuguese Female`, {rate: 1.0});
}

function exibirMensagemInicial(){
    exibirTextoNaTela(`h1`, `Jogo do número secreto`);
    exibirTextoNaTela(`p`, `Escolha um número entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector(`input`).value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela(`h1`, `Acertou!`);
        exibirTextoNaTela(`p`, `Você descobriu o número secreto!`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela(`p`, `O número secreto é menor.`);
        } else{
            exibirTextoNaTela(`p`, `O número secreto é maior.`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector(`input`);
    chute.value= ` `;
}

function iniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela(`h1`, `Jogo do número secreto`);
    exibirTextoNaTela(`p`, `Escolha um número entre 1 e ${numeroLimite}`);
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
}