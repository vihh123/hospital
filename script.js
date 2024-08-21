const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: voce precisa de atendimento?",
        alternativas: [
            {
                texto: "SIM!",
                afirmacao: "afirmação"
            },
            {
                texto: "AINDA NAO!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "GOSTARIA DE MARCAR ALGUAM CONSULTA?",
        alternativas: [
            {
                texto: "SIM EU GOSTARIA.",
                afirmacao: "afirmação"
            },
            {
                texto: "NAO, ESTOU APENAS CONHECENDO.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "VOCE ESTA A PROCURA DE ALGUM EXPECIALISTA?",
        alternativas: [
            {
                texto: "SIM EU PRECISO.",
                afirmacao: "afirmação"
            },
            {
                texto: "NAO OBRIGADO(a).",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "VOCE CONHECE NOSSO ATENDIMENTO?",
        alternativas: [
            {
                texto: "SIM EU JA CONHEÇO",
                afirmacao: "afirmação"
            },
            {
                texto: "SOU NOVO(A) AQUI!.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "VOCE TEM ALGUAM DUVIDA? ",
        alternativas: [
            {
                texto: "SIM AINDA TENHO.",
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
