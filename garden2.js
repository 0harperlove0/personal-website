const videos = [
  { src: "rainbowpark/green16.mp4" },
  { src: "rainbowpark/green2.mp4" },
  { src: "rainbowpark/flowers1.mp4" },
  { src: "rainbowpark/green14.mp4" },
  { src: "rainbowpark/green15.mp4" },
  { src: "rainbowpark/walkthrough.mp4" },
  { src: "rainbowpark/green2.mp4" },
  { src: "rainbowpark/flowers4.mp4" },
];

const grid = document.getElementById("grid");

let colorStep = 0; 
const maxSteps = 5;

const hueValues = new Array(videos.length).fill(0);

function isWalkthrough(index) {
  return videos[index].src.includes("walkthrough.mp4");
}

function applyFilters(hoverIndex = null) {
  const baseGray = Math.max(0, 100 - colorStep * 20);

  for (let i = 0; i < grid.children.length; i++) {
    const video = grid.children[i].querySelector("video");

    let grayscale = baseGray;
    let brightness = 1;
    let saturate = 1;

    if (hoverIndex === i && isWalkthrough(i)) {
      grayscale = Math.max(baseGray - 20, 0);
      brightness = 1.1;
      saturate = 1.3;
    }

    if (colorStep >= maxSteps) {
      video.style.filter =
        `grayscale(0%) hue-rotate(${hueValues[i]}deg)`;
      continue;
    }

    video.style.filter =
      `grayscale(${grayscale}%) brightness(${brightness}) saturate(${saturate})`;
  }
}

function render() {
  grid.innerHTML = "";

  videos.forEach((v, i) => {
    const tile = document.createElement("div");
    tile.className = "tile";

    const video = document.createElement("video");
    video.src = v.src;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    tile.appendChild(video);

    tile.addEventListener("mouseenter", () => {
      if (!isWalkthrough(i)) return;

      tile.classList.add("walkthrough-hover");
      applyFilters(i);
    });

    tile.addEventListener("mouseleave", () => {
      tile.classList.remove("walkthrough-hover");
      applyFilters();
    });

    tile.addEventListener("click", () => {
      if (!isWalkthrough(i)) return;

      const otherIndex = Math.floor(Math.random() * videos.length);

      if (otherIndex !== i) {
        const temp = videos[i].src;
        videos[i].src = videos[otherIndex].src;
        videos[otherIndex].src = temp;

        updateTile(i);
        updateTile(otherIndex);
      }

      if (colorStep < maxSteps) {
        colorStep++;
        applyFilters();
        return;
      }

      hueValues.forEach((_, idx) => {
        hueValues[idx] = Math.floor(Math.random() * 360);
      });

      applyFilters();
    });

    grid.appendChild(tile);
  });

  applyFilters();
}

function updateTile(index) {
  const tile = grid.children[index];
  const video = tile.querySelector("video");

  video.src = videos[index].src;
  video.load();
  video.play();

  applyFilters();
}

render();