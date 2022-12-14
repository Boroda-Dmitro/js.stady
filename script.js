let countClick = 0;
const blockCount = document.querySelector('#count');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const audioGun = document.querySelector('#audioGun');

btn2.onclick = function () {
  const p2 = document.querySelector('#p2');
  p2.style.color = 'red';
};

function btnClick() {
  countClick += 1;
  blockCount.innerText = countClick;
  console.dir(countClick);
}

btn3.onclick = function () {
    audioGun.play();
};

console.dir(btn3);