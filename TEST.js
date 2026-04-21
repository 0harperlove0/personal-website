const items = document.querySelectorAll('.video-item');
const bgVideo = document.getElementById("bg-video");

let highestZ = 1;
let isDragging = false;
let isRotating = false;

let offsetX = 0;
let offsetY = 0;

let rotation = 0;
let scale = 1;


function applyRandomColor() {
  const hue = Math.floor(Math.random() * 360);

  const filter = `
    hue-rotate(${hue}deg)
    saturate(2)
    contrast(1.2)
  `;

  bgVideo.style.filter = filter;

  document.querySelectorAll(".video-item video").forEach(v => {
    v.style.filter = filter;
  });
}

items.forEach(item => {


  item.addEventListener('mousedown', () => {
    item.style.zIndex = highestZ++;
  });


  item.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;

    isDragging = true;
    offsetX = e.clientX - item.offsetLeft;
    offsetY = e.clientY - item.offsetTop;

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


  item.addEventListener('wheel', (e) => {
    e.preventDefault();

    scale += e.deltaY * -0.001;
    scale = Math.min(Math.max(0.3, scale), 3);

    updateTransform();
  });

  function updateTransform() {
    item.style.transform =
      `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;
  }

 
  item.addEventListener('click', () => {
    applyRandomColor();
  });

});