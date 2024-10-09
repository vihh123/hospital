export const perguntas = [
    {
        enunciado: "Olá bom dia, do que voce precisa?",
        alternativas: [
            {
                texto: "Preciso de atendimento!",
                afirmacao: [
                    "No início ficou em choque do que essa tecnologia faz.",
                    "O atendimento médico é um pilar fundamental da saúde pública, desempenhando um papel crucial na prevenção, diagnóstico e tratamento de doenças. A qualidade desse atendimento pode influenciar significativamente a qualidade de vida dos pacientes e a eficácia dos sistemas de saúde.."
                ],
                proxima: 1,
            },
            {
                texto: "Estou apenas conhecendo o hospital!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou que IA pode ajudar em questões da sua vida."
                ],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "Claro, posso pegar algumas informações primeiro. Qual é o seu nome e data de nascimento?",
        alternativas: [
            {
                texto: "Meu nome é (seu nome), nasci em (data de nascimento).",
                afirmacao: [
                    "Conseguiu utilizar a IA para buscar informações úteis.",
                    "Percebeu que a IA pode ajudar a encontrar informações úteis na internet de forma mais rápida e direcionada.",
                    "Percebeu que a IA consegue explicar termos complicados de forma simplificada e isso ajudou muito suas pesquisas sobre assuntos complexos."
                ],
                proxima: 3,
            },
            {
                texto: "Meu cpf é (seu cpf) e o (nome do bairro) e (endereço).",
                afirmacao: [
                    "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho.",
                    "Achou que era muito mais fácil procurar por respostas utilizando alguns meios mais tradicionais mesmo que levasse mais tempo.",
                    "Sentiu um pouco de medo de quais dados pessoais seus a IA poderia utilizar e por isso prefere fazer suas coisas com pouca intromissão da tecnologia."
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Obrigada, (seu nome). Você pode me informar qual é o seu sintoma principal?",
        alternativas: [
            {
                texto: "Estou sentindo (seu sintoma)",
                afirmacao: [
                    "Conseguiu utilizar a IA para buscar informações úteis.",
                    "Percebeu que a IA pode ajudar a encontrar informações úteis na internet de forma mais rápida e direcionada.",
                    "Percebeu que a IA consegue explicar termos complicados de forma simplificada e isso ajudou muito suas pesquisas sobre assuntos complexos."
                ],
                proxima: 3,
            },
            {
                texto: "Eu quero um medicamento/consulta",
                afirmacao: [
                    "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho.",
                    "Achou que era muito mais fácil procurar por respostas utilizando alguns meios mais tradicionais mesmo que levasse mais tempo.",
                    "Sentiu um pouco de medo de quais dados pessoais seus a IA poderia utilizar e por isso prefere fazer suas coisas com pouca intromissão da tecnologia."
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Entendi. Vamos priorizar seu atendimento. Vou chamá-la para a triagem. Por favor, aguarde um momento.",
        alternativas: [
            {
                texto: "Ok vou aguardar.",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 5,
            },
            {
                texto: "Quero ser atendido agora.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Obrigada, (seu nome). Você pode me informar qual é o seu sintoma principal?",
        alternativas: [
            {
                texto: "Estou com (seu sintoma).",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 5,
            },
            {
                texto: "Quero um medicamento/consulta (nome do remedio) para meu sintoma.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Olá, (seu nome). Sou a enfermeira Ana. Vou fazer algumas perguntas rápidas. Você pode me contar há quanto tempo está sentindo esses sintomas?/Me passe o nome do medicamento.",
        alternativas: [
            {
                texto: "Começou há cerca de uma hora.",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 7,
            },
            {
                texto: "Quero (nome do medicamento)",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: " Você tem algum histórico de (problema relacionado ao seu sintoma)?",
        alternativas: [
            {
                texto: "Não, nunca tive problemas assim..",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 7,
            },
            {
                texto: "Sim sempre tive (problema relacionado ao sintoma).",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: "Certo. Vou conversar com algum doutor/doutora e irei lhe encaminhar ao consultorio/Pegue seu medicamento aqui.",
        alternativas: [
            {
                texto: "Ok irei esperar.",
                afirmacao: [
                    "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes.",
                    "Ainda acha que os meios de desenho tradicionais são mais eficazes para a criatividade, por isso vem estimulando pessoas em suas redes sociais a fazer pintura em aquarela."
                ],
            },
            {
                texto: "Obrigada(O) pelo atendimento.",
                afirmacao: [
                    "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!",
                    "Compartilhou artes em redes sociais como forma de ensinar como se comunicar através da arte.",
                    "Percebeu que muitas pessoas têm dificuldade em expressar suas ideias desenhando e acha que a IA é capaz de empoderar essas pessoas a tirarem ideias do papel."
                ],
            },
        ]
    }
];
