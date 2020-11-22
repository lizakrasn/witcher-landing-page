function copyCode () {
  const copiedCode = document.getElementById("code");

  copiedCode.select();
  document.execCommand("copy");

  document.getElementById("copyCode").innerText = "COPIED";
}

document.getElementById("copyCode").addEventListener('click', copyCode);

function parallax () {
  const parallaxBox = document.querySelector ('.page');
  const layers = document.querySelectorAll('.background-image');

  parallaxBox.addEventListener('mousemove', (event) => {
    const x = event.clientX - parallaxBox.offsetLeft;

    for (let i = 0; i < layers.length; i++) {
      const speed = (i + 1) * 9;
      mouseParallax(layers[i], x, speed)
    }
  })
}
function mouseParallax (layer, mouseX, speed) {
  layer.style.transform = 'translateX(' + mouseX / speed + 'px)';
}

parallax();
