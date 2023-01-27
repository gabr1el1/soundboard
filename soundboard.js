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
        repeatedEvent = true;
        keySelected = document.getElementById(letter);
        desc = keySelected.querySelector('.desc');
        switch (letter){
            case "a":
                keySelected.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("./sounds/omg.mp3");
                audio.play();
                break;
            case "s":
                keySelected.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("./sounds/wth.mp3");
                audio.play();
                break;
            case "d":
                keySelected.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("./sounds/aah.mp3");
                audio.play();
                break;
            case "f":
                keySelected.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("./sounds/waitWhat.mp3");
                audio.play();
                break;
            case "g":
                keySelected.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("./sounds/brazil.mp3");
                audio.play();
                break;
            case "h":
                keySelected.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("./sounds/dtyoudead.mp3");
                audio.play();
                break;
            case "j":
                keySelected.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("./sounds/boom.mp3");
                audio.play();
                break;
            case "k":
                keySelected.classList.add('pressed');
                audio = new Audio("./sounds/bonk.mp3");
                audio.play();
                desc.classList.add('.pressed');
                break;
            case "l":
                keySelected.classList.add('pressed');
                audio = new Audio("./sounds/pianoDross.mp3");
                audio.play();
                desc.classList.add('.pressed');
                break;
    }
}};

function keyClicked(letter){
    letter = letter.toLowerCase();
    console.log(letter);
    keySelected = document.getElementById(letter);
    desc = keySelected.querySelector('.desc');
    switch (letter){
        case "a":
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/omg.mp3");
            audio.play();
            break;
        case "s":
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/wth.mp3");
            audio.play();
            break;
        case "d":
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/aah.mp3");
            audio.play();
            break;
        case "f":
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/waitWhat.mp3");
            audio.play();
            break;
        case "g":
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/brazil.mp3");
            audio.play();
            break;
        case "h":
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/dtyoudead.mp3");
            audio.play();
            break;
        case "j":
            keySelected.classList.add('pressed');
            desc.classList.add('.pressed');
            audio = new Audio("./sounds/boom.mp3");
            audio.play();
            break;
        case "k":
            keySelected.classList.add('pressed');
            audio = new Audio("./sounds/bonk.mp3");
            audio.play();
            desc.classList.add('.pressed');
            break;
        case "l":
            keySelected.classList.add('pressed');
            audio = new Audio("./sounds/pianoDross.mp3");
            audio.play();
            desc.classList.add('.pressed');
            break;
    }
}

