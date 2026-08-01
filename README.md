# 💜 Portfólio Pessoal

## 📖 Sobre o projeto

Este projeto consiste no desenvolvimento de uma **Landing Page (Portfólio Pessoal)** utilizando HTML5, CSS3 e JavaScript.

O objetivo é apresentar informações profissionais, habilidades, áreas de interesse e disponibilizar funcionalidades interativas, proporcionando uma navegação simples, intuitiva e agradável.

Além da apresentação pessoal, o projeto demonstra conhecimentos em estilização, manipulação do DOM, consumo de API e organização de código.

---

# 🚀 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- API ViaCEP
- Git
- GitHub
- Visual Studio Code

---

# 📂 Estrutura do projeto

```
Portfolio/
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   ├── viacep.js
│   └── animations.js
│
├── img/
│
├── index.html
│
└── README.md
```

---

# ✨ Funcionalidades

- Menu de navegação
- Hero Section
- Botão "Saiba Mais"
- Scroll suave entre as seções
- Botão "Voltar"
- Botão "Voltar ao Início"
- Notificação personalizada
- Cards de competências
- Formulário de contato
- Consulta de CEP utilizando a API ViaCEP
- Tratamento para CEP inválido
- Animações e efeitos de Hover

---

# 🎨 Estilização (CSS)

## Reset CSS

```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
```

### Explicação

Remove as margens e espaçamentos padrão do navegador e facilita o cálculo do tamanho dos elementos utilizando `box-sizing: border-box`.

---

## Flexbox

```css
header{
    display:flex;
    justify-content:center;
    align-items:center;
}
```

### Explicação

O Flexbox foi utilizado para organizar os elementos do cabeçalho.

- **display:flex** ativa o Flexbox.
- **justify-content:center** centraliza os elementos na horizontal.
- **align-items:center** centraliza os elementos na vertical.

---

## CSS Grid

```css
.cards{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
}
```

### Explicação

Organiza os cards em uma grade de três colunas.

A propriedade **gap** define o espaçamento entre eles.

---

## Hover

```css
.card:hover{
    transform:translateY(-10px);
}
```

### Explicação

Ao passar o mouse sobre um card, ele se desloca levemente para cima, criando um efeito visual de destaque.

---

## Linha personalizada

```css
.linha-coracao::after{
    content:"💜";
}
```

### Explicação

O pseudo-elemento **::after** adiciona um coração ao centro da linha horizontal sem necessidade de inseri-lo no HTML.

---

## Animação

```css
@keyframes brilho
```

### Explicação

Foi utilizada para criar um efeito de brilho no título principal da página através da propriedade **text-shadow**.

---

# 💻 JavaScript

## Seleção de elementos

```javascript
const botao = document.getElementById("btnSaibaMais");
```

### Explicação

O método **getElementById()** localiza um elemento do HTML através do seu identificador (id), permitindo manipulá-lo com JavaScript.

---

## Eventos

```javascript
botao.addEventListener("click", function(){
```

### Explicação

O método **addEventListener()** adiciona um evento ao elemento.

Neste projeto foi utilizado para executar ações quando o usuário clica em um botão.

---

## Scroll suave

```javascript
scrollIntoView({
    behavior:"smooth"
});
```

### Explicação

Realiza um deslocamento suave da página até a seção desejada.

---

## setTimeout()

```javascript
setTimeout(function(){

},3000);
```

### Explicação

Executa uma função após um intervalo de tempo.

Foi utilizado para esconder automaticamente a notificação exibida ao usuário.

---

## Consumo da API

```javascript
fetch(`https://viacep.com.br/ws/${cep}/json/`)
```

### Explicação

O método **fetch()** realiza uma requisição para a API ViaCEP utilizando o CEP informado pelo usuário.

---

## Conversão da resposta

```javascript
.then(function(resposta){
    return resposta.json();
})
```

### Explicação

Converte a resposta da API para o formato JSON, permitindo acessar os dados retornados.

---

## Exibição dos dados

```javascript
resultadoCep.innerHTML = ...
```

### Explicação

O método **innerHTML** altera dinamicamente o conteúdo de um elemento HTML, exibindo as informações do endereço consultado.

---

## Tratamento de erro

```javascript
if(dados.erro){
```

### Explicação

Verifica se o CEP informado não existe.

Caso isso aconteça, uma mensagem personalizada é exibida ao usuário.

---

# 🌐 API utilizada

## ViaCEP

A API ViaCEP foi utilizada para consultar automaticamente informações de localização a partir de um CEP informado pelo usuário.

São exibidos:

- Logradouro
- Bairro
- Cidade
- Estado

Também foi implementado o tratamento para CEP inexistente.

---

# 🎯 Objetivo do projeto

Este projeto teve como objetivo aplicar conceitos fundamentais do desenvolvimento Front-end, colocando em prática conhecimentos sobre:

- Estruturação de páginas com HTML5;
- Estilização utilizando CSS3;
- Organização de layouts com Flexbox e Grid;
- Manipulação do DOM com JavaScript;
- Eventos;
- Animações;
- Consumo de APIs utilizando Fetch API;
- Tratamento de erros;
- Organização de arquivos.

---

# 👩‍💻 Desenvolvido por

**Letícia Leão**
