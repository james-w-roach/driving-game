function turnCar(event) {
  if (event.code === 'ArrowRight' || event.code === 'KeyD') {
    console.log('Right');
  } else if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
    console.log('Left');
  } else {
    console.log(event);
  }
}

window.addEventListener('keydown', turnCar);
