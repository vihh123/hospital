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
                afirmacao: "afirmação"
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
                texto: "SIM, EU GOSTARIA",
                afirmacao: "afirmação"
            },
            {
                texto: "NAO estou apenas conhecendo?.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "voce esta a procura de algum especialista expecifico?",
        alternativas: [
            {
                texto: " SIM, estou a procura.",
                afirmacao: "afirmação"
            },
            {
                texto: " POR ENQUANTO NAO.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "VOCE JA CONHECE OU CONHECIA NOSSO HOSPITAL?",
        alternativas: [
            {
                texto: "SIM, JA OUVI FALAR DO HSOPITAL.",
                afirmacao: "afirmação"
            },
            {
                texto: "NAO,ESTOU CONHECENDO AGORA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "PODEMOS TE AJUDAR MAIS EM ALGUMA COISA? ",
        alternativas: [
            {
                texto: "SIM AINDA TENHO DUVIDAS.",
                afirmacao: "afirmação"
            },
            {
                texto: "NAO, ESTOU SATISFEITO(A).",
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
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
