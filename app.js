console.log("Hola mundo, Todo esta funcionando perfectamente");
window.addEventListener("keypress", (e) => {
    // console.log(e.keyCode);
    // const audio = document.querySelectorAll("audio");
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if(!audio) return // detiene la funcion
    audio.currentTime = 0;
    audio.play();
    // console.log(audio);

} );
