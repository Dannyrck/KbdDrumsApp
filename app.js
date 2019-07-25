console.log('¡Hey no deberías de estar aquí!... Descuida, todo esta funcionando perfectamente 😉');
window.addEventListener('keypress', playSound);

function removeTransition(e){

    if(e.propertyName !== "transform") return; // salimos de la funcion si no es transform
    // console.log(this);
    this.classList.remove('playing');
}

    function playSound(e){
    // console.log(e.keyCode);
    // const audio = document.querySelectorAll("audio");
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if(!audio) return // detiene la funcion
    audio.currentTime = 0;
    audio.play();
    // console.log(audio);

    const key = document.querySelector(`div.key[data-key='${e.keyCode}']`);
    key.classList.add('playing');
} 

document.onreadystatechange = function(){
    if(document.readyState == "interactive") {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    }
}