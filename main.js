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

window.addEventListener('keydown', startCar);
