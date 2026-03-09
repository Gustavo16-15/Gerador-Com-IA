/* 
    Variável - Pedacinho de memória
    que eu posso guardar o que eu quiser

    Função - Pedacinho de código QUE só EXECUTA
    Quando é chamado

    Algoritmo - Receita do Bolo
    Lógica de Programação -  Fazer o bolo

    // Algoritmo do nosso sistema
    // Lógica de programação

    [x] Saber quem é o botão
    [x] Saber quando o botão foi clicado
    [x] Saber quem é o textarea  
    [x] Pegar o que tem dentro dele
    [x] Enviar para a IA
    [x] Pegar a resposta da IA e colocar na tela 
    [/] Estilizar a resposta     

    // Ir no HTML e pegar o botão
    // HTML = document (documento)
    // Selecionar (querySelector)
    // Quem ? Botão
    // Apelido para o botão - classes(class) = .

*/


// Descobri quem é o botao
let botao = document.querySelector(".botaoGerar");
// querySelector - é um método do objeto document que permite selecionar o primeiro elemento que corresponde a um seletor CSS especificado. 
// Ele retorna o elemento encontrado ou null se nenhum elemento corresponder ao seletor. No caso, estamos selecionando o elemento com a classe "botaoGerar" 
// e armazenando uma referência a ele na variável botao.

let chave = "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"
// chave de acesso para a API da Groq, que é necessária para autenticar as solicitações feitas à API.
// observação : So pode ser usada mesma chave apenas uma vez. Para criar uma chave nova deixarei o link do site que eu usei para criar essa chave no README.md.
let endececo = "https://api.groq.com/openai/v1/chat/completions"
// URL do endpoint da API da Groq para criar uma nova conclusão de chat. Essa URL é usada para enviar solicitações POST à API, onde o corpo da solicitação conterá os dados necessários para gerar a resposta da IA com base na entrada do usuário.

// ficar de olho no botao, quando clicado chamar o gerar
botao.addEventListener("click", gerar);
// vizinho curioso (addEventListener)
// adicionar ouvinte de eventos
// Evento = clique, digitei...

// Criei a funcao que será chamada quando clicar no botao
async function gerar() {
    // O uso de async/await é fundamental porque a resposta da IA não é instantânea; o código precisa "esperar" a internet trazer o dado de volta.

    let caixaTexto = document.querySelector(".caixaTexto");
    // Seleciona o elemento HTML com a classe "caixaTexto" e armazena uma referência a ele na variável caixaTexto. 
    // Essa caixa de texto é onde o usuário digitará sua solicitação para a IA.

    let blocoCodigo = document.querySelector(".bloco-codigo");
    // Seleciona o elemento HTML com a classe "bloco-codigo" e armazena uma referência a ele na variável blocoCodigo.

    let resultadoCodigo = document.querySelector(".resultado-codigo");
    // Seleciona o elemento HTML com a classe "resultado-codigo" e armazena uma referência a ele na variável resultadoCodigo.

    let resposta = await fetch(endececo, {
        //  fetch - ferramenta do JS para se comunicar com o servidor ,armazenada na variavel resposta, e pegar a variavel endececo onde tem a URL da API .

        // abaixo tem as configurações da requisição , o que eu quero enviar para a API e como quero enviar

        method: "POST", // method - método HTTP que indica o tipo de ação a ser realizada no recurso especificado. No caso, "POST" é usado para enviar dados ao servidor para criar um novo recurso ou realizar uma ação específica.

        headers: {  // headers - cabeçalhos HTTP que fornecem informações adicionais sobre a solicitação.  

            "Content-Type": "application/json", // "Content-Type": "application/json" é um cabeçalho HTTP que indica que o corpo da solicitação está no formato JSON (JavaScript Object Notation). 
            // Isso informa ao servidor que os dados enviados na solicitação devem ser interpretados como um objeto JSON, permitindo que o servidor processe corretamente a informação recebida.

            "Authorization": "Bearer " + chave // "Authorization": "Bearer "+ chave é um cabeçalho HTTP usado para autenticação.
            //É aqui que você prova quem você esta usando a sua chave (API Key). O "Bearer" é um padrão comum de autenticação.
        },

        body: JSON.stringify({ // Corpo da mensagem
            // JSON.stringify: Transforma o objeto do JavaScript em uma linha de texto (string) que o servidor consegue ler.

            model: "openai/gpt-oss-120b", //Especifica qual "cérebro" da IA você quer usar.

            messages: [{ //Aqui você define o comportamento.
                role: "system",// role: "system" é um papel especial que define o comportamento ou as instruções para a IA. Ele é usado para fornecer orientações sobre como a IA deve responder às mensagens subsequentes.
                content: "Você é um gerador de codigos  de HTML, CSS e JavaScript. Responda apenas com codigo puro dentro das tags de código nada elementos fora das tags , sem explicações ou comentários.  "
                // content: " é a instrução que define o comportamento da IA. Ela orienta a IA a agir como um gerador de códigos HTML, CSS e JavaScript, e a responder apenas com código puro dentro das tags de código, sem incluir elementos fora das tags ou fornecer explicações ou comentários adicionais.
            },
            {
                role: "user", // role: "user" é um papel que representa a entrada do usuário. Ele é usado para enviar mensagens ou solicitações à IA, indicando o que o usuário deseja ou pergunta.
                content: caixaTexto.value // content: caixaTexto.value é a mensagem que o usuário digitou na caixa de texto. O valor da caixa de texto é capturado usando a propriedade value, e essa mensagem é enviada para a IA como parte da interação, permitindo que a IA responda com base na solicitação do usuário.
            }

            ]
        })

    })
    let dados = await resposta.json();
    // resposta.json() é um método que converte a resposta da API, que geralmente está em formato JSON, em um objeto JavaScript que pode ser facilmente manipulado no código. 
    // O uso de await garante que o código espere até que a conversão seja concluída antes de prosseguir para a próxima linha, onde os dados convertidos são armazenados na variável dados.

    let resultado = dados.choices[0].message.content;
    // dados.choices[0].message.content é uma expressão que acessa a resposta gerada pela IA, onde "choices" é um array de opções de resposta, "0" indica a primeira opção (caso haja mais de uma), "message" é o objeto que contém a mensagem gerada, e "content" é a propriedade que contém o texto da resposta.

    blocoCodigo.textContent = resultado;
    // blocoCodigo.textContent = resultado é uma linha de código que define o conteúdo de texto do elemento HTML referenciado por blocoCodigo para o valor da variável resultado.
    // Isso significa que a resposta gerada pela IA será exibida como texto dentro do elemento HTML associado a blocoCodigo.
    // .textContent é uma propriedade que define ou retorna o conteúdo de texto de um elemento, e ao atribuir resultado a ela, estamos atualizando o conteúdo do elemento para mostrar a resposta da IA como texto.   

    resultadoCodigo.srcdoc = resultado;
    // resultadoCodigo.srcdoc = resultado é uma linha de código que define o conteúdo HTML do elemento iframe referenciado por resultadoCodigo para o valor da variável resultado.
    // Isso significa que a resposta gerada pela IA, que é esperada ser um código HTML, será renderizada dentro do iframe associado a resultadoCodigo, permitindo que o usuário veja o resultado visualmente como se fosse uma página web.
    // .srcdoc é uma propriedade específica de iframes que permite definir o conteúdo HTML diretamente, sem a necessidade de carregar um arquivo externo. Isso é útil para exibir o código gerado pela IA de forma visual dentro do iframe.

    let resultadoLimpo = limparFence(resultado);
    // A variável resultadoLimpo é criada para armazenar o resultado da função limparFence aplicada ao resultado gerado pela IA. A função limparFence é responsável por remover as marcações de código (fences) do código gerado pela IA, resultando em um código limpo que pode ser exibido de forma adequada no elemento HTML.

    blocoCodigo.textContent = resultadoLimpo;
    resultadoCodigo.srcdoc = resultadoLimpo;
    // As linhas blocoCodigo.textContent = resultadoLimpo e resultadoCodigo.srcdoc = resultadoLimpo atualizam o conteúdo do elemento HTML referenciado por blocoCodigo e o conteúdo do iframe referenciado por resultadoCodigo para o valor da variável resultadoLimpo, que é o código limpo sem as marcações de código (fences). 
    // Isso garante que a resposta gerada pela IA seja exibida de forma adequada, sem as marcações de código, tanto como texto quanto como renderização visual no iframe.

    console.log(dados);
    // console.log(dados) é uma linha de código que imprime o conteúdo da variável dados no console do navegador. Isso é útil para depuração, permitindo que o desenvolvedor veja a estrutura e o conteúdo dos dados recebidos da API, facilitando a identificação de possíveis problemas ou a compreensão da resposta da IA.


}

function limparFence(codigo) {
    // A função limparFence é responsável por remover as marcações de código (fences) do código gerado pela IA. As marcações de código são usadas para indicar que o conteúdo dentro delas é código, mas para exibir o código de forma limpa, essas marcações precisam ser removidas.

    let codigoLimpo = codigo.replace(/```(html|css|javascript)?/g, "");
    // codigo.replace(/```(html|css|javascript)?/g, "") é uma expressão que utiliza uma expressão regular para encontrar e remover as marcações de código (fences) do código gerado pela IA. A expressão regular /```(html|css|javascript)?/g encontra todas as ocorrências das marcações de código e as substitui por uma string vazia, resultando em um código limpo.

    return codigoLimpo;
    // A função retorna o código limpo, sem as marcações de código, para que possa ser exibido de forma adequada no elemento HTML.
}


