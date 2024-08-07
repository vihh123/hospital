const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voce precisa de algum atendimento? ",
        alternativas: [
            "SIM eu preciso!",
            "Não, apenas quero conhecer como funciona!"
        ]
    },
    {
        enunciado: "Voce sabe como funciona nosso HOSPITAL?",
        alternativas: [
            "SIM,CONHEÇO .",
            "Não .",
        ]
    },
    {
        enunciado: "Voce esta a procura de algum especialista?",
        alternativas: [
            "SIM ESTOU.",
            "NAO."
        ]
    },
    {
        enunciado: "Gostaria de marcar alguma consulta conosco?",
        alternativas: [
            "SIM eu gostaria de marcar uma consulta.",
            "NAO apenas queria mais informações."
        ]
    },
    {
        enunciado: "Você tem alguma duvida sobre o HOSPITAL?",
        alternativas: [
           "SIM, AINDA TENHO.",
            "NAO, ESTOU SATISFEITO(A)."
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
