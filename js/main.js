'use strict'

var gSound = new Audio('sound/puin.mp3');
var gErrorSound = new Audio('sound/error.mp3');
var gWelcomeSound = new Audio('sound/wel.mp3');
var gVictorySound = new Audio('sound/victory.mp3');
var gQuests = createQuests()
var gCurrQuestIdx = 0

function initGame() {
    gCurrQuestIdx = 0;
    gQuests = createQuests()
    createButtons()
    renderImg()
    gWelcomeSound.play()
    document.querySelector('h1').innerHTML = ' In Holywood'
}

function isVictory() {
    var victoryText = `<h1 style="font-size: xx-large">You're master of Holywood!!!</h1>`
    var imgTxt = `<img style="font: size 100px;" src="img/11.jpg"  /><br />`
    gVictorySound.play()
    document.querySelector('.img-container ').innerHTML = imgTxt;
    document.querySelector('.answer-container ').innerHTML = '';
    document.querySelector('h1 ').innerHTML = victoryText;
}


function checkAnswer(optIdx) {
    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        gCurrQuestIdx++
        gSound.play()

        if (gCurrQuestIdx === gQuests.length) isVictory();
        else renderQuest();

    } else gErrorSound.play();

}

function renderQuest() {
    renderImg()
    createButtons()
}

function renderImg() {
    var elImg = document.querySelector('.img-container ')
    var strHTML = ''
    strHTML += `<img class="img" src="img/${gCurrQuestIdx}.jpg" >`
    elImg.innerHTML = strHTML
}


function createButtons() {
    var elAnswer = document.querySelector('.answer-container')
    var strHTML = ''
    var questOpts = gQuests[gCurrQuestIdx].opts
    for (var i = 0; i < questOpts.length; i++) {
        const currOpt = questOpts[i];
        strHTML += `<button class="answer" onclick="checkAnswer(${i})" >${currOpt} </button>`
    }
    elAnswer.innerHTML = strHTML
}

function createQuests() {
    var questions = [];
    var Quest1 = { id: 0, opts: ['Camila Cabello', ' Selena Gomez'], correctOptIndex: 0 }
    var Quest2 = { id: 1, opts: ['Madonna', 'Rihanna'], correctOptIndex: 1 }
    var Quest3 = { id: 2, opts: ['gal gadot', 'Blake Lively'], correctOptIndex: 1 }
    var Quest4 = { id: 3, opts: ['Taylor Swift', 'Genifer Lopez'], correctOptIndex: 0 }
    var Quest5 = { id: 4, opts: ['Britney Speers', 'Ariana Grande'], correctOptIndex: 1 }
    var Quest6 = { id: 5, opts: ['Lily Jane Collins', 'Billie Eilish'], correctOptIndex: 1 }
    var Quest7 = { id: 6, opts: ['Rachel Anne McAdams', 'Ariana Grande'], correctOptIndex: 0 }
    var Quest8 = { id: 7, opts: ['Amanda Seyfried', 'Madonna'], correctOptIndex: 0 }
    var Quest9 = { id: 8, opts: ['Camila Cabello', 'Ariana Grande'], correctOptIndex: 1 }
    var Quest10 = { id: 9, opts: ['Emilia Clarke', 'Taylor Swift'], correctOptIndex: 0 }
    var Quest11 = { id: 10, opts: ['Mila Kunis', 'Emma Stone'], correctOptIndex: 1 }
    questions.push(Quest1, Quest2, Quest3, Quest4, Quest5, Quest6, Quest7, Quest8, Quest9, Quest10, Quest11);
    return questions
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}