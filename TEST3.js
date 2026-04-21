const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {
  const video = tile.querySelector("video");

  let targetOpacity = 1;
  let currentOpacity = 1;

  tile.addEventListener("mouseenter", () => {
    targetOpacity = 0;
  });

  tile.addEventListener("mouseleave", () => {
    targetOpacity = 1;
  });

  function animate() {
    currentOpacity += (targetOpacity - currentOpacity) * 0.15;
    video.style.opacity = currentOpacity;

    requestAnimationFrame(animate);
  }

  animate();
});