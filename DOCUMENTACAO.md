# 📚 Documentação Técnica

# Portfólio Pessoal

---

# 📖 Introdução

Este documento apresenta a explicação técnica do desenvolvimento do projeto **Portfólio Pessoal**, construído utilizando HTML5, CSS3 e JavaScript.

O objetivo desta documentação é descrever o funcionamento dos principais trechos do código, as tecnologias utilizadas e os recursos aplicados durante o desenvolvimento.

---

# Estrutura do Projeto

```
Portfolio/

│── css/
│   └── style.css
│
│── js/
│   ├── script.js
│   ├── viacep.js
│   └── animations.js
│
│── img/
│
│── index.html
│
├── README.md
└── DOCUMENTACAO.md
```

---

# CSS

## Reset CSS

```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
```

### Explicação

O seletor universal (`*`) aplica as propriedades a todos os elementos da página.

### margin

Remove todas as margens padrão definidas pelo navegador.

### padding

Remove os espaçamentos internos padrão.

### box-sizing

A propriedade `border-box` faz com que largura e altura considerem bordas e espaçamentos internos.

Isso facilita o cálculo do tamanho dos elementos.

---

# Body

```css
body{
    background-color:#0F172A;
    color:#F8FAFC;
    font-family:Arial, Helvetica, sans-serif;
    line-height:1.6;
}
```

## Explicação

Define a aparência geral da página.

### background-color

Define a cor de fundo.

### color

Define a cor padrão dos textos.

### font-family

Define a fonte utilizada.

### line-height

Aumenta o espaçamento entre as linhas, melhorando a leitura.

---

# Header

```css
header{

    display:flex;

    justify-content:center;

    align-items:center;

}
```

## Explicação

O Header utiliza **Flexbox** para organizar seus elementos.

### display:flex

Ativa o Flexbox.

### justify-content

Alinha os elementos horizontalmente.

### align-items

Alinha os elementos verticalmente.

---

# Menu de navegação

```css
nav ul{

    display:flex;

    gap:30px;

    list-style:none;

}
```

## Explicação

O menu também utiliza Flexbox.

### gap

Define o espaço entre cada item.

### list-style

Remove as bolinhas da lista.

---

# Botões

```css
button{

    cursor:pointer;

    transition:.3s;

}
```

## Explicação

### cursor

Altera o cursor para uma mãozinha quando o usuário passa sobre o botão.

### transition

Cria uma transição suave entre um estado e outro.

---

# Hover

```css
button:hover{

    transform:translateY(-3px);

}
```

## Explicação

Ao passar o mouse sobre o botão ele sobe 3 pixels, criando um efeito de destaque.

---

# Grid

```css
.cards{

    display:grid;

    grid-template-columns:repeat(3,1fr);

}
```

## Explicação

Utiliza CSS Grid para organizar os cards.

### repeat()

Cria três colunas iguais.

### 1fr

Cada coluna ocupa a mesma quantidade de espaço disponível.

---

# Linha personalizada

```css
.linha-coracao::after{

    content:"💜";

}
```

## Explicação

Utiliza o pseudo-elemento `::after` para inserir um coração no centro da linha sem precisar adicioná-lo ao HTML.

---

# Keyframes

```css
@keyframes brilho
```

## Explicação

Cria uma animação personalizada utilizada no título principal.

Durante a animação é alterada a propriedade `text-shadow`, produzindo um efeito de brilho.

---

# JavaScript

## Seleção de elementos

```javascript
const botao = document.getElementById("btnSaibaMais");
```

### Explicação

Seleciona um elemento do HTML utilizando seu identificador (`id`).

Esse elemento poderá ser manipulado pelo JavaScript.

---

# Eventos

```javascript
addEventListener()
```

## Explicação

Permite executar uma ação quando um evento acontece.

Neste projeto foi utilizado principalmente o evento **click**.

Exemplo:

```javascript
botao.addEventListener("click", function(){

});
```

---

# Scroll suave

```javascript
scrollIntoView({

    behavior:"smooth"

});
```

## Explicação

Move a página automaticamente até um determinado elemento.

O parâmetro `"smooth"` torna a rolagem suave.

---

# setTimeout()

```javascript
setTimeout(function(){

},3000);
```

## Explicação

Executa uma função após um intervalo de tempo.

Foi utilizado para esconder automaticamente a notificação.

---

# classList

```javascript
classList.add()

classList.remove()
```

## Explicação

Adiciona ou remove classes CSS dinamicamente.

Neste projeto foi utilizado para mostrar e esconder a notificação.

---

# Fetch API

```javascript
fetch(`https://viacep.com.br/ws/${cep}/json/`)
```

## Explicação

Realiza uma requisição HTTP para a API ViaCEP utilizando o CEP informado pelo usuário.

---

# Promise

```javascript
.then(function(resposta){

});
```

## Explicação

A Promise aguarda o retorno da API antes de continuar a execução do código.

---

# Conversão para JSON

```javascript
return resposta.json();
```

## Explicação

Converte os dados recebidos da API para um objeto JavaScript.

---

# innerHTML

```javascript
resultadoCep.innerHTML = ...
```

## Explicação

Altera o conteúdo HTML de um elemento.

Foi utilizado para mostrar as informações do endereço pesquisado.

---

# Estrutura condicional

```javascript
if(dados.erro){

}
```

## Explicação

Verifica se a API retornou um erro.

Caso o CEP seja inválido, uma mensagem personalizada é exibida ao usuário.

---

# API ViaCEP

A API ViaCEP foi utilizada para consultar automaticamente informações de localização.

Os dados exibidos são:

- Logradouro
- Bairro
- Cidade
- Estado

Também foi implementado o tratamento para CEP inexistente.

---

# Recursos utilizados

Durante o desenvolvimento foram utilizados:

- HTML5
- CSS3
- JavaScript
- Flexbox
- CSS Grid
- Hover
- Transition
- Keyframes
- Box Shadow
- Border Radius
- Manipulação do DOM
- Eventos
- Fetch API
- JSON
- API ViaCEP

---

# Considerações finais

Este projeto possibilitou a aplicação prática de conceitos fundamentais do desenvolvimento Front-end, incluindo estruturação de páginas, estilização, interatividade, manipulação do DOM e consumo de APIs.

Além disso, foram aplicadas boas práticas de organização de arquivos, comentários no código e separação das funcionalidades em diferentes arquivos JavaScript, tornando o projeto mais organizado, reutilizável e de fácil manutenção.

---

## Desenvolvido por

**Letícia Leão**

Projeto desenvolvido para fins acadêmicos e para composição do portfólio pessoal.