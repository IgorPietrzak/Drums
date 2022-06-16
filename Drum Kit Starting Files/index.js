// query selector all gives array of all buttons

//  DETECTING MOUSE PRESS:

for(let i = 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        matchSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// DETECTING KEYBOARD PRESS:

document.addEventListener("keydown", function(event) {
    matchSound(event.key);
    buttonAnimation(event.key);
});

function matchSound(key) {
    switch (key) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            const kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            break;
       }  
};

function buttonAnimation(currentKey) {
    document.querySelector("button." + currentKey).classList.add("pressed");
    setTimeout(() => {document.querySelector("button." + currentKey).classList.remove("pressed")}, 100)
};