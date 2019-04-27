window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c460d3",
        "#d3d160",
        "#16f3b1",
        "#15a7cc"
    ];


    // Lets get going with sound here !!!
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    // create a function that make colors bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});

