// let countClick = 0;
// const blockCount = document.querySelector('#count');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const audioGun = document.querySelector('#audioGun');

// btn2.onclick = function () {
//   const p2 = document.querySelector('#p2');
//   p2.style.color = 'red';
// };

// function btnClick() {
//   countClick += 1;
//   blockCount.innerText = countClick;
//   console.dir(countClick);
// }

// btn3.onclick = function () {
//     audioGun.play();
// };

// console.dir(btn3);


// const duck = document.querySelector('.duck');
const gameArea = document.querySelector('.game-area');






function createDuck(left, type) {
  let duck = document.createElement("div")
  duck.className = `duck ${type}-duck-left`;
  duck.style.left = left;
  duck.style.top = "100%";

  gameArea.appendChild(duck);
  moveDuck(duck);
}

createDuck(getRandomInt(0, 100) + "%", 'red');
createDuck(getRandomInt(0, 100) + "%", 'black');
createDuck(getRandomInt(0, 100) + "%", 'red');


function moveDuck(duck) {
  let imageDuck = 1;
  let  timerDI = setInterval(function () {
  console.dir(duck.offsetLeft);
  imageDuck += 1;
  if (imageDuck > 2) {
    imageDuck = 0;
  }
  duck.style.backgroundImage = `url(assets/images/duck/black/left/${imageDuck}.png)`;
    duck.style.left = duck.offsetLeft - 10 + "px";
    duck.style.top = duck.offsetTop - 10 + "px";
    

  if (duck.offsetLeft < 0) {
    clearInterval(timerDI);
    }
    if (duck.offsetTop < 0) {
    clearInterval(timerDI);
  }  
}, 20);
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

