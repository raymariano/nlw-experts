const perguntas = [
    {
     pergunta: "O que é JavaScript?",
     respostas: [
       "Uma linguagem de marcação",
       "Uma linguagem de programação",
       "Um estilo de folha de estilo",
     ],
     correta: 1
    },
    {
     pergunta: "Qual é a função do comando 'console.log()'?",
     respostas: [
       "Exibir uma mensagem de alerta",
       "Registrar dados no console do navegador",
       "Alterar o conteúdo de um elemento HTML",
     ],
     correta: 1
    },
    {
     pergunta: "Qual é o símbolo usado para denotar um comentário de uma única linha em JavaScript?",
     respostas: [
       "//",
       "/* */",
       "<!-- -->",
     ],
     correta: 0
    },
    {
     pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
     respostas: [
       "var myVar = 10;",
       "variable myVar = 10;",
       "let myVar = 10;",
     ],
     correta: 2
    },
    {
     pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
     respostas: [
       "Não há diferença entre eles",
       "'==' compara apenas valores, '===' compara valores e tipos de dados",
       "'===' compara apenas valores, '==' compara valores e tipos de dados",
     ],
     correta: 1
    },
    {
     pergunta: "O que é uma função em JavaScript?",
     respostas: [
       "Um tipo de loop",
       "Um tipo de variável",
       "Um bloco de código reutilizável",
     ],
     correta: 2
    },
    {
     pergunta: "Qual é a função do método 'addEventListener()'?",
     respostas: [
       "Criar um novo elemento HTML",
       "Registrar um manipulador de eventos em um elemento HTML",
       "Alterar a cor de fundo de um elemento HTML",
     ],
     correta: 1
    },
    {
     pergunta: "Qual é a maneira correta de acessar o elemento HTML com o id 'myElement' em JavaScript?",
     respostas: [
       "getElementById('myElement')",
       "document.getElementById('myElement')",
       "#myElement",
     ],
     correta: 1
    },
    {
     pergunta: "O que é um loop 'for' em JavaScript?",
     respostas: [
       "Uma maneira de declarar uma função",
       "Um tipo de estrutura condicional",
       "Um tipo de estrutura de repetição",
     ],
     correta: 2
    },
    {
     pergunta: "Qual é a saída do seguinte código JavaScript: console.log(typeof 'Hello World');?",
     respostas: [
       "number",
       "string",
       "undefined",
     ],
     correta: 1
    },
   ];
    
    const quiz = document.querySelector('#quiz')
   const template = document.querySelector('template')
   
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   
   // loop ou laço de repetição
   for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
   
    for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
   dt.querySelector('input').onchange = (event) => {
   const estaCorreta = event.target.value == item.correta
   
   corretas.delete(item)
   if(estaCorreta) {
   corretas.add(item)
   }
   
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
   }
   
   
   
     quizItem.querySelector('dl').appendChild(dt)
    }
   
   // remover o item Resposta A
    quizItem.querySelector('dl dt').remove()
   
   
     // coloca a pergunta na tela
   quiz.appendChild(quizItem)
   }