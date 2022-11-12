console.log("Arati, I love you. aaja timro yaad ma banaudai xu yo  app");

window.addEventListener("load",()=>{
    document.getElementById("preloader").style.display="none";
    });


window.addEventListener("keydown", checkevent);

function checkevent(event){
    var eKey = event.key;
    console.log(eKey);

    switch(eKey){
        case " ":
            hit_kick();
            break;
        case "v":
            hit_snare();
            break;
        case "t":
            hit_ride();
            break;
        case "r":
            hit_crash();
            break;
        case "g":
            hit_ltom();
            break;
         case "h":
            hit_rtom();
            break;
        case "b":
            hit_ftom();
            break;
        case "c":
            hit_cHihat();
            break;
        case "f":
            hit_oHihat();
            break;

    }
}





//  for kick drum


const kick = document.querySelector('.kick');
kick.addEventListener("click", hit_kick);
// console.log(kick);
function hit_kick(){
    var audio = new Audio("./Asset/audio/kick.mp3");
    audio.play();
    kick.innerHTML="<img src='./Asset/image/kick_hit.png'> ";
    console.log("played");
    
    const time = setTimeout(revert, 100);
    
    function revert() {
        kick.innerHTML="<img src='./Asset/image/kick.png'>";
        console.log("revert");

    }

};
// this one is for snare 
const snare = document.querySelector('.snare');
snare.addEventListener("click", hit_snare);
// console.log(kick);
function hit_snare(){
    var audio = new Audio("./Asset/audio/snare.mp3");
    audio.play();
    snare.innerHTML="<img src='./Asset/image/snare_hit.png'> ";
    console.log("played");
    
    const time = setTimeout(revert, 100);
    
    function revert() {
        snare.innerHTML="<img src='./Asset/image/snare.png'>";
        console.log("revert");

    }

};

const Chihat = document.querySelector('.close_hihat');
Chihat.addEventListener("click", hit_cHihat);
// console.log(kick);
function hit_cHihat(){
    var audio = new Audio("./Asset/audio/c_hihat.mp3");
    audio.play();
    Chihat.innerHTML="<img src='./Asset/image/chihat_hit.png'> ";
    console.log("played");
    
    const time = setTimeout(revert, 100);
    
    function revert() {
        Chihat.innerHTML="<img src='./Asset/image/chihat.png'>";
        console.log("revert");

    }

};


const Ohihat = document.querySelector('.open_hihat');
Ohihat.addEventListener("click", hit_oHihat);
// console.log(kick);
function hit_oHihat(){
    var audio = new Audio("./Asset/audio/o_hihat.mp3");
    audio.play();
    Ohihat.innerHTML="<img src='./Asset/image/ohihat_hit.png'> ";
    console.log("played");
    
    const time = setTimeout(revert, 100);
    
    function revert() {
        Ohihat.innerHTML="<img src='./Asset/image/ohihat.png'>";
        console.log("revert");

    }

};


const Ltom = document.querySelector('.ltom');
Ltom.addEventListener("click", hit_ltom);
// console.log(kick);
function hit_ltom(){
    var audio = new Audio("./Asset/audio/l_tom.mp3");
    audio.play();
    Ltom.innerHTML="<img src='./Asset/image/Ltom_hit.png'> ";
    console.log("played");
    
    const time = setTimeout(revert, 100);
    
    function revert() {
        Ltom.innerHTML="<img src='./Asset/image/Ltom.png'>";
        console.log("revert");

    }

};

const Rtom = document.querySelector('.rtom');
Rtom.addEventListener("click", hit_rtom);
// console.log(kick);
function hit_rtom(){
    var audio = new Audio("./Asset/audio/r_tom.mp3");
    audio.play();
    Rtom.innerHTML="<img src='./Asset/image/Rtom_hit.png'> ";
    console.log("played");
    
    const time = setTimeout(revert, 100);
    
    function revert() {
        Rtom.innerHTML="<img src='./Asset/image/Rtom.png'>";
        console.log("revert");

    }

};


const Floortom = document.querySelector('.floortom');
Floortom.addEventListener("click", hit_ftom);
// console.log(kick);
function hit_ftom(){
    var audio = new Audio("./Asset/audio/f_tom.mp3");
    audio.play();
    Floortom.innerHTML="<img src='./Asset/image/Ftom_hit.png'> ";
    console.log("played");
    
    const time = setTimeout(revert, 100);
    
    function revert() {
        Floortom.innerHTML="<img src='./Asset/image/Ftom.png'>";
        console.log("revert");

    }

};

const Ride = document.querySelector('.ride');
Ride.addEventListener("click", hit_ride);
// console.log(kick);
function hit_ride(){
    var audio = new Audio("./Asset/audio/ride.mp3");
    audio.play();
    Ride.innerHTML="<img src='./Asset/image/ride_hit.png'> ";
    console.log("played");
    
    const time = setTimeout(revert, 100);
    
    function revert() {
        Ride.innerHTML="<img src='./Asset/image/ride.png'>";
        console.log("revert");

    }

};

const Crash = document.querySelector('.crash');
Crash.addEventListener("click", hit_crash);

function hit_crash(){
    var audio = new Audio("./Asset/audio/crash.mp3");
    audio.play();
    Crash.innerHTML="<img src='./Asset/image/crash_hit.png'>";

    const time = setTimeout(revert, 100);

    function revert(){
        Crash.innerHTML="<img src='./Asset/image/crash.png'>";
    }
}


// instrution menu 




const Instruction= document.querySelector(".instruction");
Instruction.addEventListener('click',showInstruction);
const display_popup= document.querySelector(".popup-container");

function showInstruction(){
    display_popup.innerHTML="<div class='popup'><h2>Drum manual</h2><H4> Press following key:</H4><h5>Kick: space</h5><h5>Close Hi-Hat: c</h5><h5>Open Hi-Hat: f</h5><h5>Snare: v</h5><h5>Left Tom: g</h5><h5>Right Tom: h</h5><h5>Floor Tom: b</h5><h5>Crash: r</h5><h5>Ride: t</h5><button class ='exit' onclick='exitInstrution()'> Let's play</button></div>";
}

const ExitInstruction=document.querySelector(".exit");
ExitInstruction.addEventListener('click',exitInstrution);
// const hide_popup=document.querySelector(".popup-container");
function exitInstrution(){
    display_popup.innerHTML=" ";
    console.log("gayo popup ko instrution");
}

