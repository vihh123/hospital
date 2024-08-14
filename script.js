const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "voce precisa de atendimento?",
        alternativas: [
            {
                texto: "SIM, eu preciso!",
                afirmacao: "não preciso."
            },
            {
                texto: "NAO obrigado(a)?!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "VOCE GOSTARIA DE MARCAR ALGUMA CONSULTA?",
        alternativas: [
            {
                texto: "SIM, eu gostaria,"
                afirmacao: "afirmação"
            },
            {
                texto: "NAO estou apenas conhecendo?.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "VOCE ESTA A PROCURA DE ALGUMA EXPECIALISTA EXPECIFICO?",
        alternativas: [
            {
                texto: " SIM, estou a procura.",
                afirmacao: "afirmação"
            },
            {
                texto: " Não.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "VOCE JA CONHECE OU CONHECIA NOSSO HOSPITAL?",
        alternativas: [
            {
                texto: "SIM, CONHEÇO.",
                afirmacao: "afirmação"
            },
            {
                texto: "Não.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "VOCE TEM ALGUMA DUVIDA? ",
        alternativas: [
            {
                texto: "Sim, ainda tenho.",
                afirmacao: "afirmação"
            },
            {
                texto: "NAO, estou satisfeito(A).",
                afirmacao: "afirmação"
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
    caixaPerguntas.textContent = "em 2024,";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
