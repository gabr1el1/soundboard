const keys = document.querySelectorAll('.key');
const container= document.querySelector('.container');
let keySelected,desc;
let repeatedEvent = false;
container.addEventListener('keydown',keysPressed);
container.addEventListener('keyup',unablePressed);
container.focus();

keys.forEach(key=>{
    key.addEventListener('mousedown',()=>keyClicked(key.id));
    key.addEventListener('mouseup',unablePressed);
});

function unablePressed(){
    keySelected.classList.remove('pressed');
    desc.classList.remove('pressed');
    repeatedEvent = false;
}
//function for the keys
function keysPressed(e){
    if(!repeatedEvent){
        let letter = e.key.toLowerCase();
        let audio;
        playSound(letter);
        repeatedEvent = true;
        
}};
//function for the clics
function keyClicked(letter){
    letter = letter.toLowerCase();
    playSound(letter);
    
}

function playSound(letter){
    switch (letter){
        case "a":
            keySelected = document.getElementById(letter);
            desc = keySelected.querySelector('.desc');
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/omg.mp3");
            audio.play();
            break;
        case "s":
            keySelected = document.getElementById(letter);
            desc = keySelected.querySelector('.desc');
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/wth.mp3");
            audio.play();
            break;
        case "d":
            keySelected = document.getElementById(letter);
            desc = keySelected.querySelector('.desc');
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/aah.mp3");
            audio.play();
            break;
        case "f":
            keySelected = document.getElementById(letter);
            desc = keySelected.querySelector('.desc');
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/waitWhat.mp3");
            audio.play();
            break;
        case "g":
            keySelected = document.getElementById(letter);
            desc = keySelected.querySelector('.desc');
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/brazil.mp3");
            audio.play();
            break;
        case "h":
            keySelected = document.getElementById(letter);
            desc = keySelected.querySelector('.desc');
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/dtyoudead.mp3");
            audio.play();
            break;
        case "j":
            keySelected = document.getElementById(letter);
            desc = keySelected.querySelector('.desc');
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/boom.mp3");
            audio.play();
            break;
        case "k":
            keySelected = document.getElementById(letter);
            desc = keySelected.querySelector('.desc');
            keySelected.classList.add('pressed');
            audio = new Audio("./sounds/bonk.mp3");
            audio.play();
            desc.classList.add('.pressed');
            break;
        case "l":
            keySelected = document.getElementById(letter);
            desc = keySelected.querySelector('.desc');
            keySelected.classList.add('pressed');
            audio = new Audio("./sounds/pianoDross.mp3");
            audio.play();
            desc.classList.add('.pressed');
            break;
        default:
            keySelected = document.getElementById("a");

        }
}
