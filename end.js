const videos = [
  {
    src: "rainbowpark/sign.mp4"
  }
];

const grid = document.getElementById("grid");

videos.forEach(v => {
  const video = document.createElement("video");

  video.src = v.src;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;

  // click = random color filter
  video.addEventListener("click", () => {
    const hue = Math.floor(Math.random() * 360);
    const brightness = 80 + Math.random() * 40;
    const saturate = 100 + Math.random() * 200;

    video.style.filter = `
      hue-rotate(${hue}deg)
      brightness(${brightness}%)
      saturate(${saturate}%)
    `;
  });

  grid.appendChild(video);
});