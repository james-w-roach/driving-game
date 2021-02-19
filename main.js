var $car = document.getElementById('car');

function turnCar(event) {
  if (event.code === 'ArrowRight' || event.code === 'KeyD') {
    $car.className = 'car';
  } else if (event.code === 'ArrowUp' || event.code === 'KeyW') {
    $car.className = 'car r270';
  } else if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
    $car.className = 'car r180';
  } else if (event.code === 'ArrowDown' || event.code === 'KeyS') {
    $car.className = 'car r90';
  }
}

window.addEventListener('keydown', turnCar);

var currentNum = 0;

function startCar() {
  if (currentNum === 1100) {
    currentNum = 0;
  } else {
    currentNum += 10;
    $car.style.marginLeft = currentNum + 'px';
  }
}

var counter = 0;
var intID;

function spacePress(event) {
  if (event.code === 'Space') {
    counter++;
    if (counter === 1) {
      intID = setInterval(startCar, 16);
    } else {
      clearInterval(intID);
      counter = 0;
    }
  }
}

window.addEventListener('keydown', spacePress);
