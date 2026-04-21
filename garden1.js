
const videos = [
  {
    src: "rainbowpark/trees1.mp4",
  },
  {
    hoverSwap: false,
    src: "rainbowpark/trees3.mp4"
  },
  {
    hoverSwap: false,
    src: "rainbowpark/trees4.mp4"
  },
  {
    hoverSwap: false,
    src: "rainbowpark/trees5.mp4"
  },
  {
    hoverSwap: false,
    src: "rainbowpark/trees6.mp4",
    link: "garden2.html"
  },
];

const grid = document.getElementById("grid");

videos.forEach(v => {
  const tile = v.link 
  ? document.createElement("a") 
  : document.createElement("div");

if (v.link) {
  tile.href = v.link;
}
  tile.className = "tile";

  // If hoverSwap enabled → create 2 layered videos
  if (v.hoverSwap && v.sources?.length >= 2) {
    const vidA = document.createElement("video");
    const vidB = document.createElement("video");

    [vidA, vidB].forEach(video => {
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.className = "layer";
    });

    vidA.src = v.sources[0];
    vidB.src = v.sources[1];

    vidA.style.opacity = "1";
    vidB.style.opacity = "0";

    tile.appendChild(vidA);
    tile.appendChild(vidB);

    tile.addEventListener("mouseenter", () => {
      vidA.style.opacity = "0";
      vidB.style.opacity = "1";
    });

    tile.addEventListener("mouseleave", () => {
      vidA.style.opacity = "1";
      vidB.style.opacity = "0";
    });

  } else {
    // normal static video
    const video = document.createElement("video");
    video.src = v.src;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    tile.appendChild(video);
  }

  grid.appendChild(tile);
});