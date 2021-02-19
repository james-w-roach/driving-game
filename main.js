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

var left;
var right;
var up;
var down;

function startCar() {
  $car.style.position = 'absolute';
  if ($car.className === 'car') {
    left += 1;
    right = window.innerWidth - 1;
    $car.style.left = left + 'px';
    $car.style.right = right + 'px';
  } else if ($car.className === 'car r180') {
    left -= 1;
    right += 1;
    $car.style.right = right + 'px';
    $car.style.left = left + 'px';
  } else if ($car.className === 'car r90') {
    up += 1;
    down -= 1;
    $car.style.top = up + 'px';
    $car.style.bottom = down + 'px';
  } else {
    up -= 1;
    down += 1;
    $car.style.bottom = down + 'px';
    $car.style.top = up + 'px';
  }
}

var intID;

function spacePress(event) {
  if (event.code === 'Space') {
    if (intID) {
      clearInterval(intID);
      intID = undefined;
    } else {
      intID = setInterval(startCar, 16);
    }
  }
}

window.addEventListener('keydown', spacePress);
