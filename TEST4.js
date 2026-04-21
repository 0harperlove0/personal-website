const items = document.querySelectorAll('.video-item');

let highestZ = 1;

items.forEach(item => {

  let isDragging = false;
  let isRotating = false;

  let offsetX = 0;
  let offsetY = 0;

  let rotation = 0;

  item.addEventListener('mousedown', () => {
    item.style.zIndex = highestZ++;
  });

  item.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;

    isDragging = true;

    const rect = item.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    item.style.cursor = 'grabbing';
  });

  item.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    isRotating = true;
  });

  document.addEventListener('mousemove', (e) => {

    if (isDragging) {
      item.style.left = (e.clientX - offsetX) + 'px';
      item.style.top = (e.clientY - offsetY) + 'px';
    }

    if (isRotating) {
      rotation += e.movementX * 0.5;
      updateTransform();
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    isRotating = false;
    item.style.cursor = 'grab';
  });

  function updateTransform() {
    item.style.transform = `rotate(${rotation}deg)`;
  }

});