document.addEventListener("DOMContentLoaded", () => {
  // Pill Click Handlers
  const redPill = document.getElementById("red-pill");
  const bluePill = document.getElementById("blue-pill");

  if (redPill) {
    redPill.addEventListener("click", () => {
      window.location.href = "redvideos.html";
    });
  }

  if (bluePill) {
    bluePill.addEventListener("click", () => {
      window.location.href = "bluevideos.html";
    });
  }

  // Video Player Functionality (only if present on the page)
  const videoPlayer = document.getElementById("redVideo");
  const nextButton = document.getElementById("nextButton");

  if (videoPlayer && nextButton) {
    const videoSources = [
      "red_video1.mp4",
      "redvideo7.mp4",
      "red_video2.mp4",
      "redvideo8.mp4",
      "red_video3.mp4",
      "redvideo9.mp4",
      "red_video4.mp4",
      "redvideo10.mp4",
      "red_video5.mp4",
      "redvideo11.mp4",
      "redvideo13.mp4",
      "redvideo12.mp4",
      "red_video6.mp4",
    ];
    let currentVideoIndex = 0;

    // Set the first video source on page load
    videoPlayer.src = videoSources[currentVideoIndex];

    // Cycle to the next video on button click
    nextButton.addEventListener("click", () => {
      currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
      videoPlayer.src = videoSources[currentVideoIndex];
      videoPlayer.play();
    });
  }
});
