const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "int",
        "string"
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes é um método para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "write()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual símbolo é usado para comentários de uma única linha em JavaScript?",
      respostas: [
        "//",
        "/*",
        "*/"
      ],
      correta: 0
    },
    {
      pergunta: "Função usada para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para verificar se dois valores são iguais em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para encontrar o comprimento de uma string em JavaScript?",
      respostas: [
        "length()",
        "size()",
        "length"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "pull()"
      ],
        correta: 0
    },
    {
    pergunta: "Qual é a saída do seguinte código: console.log(typeof([]))?",
    respostas: [
    "array",
    "object",
    "undefined"
    ],
    correta: 1
    },
    {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
    "removeLast()",
    "pop()",
    "deleteLast()"
    ],
    correta: 1
    },
    {
    pergunta: "Qual é o símbolo usado para denotar comentários de várias linhas em JavaScript?",
    respostas: [
    "//",
    "/",
    "/"
    ],
    correta: 0
    }
  ];
  const quiz = document.querySelector('#quiz') // o # serve pra especificar que estou pegando pelo id.
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de' + totalDePerguntas
  
  
  
  for(const item of perguntas) {
    //fazendo o clone do item
   const quizItem = template.content.cloneNode(true) //clone node vai clonar um nó ou seja a tag que especifiquei.
  
   //modificando o H3
   quizItem.querySelector('h3').textContent = item.pergunta
  
   //colocando as respostas:
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true) //ele está pegando o dt que está dentro do dl e clonando tudo o que está dentro do dt.
    dt.querySelector('span').textContent = resposta
  
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) //configurando para que o atributo name seja unico para cada pergunta.
  
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
    dt.querySelector('input').onchange = (e) => {
      const estaCorreta = e.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de' + totalDePerguntas
  
    }
  
  
  
  
    quizItem.querySelector('dl').appendChild(dt) //colocando cada resposta do for na tela
  
   }
   
   quizItem.querySelector('dl dt').remove() //remove a resposta A que está no template
  
   //coloca a pergunta na tela.
   quiz.append(quizItem) // está pegando o filho do quiz
  
  }