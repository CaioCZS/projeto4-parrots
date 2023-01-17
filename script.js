let contador=0;

function temporizador(){
    contador++
    document.querySelector('.tempo').innerHTML = contador
}
const interval = setInterval(temporizador , 1000);

//relogio acima

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

let card1= "";
let card2 = "";

let jogadas=0;
const revealCard = ({target}) =>{
jogadas++
    if(target.parentNode.parentNode.className.includes('reveal-card')){
        return
    }
    numWin=0

    if(card1 == ""){
        target.parentNode.parentNode.classList.add('reveal-card');
        card1 = target.parentNode.parentNode
    }else if(card2 == ""){
        target.parentNode.parentNode.classList.add('reveal-card');
        card2=target.parentNode.parentNode;

        checkCards();
    }
    for(i=0 ; i<divsCard.length ; i++){
        
        if(divsCard[i].classList.contains('reveal-card')){
            numWin++
        }
        setTimeout(function(){
            if(numWin == deckJogar.length){
                alert(`Você ganhou em ${jogadas} jogadas! A duração do jogo foi de ${contador} segundos!`)
                numWin++
                let resposta = prompt('Gostaria de jogar novamente?(sim ou não)')
               while(resposta !== "sim" && resposta !== "não"){
                resposta = prompt('Gostaria de jogar novamente?(sim ou não)')
               }
               if(resposta === "sim"){
                window.location.reload(true)
            }
                clearInterval(interval)
                
            }
        }, 1000)
    }  
}

function checkCards(){
    const parrot1 = card1.getAttribute('data-parrot');
    const parrot2 = card2.getAttribute('data-parrot')
    
    if(parrot1 === parrot2 ){

        card1='';
        card2='';
    }else{

        setTimeout(function(){
            card1.classList.remove('reveal-card');
            card2.classList.remove('reveal-card');
            
            card1='';
            card2='';
            
        } , 1000)

    }
}
let divsCard;
function addEventListener(){
    divsCard=document. querySelectorAll('.card');
    for(i=0 ; i<divsCard.length ; i++){
divsCard[i].addEventListener('click' , revealCard)
divsCard[i].setAttribute('data-parrot', deckJogar[i]);
    }
}
addEventListener()

