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
const score = 10;
let bullet = 5;

function createDuck(left) {
  let duck = document.createElement('div');
  let type = getRandomInt(0, 2);
 
  if (type == 0) {
    type = 'black';
  } else {
    type = 'red';
  }

  let timerDI = moveDuck(duck, type);
  duck.className = `duck ${type}-duck-left`;
  duck.style.left = left;
  duck.style.top = getRandomInt(0, 100) + '%';
duck.dataset.timer = timerDI;
  gameArea.appendChild(duck);
 
  moveDuck(duck, type);
}

function start() {
  let i = 0;
  while (i < bullet) {
    createDuck();
    createBullet();
    i += 1;
  }
}

function createBullet() {
  let bulletBlock = document.querySelector('.bullets-container');
  let bullet = document.createElement('div');
  bullet.className = 'bullet';

  bulletBlock.appendChild(bullet);
  
}

start();
// createDuck(getRandomInt(0, 100) + '%', 'red');
// createDuck(getRandomInt(0, 100) + '%', 'black');
// createDuck(getRandomInt(0, 100) + '%', 'red');

gameArea.onclick = function(e) {
   
  if (e.target.classList.contains('duck') == true) {
    e.target.remove();
  }
}



function moveDuck(duck, type) {
  let imageDuck = 0;
  let move = true;
  let direction = directionStart(duck);
  let timerDI = setInterval(function () {
    imageDuck += 1;

    if (imageDuck > 2) {
      imageDuck = 0;
    }

    if (move == false) {
      direction = changeDirection(direction);
      move = true;
      // clearInterval(timerDI);
    }

    switch (direction) {
      case 'top-left':
        move = moveTopLeft(duck, type, imageDuck);
        break;
      case 'top-right':
        move = moveTopRight(duck, type, imageDuck);
        break;
      case 'right':
        move = moveRight(duck, type, imageDuck);
        break;
      case 'left':
        move = moveLeft(duck, type, imageDuck);
        break;
      case 'down-right':
        move = moveDownRight(duck, type, imageDuck);
        break;
      case 'down-left':
        move = moveDownLeft(duck, type, imageDuck);
        break;

      default:
        move = moveTopRight(duck, type, imageDuck);
    }
  }, 50);

  return timerDI
}

function changeDirection(before) {
  let random = getRandomInt(0, 6);
  let direction = null;
  switch (random) {
    case 0:
      direction = 'top-left';
      break;
    case 1:
      direction = 'top-right';
      break;
    case 2:
      direction = 'right';
      break;
    case 3:
      direction = 'left';
      break;
    case 4:
      direction = 'down-right';
      break;
    case 5:
      direction = 'down-left';
      break;

    default:
      direction = 'top-left';
  }

  //  direction == before ? changeDirection(before) : return direction;

  if (direction == before) {
    changeDirection(before);
  } else {
    return direction;
  }
}

function directionStart(duck) {
  let direction = 'top-left';
  let body = document.querySelector('body');

  if (duck.offsetLeft <= body.clientWidth / 2) {
    direction = 'top-right';
  }

  return direction;
}

function moveLeft(duck, type, imageDuck) {
  duck.style.backgroundImage = `url(assets/images/duck/${type}/left/${imageDuck}.png)`;
  duck.style.left = duck.offsetLeft - score + 'px';

  if (duck.offsetLeft <= 10) {
    return false;
  }
  return true;
}

function moveRight(duck, type, imageDuck) {
  duck.style.backgroundImage = `url(assets/images/duck/${type}/right/${imageDuck}.png)`;
  duck.style.left = duck.offsetLeft + score + 'px';

  if (duck.offsetLeft + duck.clientWidth >= document.body.clientWidth - 20) {
    return false;
  }
  return true;
}

function moveTopLeft(duck, type, imageDuck) {
  duck.style.backgroundImage = `url(assets/images/duck/${type}/top-left/${imageDuck}.png)`;
  duck.style.left = duck.offsetLeft - score + 'px';
  duck.style.top = duck.offsetTop - score + 'px';

  if (duck.offsetLeft <= 10 || duck.offsetTop <= 10) {
    return false;
  }
  return true;
}

function moveTopRight(duck, type, imageDuck) {
  duck.style.backgroundImage = `url(assets/images/duck/${type}/top-right/${imageDuck}.png)`;
  duck.style.left = duck.offsetLeft + score + 'px';
  duck.style.top = duck.offsetTop - score + 'px';

  if (
    duck.offsetLeft + duck.clientWidth >= document.body.clientWidth - 20 ||
    duck.offsetTop <= 10
  ) {
    return false;
  }
  return true;
}

function moveDownLeft(duck, type, imageDuck) {
  duck.style.backgroundImage = `url(assets/images/duck/${type}/top-left/${imageDuck}.png)`;
  duck.style.left = duck.offsetLeft - score + 'px';
  duck.style.top = duck.offsetTop + score + 'px';

  if (duck.offsetLeft <= 10 || duck.offsetTop <= 10) {
    return false;
  }
  return true;
}

function moveDownRight(duck, type, imageDuck) {
  duck.style.backgroundImage = `url(assets/images/duck/${type}/top-right/${imageDuck}.png)`;
  duck.style.left = duck.offsetLeft + score + 'px';
  duck.style.top = duck.offsetTop + score + 'px';

  if (
    duck.offsetLeft + duck.clientWidth >= document.body.clientWidth - 20 ||
    duck.offsetTop <= 10
  ) {
    return false;
  }
  return true;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
