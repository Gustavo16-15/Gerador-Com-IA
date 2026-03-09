 # GERADOR COM IA
 Esse projeto é uma apricação web interativa , que ultiliza a Inteligencia Artificial para gerar codigo em HTML e JavaScript em tempo real conforme a nessecidade do usuario.

 # FUNCIONALIDADES
Geração Instantânea: Digite o que você precisa e receba o código puro pronto para uso.
Preview em Tempo Real: Visualização do resultado através de um <iframe> dedicado.
Design Moderno: Interface limpa utilizando a fonte Inter.
Integração com IA: Comunicação direta com modelos avançados via fetch API.

 # FERRAMENTAS
*HTML5
*CSS3
*JAVASCRIPT
*API : Conexão com o modelo openai/gpt-oss-120b.

 # COMO FUNCIONA  O PROJETO
 O usuário descreve o que deseja criar (ex: "faça uma bola verde quicando"). Ao clicar no botão Gerar, a aplicação envia essa solicitação para a IA, que retorna o código completo. O sistema então injeta esse código automaticamente no <iframe>, permitindo que o usuário veja a demonstração funcional na hora.

 NOTA:  Cada linha lógica do projeto está detalhadamente comentada no código-fonte para fins educativos.
 
# Comunicação com a API
A aplicação ultiliza a ferramenta fetch do JavaScript para se comunicar com o servidor. Enviamos um objeto JSON contendo:

* System Prompt: Instruções para a IA agir exclusivamente como um gerador de código.

* User Input: Capturado via caixaTexto.value, permitindo que a IA responda dinamicamente ao desejo do usuário.

# Autor 
Gustavo Cordeiro Hernandez - Desenvolvedor Do Progeto e da Documentação
Link do Projeto  https://gustavo16-15.github.io/Gerador-Com-IA/



