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

var xAxis = 0;
var yAxis = 0;

function startCar() {
  if ($car.className === 'car') {
    xAxis += 10;
    $car.style.marginLeft = xAxis + 'px';
  } else if ($car.className === 'car r180') {
    xAxis -= 10;
    $car.style.marginLeft = xAxis + 'px';
  } else if ($car.className === 'car r90') {
    yAxis += 10;
    $car.style.marginTop = yAxis + 'px';
  } else {
    yAxis -= 10;
    $car.style.marginTop = yAxis + 'px';
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
