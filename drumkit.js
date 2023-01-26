const keys = document.querySelectorAll('.key');
const container= document.querySelector('.container');
let keyPressed,desc;
let repeatedEvent = false;
container.addEventListener('keydown',sounds);
container.addEventListener('keyup',unablePressed);
container.focus();
function unablePressed(){
    keyPressed.classList.remove('pressed');
    desc.classList.remove('.pressed');
    repeatedEvent = false;
}
function sounds(e){
    if(!repeatedEvent){
        repeatedEvent = true;
        keyPressed = document.getElementById(e.key.toLowerCase());
        let audio;
        desc = keyPressed.querySelector('.desc');
        switch (e.key.toLowerCase()){
            case "a":
                keyPressed.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("../sounds/omg.mp3");
                audio.play();
                break;
            case "s":
                keyPressed.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("../sounds/wth.mp3");
                audio.play();
                break;
            case "d":
                keyPressed.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("../sounds/aah.mp3");
                audio.play();
                break;
            case "f":
                keyPressed.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("../sounds/waitWhat.mp3");
                audio.play();
                break;
            case "g":
                keyPressed.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("../sounds/brazil.mp3");
                audio.play();
                break;
            case "h":
                keyPressed.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("../sounds/dtyoudead.mp3");
                audio.play();
                break;
            case "j":
                keyPressed.classList.add('pressed');
                desc.classList.add('.pressed');
                audio = new Audio("../sounds/boom.mp3");
                audio.play();
                break;
            case "k":
                keyPressed.classList.add('pressed');
                audio = new Audio("../sounds/bonk.mp3");
                audio.play();
                desc.classList.add('.pressed');
                break;
            case "l":
                keyPressed.classList.add('pressed');
                audio = new Audio("../sounds/pianoDross.mp3");
                audio.play();
                desc.classList.add('.pressed');
                break;
    }
}};

