# Frontend Mentor - Rock, Paper, Scissors solution


Esta é uma solução para o desafio [Rock, Paper, Scissors no Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.


## Table of contents

- [Visão Geral](#Visão-Geral)
  - [O desafio](#O-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#Meu-processo)
  - [Construi com](#Construi-com)
  - [O que eu aprendi](#O-que-eu-aprendi)
  - [Desenvolvimento contínuo](#Desenvolvimento-contínuo)
- [Autor](#Autor)

## Visão-Geral

### O-desafio

Os usuários devem ser capazes de:

- Ver o layout ideal para o jogo, dependendo do tamanho da tela do dispositivo.
- Jogue Pedra, Papel, Tesoura contra o computador
- Manter o estado da pontuação após atualizar o navegador

### Screenshot

![](screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/AleexGarcia/rock-paper-scissors-master#the-challenge)
- Live Site URL: [Add live site URL here](https://aleexgarcia.github.io/rock-paper-scissors-master/)

## Meu-processo

### Construi-com

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### O-que-eu-aprendi

Aprendi a usar o setTimeOut() para criar um transição mais suave entre os elementos exibidos, usar seletor de data-atribute em css, o uso de z-index em elementos flex, uso de gradiente de cores para o background, uso de multiplos shadow-box.


```css
  [data-type="myPick"],
    [data-type="machinePick"] {
        width: 200px;
        height: 200px;
        border-width: calc(160px/5);
        background-size: 33%;
    }

  .header__box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 1.5rem;
    padding: 1rem;
    border: solid hsl(217, 16%, 45%) 2px;
    border-radius: 8px;
    z-index: 1;
    position: relative;
  }

  body {
    font-family: var(--font-family);
    background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    font-weight: 600;
    color: #fff;
    height: calc(100vh - 2rem);
  }
```
```js

function exibeResultado(scoreAux){
    
    if(scoreAux > 0){
        resultado.textContent = 'You win';
        
    }else if(scoreAux < 0){
        resultado.textContent = 'You Lose';
    }else{
        resultado.textContent = 'Draw';
    }

    setTimeout(()=>resultHtml.classList.remove('oculto'),3000);
    setTimeout(()=> resultHtml.classList.add('opacity'),3500)
}

```

### Desenvolvimento-contínuo

Pretendo continuar aperfeiçoando meus conhecimentos em HTML, CSS E JS. Além de estudar mais sobre a area de front-end e melhorar cada vez mais. A proxima etapa um vez que esteja confortavel com esses assuntos seria consumir o maximo de conteudo sobre REACT com typeScript;


## Autor

- Frontend Mentor - [@AleexGarcia](https://www.frontendmentor.io/profile/AleexGarcia)
- Linkedin -[alexandre-garcia-dev89]https://www.linkedin.com/in/alexandre-garcia-dev89/