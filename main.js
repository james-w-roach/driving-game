var $car = document.getElementById('car');

function turnCar(event) {
  if (event.code === 'ArrowRight' || event.code === 'KeyD') {
    if ($car.className === 'car') {
      $car.className = 'car r90';
    } else if ($car.className === 'car r90') {
      $car.className = 'car r180';
    } else if ($car.className === 'car r180') {
      $car.className = 'car r270';
    } else {
      $car.className = 'car';
    }
  } else if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
    if ($car.className === 'car') {
      $car.className = 'car r270';
    } else if ($car.className === 'car r270') {
      $car.className = 'car r180';
    } else if ($car.className === 'car r180') {
      $car.className = 'car r90';
    } else {
      $car.className = 'car';
    }
  }
}

window.addEventListener('keydown', turnCar);
