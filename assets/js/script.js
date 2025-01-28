var choice;
var botChoice = ["rock","paper","scissors","lizard","spock"];

const modal = document.querySelector(".container__modal");
// Jogador
const iconColor = document.querySelector(".answerIcon");
const bgImg = document.querySelector("#img-answer");

// bot 
const iconColorBot = document.querySelector(".answerIconBot");
const bgImgBot = document.querySelector("#img-answerBot");

// Containers
const containerBody = document.querySelector(".container__body ");
const containerAnswer = document.querySelector(".container__answer");

// Decide
const decideText = document.querySelector("#decide");

// Placar
const score = document.querySelector("#score");
var scoreCount = 0;

var resultGame = {
    'rock': {
        'rock': 'Draw',
        'paper': 'You lost',
        'scissors': 'You won',
        'spock' : 'You lost',
        'lizard' : 'You won',
    },
    'paper': {
        'rock': 'You won',
        'paper': 'Draw',
        'scissors': 'You lost',
        'spock' : 'You won',
        'lizard' : 'You lost'
    },
    'scissor': {
        'rock': 'You lost',
        'paper': 'You won',
        'scissors': 'Draw',
        'spock' : 'You lost',
        'lizard' : 'You won'
    },
    'spock': {
        'rock': 'You won',
        'paper': 'You lost',
        'scissors': 'You won',
        'spock' : 'Draw',
        'lizard' : 'You lost'
    },
    'lizard': {
        'rock': 'You lose',
        'paper': 'You won',
        'scissors': 'You lost',
        'spock' : 'You won',
        'lizard' : 'Draw'
    }
};

function YourChoice(choice){
    // Aparecer e desaprecer modais
    containerBody.style.display = "none";
    containerAnswer.style.display = "flex";

    // Animações
    containerAnswer.classList.add("animationBounce");
    containerBody.classList.remove("animationFade");

    // Gerar escolha do Boy
    let i = Math.floor(Math.random() * 5);

    switch(botChoice[i]){
        case "rock":
            iconColorBot.classList.add("rock");
            bgImgBot.src = "./images/icon-rock.svg";
        break;
        case "paper":
            iconColorBot.classList.add("paper");
            bgImgBot.src = "./images/icon-paper.svg";
        break;
        case "scissors":
            iconColorBot.classList.add("scissor");
            bgImgBot.src = "./images/icon-scissors.svg";
        break;
        case "lizard":
            iconColorBot.classList.add("lizard");
            bgImgBot.src = "./images/icon-lizard.svg";
        break;
        case "spock":
            iconColorBot.classList.add("spock");
            bgImgBot.src = "./images/icon-spock.svg";
        break;
    }

    switch(choice){
        case "rock":
            iconColor.classList.add("rock");
            bgImg.src = "./images/icon-rock.svg";
        break;
        case "paper":
            iconColor.classList.add("paper");
            bgImg.src = "./images/icon-paper.svg";
        break;
        case "scissor":
            iconColor.classList.add("scissor");
            bgImg.src = "./images/icon-scissors.svg";
        break;
        case "lizard":
            iconColor.classList.add("lizard");
            bgImg.src = "./images/icon-lizard.svg";
        break;
        case "spock":
            iconColor.classList.add("spock");
            bgImg.src = "./images/icon-spock.svg";
        break;
    }

    // Lógica
    decideText.innerHTML = resultGame[choice][botChoice[i]];

    (resultGame[choice][botChoice[i]] == 'You lost') ? (
        scoreCount = 0,
        score.innerHTML = scoreCount,
        iconColorBot.classList.add("animationZoom")
    ) : (resultGame[choice][botChoice[i]] == 'You won') ? (
        scoreCount += 1,
        score.innerHTML = scoreCount,
        iconColor.classList.add("animationZoom")
    ) : (
        iconColorBot.classList.add("animationZoom"),
        iconColor.classList.add("animationZoom")
    );

} 

// Estilização

function CloseOpenGame(){
    containerBody.style.display = "flex";
    containerAnswer.style.display = "none";

    // Reset animações
    containerBody.classList.add("animationFade");
    containerAnswer.classList.remove("animationBounce");
    iconColor.classList.remove("animationPulse");
    iconColorBot.classList.remove("animationPulse");
    iconColorBot.classList.remove("animationZoom");
    iconColor.classList.remove("animationZoom");

    // Removendo classes
    iconColor.classList.remove("rock","paper","scissor","lizard","spock");
    iconColorBot.classList.remove("rock","paper","scissor","lizard","spock");
}

function AbrirModalRules(){
    modal.style.display = "flex";
}

function FecharModalRules(){
    modal.style.display = "none";
}