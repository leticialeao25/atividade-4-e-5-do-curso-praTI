# 📚 Anotações de Estudo

## Sobre este arquivo

Este documento reúne os principais conceitos que aprendi durante o desenvolvimento do meu portfólio utilizando HTML, CSS, JavaScript, Git e GitHub.

O objetivo é servir como um material de consulta para revisar conteúdos estudados e acompanhar minha evolução como desenvolvedora.

---

# HTML

## HTML Semântico

O HTML semântico utiliza tags que descrevem o significado do conteúdo da página, tornando o código mais organizado, acessível e fácil de entender.

### Principais tags

### `<header>`

Representa o cabeçalho da página.

Normalmente contém:

- Logo
- Nome do projeto
- Menu de navegação

---

### `<nav>`

Agrupa os links responsáveis pela navegação da página.

---

### `<section>`

Organiza o conteúdo em diferentes seções.

Cada seção representa um assunto específico.

---

### `<footer>`

Representa o rodapé da página.

Pode conter:

- Direitos autorais
- Contatos
- Redes sociais

---

### `<div>`

É um contêiner genérico utilizado para organizar elementos.

Não possui significado semântico.

---

### `<button>`

Cria um botão clicável que pode executar funções utilizando JavaScript.

---

### `<form>`

Cria formulários para envio de informações.

---

### `<input>`

Campo utilizado para entrada de dados.

---

### `<textarea>`

Campo destinado para textos maiores, como mensagens.

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

### O que aprendi

Remove as margens e espaçamentos padrão do navegador, permitindo maior controle sobre o layout.

---

## Box Model

Todo elemento HTML é composto por:

- Content
- Padding
- Border
- Margin

---

## display: flex

Ativa o Flexbox.

É utilizado para alinhar elementos.

### Principais propriedades

```css
display:flex;
justify-content:center;
align-items:center;
```

### justify-content

Alinha os elementos horizontalmente.

Exemplos:

- center
- space-between
- space-around
- space-evenly

---

### align-items

Alinha os elementos verticalmente.

---

## display:grid

Organiza elementos em linhas e colunas.

Exemplo:

```css
display:grid;
grid-template-columns:repeat(3,1fr);
```

---

## gap

Define o espaçamento entre elementos do Grid ou Flexbox.

---

## Hover

```css
button:hover{

}
```

Executa um efeito quando o mouse passa sobre um elemento.

---

## Transition

```css
transition:.3s;
```

Cria uma animação suave entre dois estados.

---

## Transform

```css
transform:translateY(-10px);
```

Move um elemento.

Também pode ser utilizado para:

- scale()
- rotate()
- translate()

---

## Border Radius

Arredonda os cantos de um elemento.

---

## Box Shadow

Adiciona sombra aos elementos.

---

## Text Shadow

Adiciona sombra aos textos.

Foi utilizada na animação do título principal.

---

## @keyframes

Permite criar animações personalizadas.

---

## ::after

Pseudo-elemento utilizado para criar conteúdo sem alterar o HTML.

Foi utilizado para inserir o coração na linha decorativa.

---

## :focus

É aplicado quando um campo recebe o foco do usuário.

Muito utilizado em formulários.

---

# JavaScript

## Variáveis

```javascript
const
```

Utilizada para armazenar valores que não serão alterados.

---

## getElementById()

Seleciona um elemento utilizando o id.

```javascript
document.getElementById("btnSaibaMais");
```

---

## addEventListener()

Adiciona um evento ao elemento.

Exemplo:

```javascript
botao.addEventListener("click", function(){

});
```

---

## Eventos

Os principais eventos estudados foram:

- click
- focus

---

## Função

```javascript
function(){

}
```

Bloco de código executado quando chamado.

---

## Scroll suave

```javascript
scrollIntoView({

    behavior:"smooth"

});
```

Move a página até uma seção.

---

## setTimeout()

Executa uma função após um determinado tempo.

Foi utilizado para esconder automaticamente uma notificação.

---

## classList

Permite manipular classes CSS.

### Métodos utilizados

```javascript
classList.add()
classList.remove()
```

---

## innerHTML

Altera o conteúdo HTML de um elemento.

---

## Fetch API

Utilizada para realizar requisições para servidores.

Exemplo:

```javascript
fetch(url)
```

---

## Promise

Representa uma operação assíncrona.

Métodos utilizados:

```javascript
.then()

.catch()
```

---

## JSON

Formato utilizado para troca de informações entre aplicações.

---

## Condicional

```javascript
if(){

}
```

Permite executar uma ação somente quando determinada condição for verdadeira.

Foi utilizada para verificar se o CEP existe.

---

# API ViaCEP

Foi a primeira API que utilizei.

Durante esse projeto aprendi:

- consumir APIs;
- utilizar Fetch;
- trabalhar com JSON;
- exibir dados na tela;
- validar informações;
- tratar erros.

---

# Git

## git status

Mostra o estado atual dos arquivos.

---

## git add

Adiciona arquivos para a área de preparação.

---

## git commit

Cria um ponto de salvamento do projeto.

---

## git push

Envia os commits para o GitHub.

---

## Branches

Aprendi a trabalhar com duas branches.

### main

Versão principal do projeto.

### develop

Versão utilizada para desenvolvimento.

---

# GitHub

Aprendi a:

- criar repositórios;
- enviar projetos;
- criar commits;
- trabalhar com branches;
- utilizar README;
- criar documentação técnica.

---

# Conceitos que reforçei durante o projeto

- HTML semântico
- Organização de arquivos
- Flexbox
- CSS Grid
- Box Model
- Hover
- Transition
- Keyframes
- Manipulação do DOM
- Eventos
- Scroll suave
- Fetch API
- JSON
- Promises
- Tratamento de erros
- Git
- GitHub

---

# Próximos assuntos para estudar

- Responsividade
- Media Queries
- CSS Flexbox avançado
- CSS Grid avançado
- JavaScript ES6+
- Arrow Functions
- Async/Await
- LocalStorage
- APIs REST
- Node.js
- React
- TypeScript

---

# Considerações finais

Este documento será atualizado continuamente durante meus estudos.

A intenção é registrar os conhecimentos adquiridos em cada projeto, servindo como um material de consulta e acompanhando minha evolução na área de desenvolvimento de software.

---

**Desenvolvido por**

**Letícia Leão**