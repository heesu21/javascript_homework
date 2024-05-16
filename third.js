const countEl = document.getElementById('counter');
let counter = 0;

function updateCounter() {
  countEl.innerHTML = counter;
  counter++;
  if (counter > 5) {
    console.log('종료');
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(() => {
  updateCounter();
}, 1000);