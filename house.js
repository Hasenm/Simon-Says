console.log("script running");

const lightbulb1 = document.querySelector('#lightbulb1');
console.log(lightbulb1);
console.log(lightbulb1.classList);

const lightbulb2 = document.querySelector('#lightbulb2');
console.log(lightbulb2);
console.log(lightbulb2.classList)

const lightbulb3 = document.querySelector('#lightbulb3');
console.log(lightbulb3);
console.log(lightbulb3.classList);

const startgame = document.querySelector('#startgame');
console.log(startgame);
console.log(startgame.classList);

var counter = 0
lightbulb_sequence = []

startgame.addEventListener('click', e => {
    console.log('Gosign clicked!');
    startgame.classList.toggle('active')
    counter += 1
    for 0 to counter:
        rand_int = random(0, 3)
         if (rand_int = 0):
            lightbulb1('active')
         if (rand_int = 1):
            lightbulb2('active')
         if (rand_int = 2):
            lightbulb3('active')
        append rand_int to lightbulb_sequence
         setTimeout(.5 s)
});

lightbulb2.addEventListener('click', e => {
    console.log('lightbulb clicked!');
    lightbulb2.classList.toggle('active')
});

lightbulb3.addEventListener('click', e => {
    console.log('lightbulb clicked!');
    lightbulb3.classList.toggle('active')
})

lightbulb1.addEventListener('click', e => {
    console.log("lightbulb1 clicked!")
    lightbulb1.classList.toggle('active')
})


