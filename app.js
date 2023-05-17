const squers = document.querySelectorAll(".squer");
const mole = document.querySelector('.mole');
const time = document.querySelector("#time-left");
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null



function randomsquare() {
squers.forEach(squer =>{
squer.classList.remove('mole')
})

let randomposition = squers[Math.floor(Math.random() * 9)]
randomposition.classList.add("mole")
hitPosition = randomposition.id
console.log(hitPosition)
}

squers.forEach(square =>{
    square.addEventListener("mousedown", () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    } )
})

function moveMole() {
    timerId = setInterval(randomsquare, 600)
}
moveMole()
function countDown() {
currentTime--
time.textContent = currentTime

if(currentTime == 0){
    clearInterval(countDownTimerId)
    clearInterval(score)
    alert('Game over! Your finaly score is ' + result)
}
}

let countDownTimerId = setInterval(countDown, 1000)
