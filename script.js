const imagens=[ 
    "./images/fiestaparrot.gif",
    "./images/bobrossparrot.gif",
    "./images/explodyparrot.gif",
    "./images/metalparrot.gif",
    "./images/revertitparrot.gif",
    "./images/tripletsparrot.gif",
    "./images/unicornparrot.gif"
];
imagens.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}


let qntdCartas;
while(qntdCartas%2 !== 0 || qntdCartas<4 || qntdCartas>14){
    qntdCartas=Number(prompt("Com qunatas carta quer jogar?(escolha um número par entre de 4 à 14)"));
}

const deckJogar=[];
const qntdImgs= qntdCartas / 2;
function cartasProJogo(){
    for(i=0 ; i<qntdImgs ; i++){
        deckJogar.push(imagens[i])
        deckJogar.push(imagens[i])
    }
}
cartasProJogo();
deckJogar.sort(comparador)

//arrumar daqui pra baixo

const deck= document.querySelector(".deck");

function distribuirCartas(parrot){
    
    for(i=0 ; i<qntdCartas ; i++){
        deck.innerHTML+=`
    <div class="card">
        <div class="front-face face">
        <img src="${deckJogar[i]}" >
        </div>
        <div class="back-face face">
        <img src="./images/back.png" />
        </div>
    </div>
        `
    }
}distribuirCartas()

const revealCard = ({target}) =>{
target.parentNode.parentNode.classList.add('reveal-card')
}

function addEventListener(){
    const divsCard=document. querySelectorAll('.card');
    for(i=0 ; i<divsCard.length ; i++){
divsCard[i].addEventListener('click' , revealCard)
    }
}
addEventListener()
