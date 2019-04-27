window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");


    // Lets get going with sound here !!!
    pads.forEach(pad => {
        pad.addEventListener('click', function(){
            sounds[3];
        });
    });
});

console.log(sounds);