const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Bem vindo(a) podemos te ajudar?",
        alternativas: [
            {
                texto: "sim eu gostaria!",
                afirmacao: "afirmacao. "
            },
            {
                texto: "No momento Não!",
                afirmacao: "afirmacao."
            }
        ]
    },
    {
        enunciado: "Voce ja ouviu falar do Hospital?",
        alternativas: [
            {
                texto: "Sim, ja ouvi falar.",
                afirmacao: "afirmacao."
            },
            {
                texto: "No momento não.",
                afirmacao: "adfirmacao."
            }
        ]
    },
    {
        enunciado: "Voce esta a procura de algum expecialista expecifico?",
        alternativas: [
            {
                texto: "SIM.",
                afirmacao: "afirmacao."
            },
            {
                texto: "NAO.",
                afirmacao: "afirmacao."
            }
        ]
    },
    {
        enunciado: "Gostaria de marcar alguma consulta?",
        alternativas: [
            {
                texto: "SIM, gostaria.",
                afirmacao: "afirmacao."
            },
            {
                texto: "Nao.",
                afirmacao: "afirmacao!"
            }
        ]
    },
    {
        enunciado: "Oque esta achando do nosso atendimento? ",
        alternativas: [
            {
                texto: "Excelente.",
                afirmacao: "afirmacao."
            },
            {
                texto: "Poderia Melhorar!.",
                afirmacao: "afirmacao. "
            }
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
