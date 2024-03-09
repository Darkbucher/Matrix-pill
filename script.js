document.addEventListener("DOMContentLoaded", function() {
    var redPill = document.getElementById("red-pill");
    var bluePill = document.getElementById("blue-pill");

    redPill.addEventListener("click", function() {
        window.location.href = "redvideos.html";
    });

    bluePill.addEventListener("click", function() {
        window.location.href = "bluevideos.html";
    });

    // Other JavaScript code for video handling can go here if needed
});





document.addEventListener("DOMContentLoaded", function() {
    var videoPlayer = document.getElementById('redVideo');
    var nextButton = document.getElementById('nextButton');

    var videoSources =  ['red_video1.mp4', 'redvideo7.mp4' ,'red_video2.mp4', 'redvideo8.mp4', 'red_video3.mp4', 'redvideo9.mp4','red_video4.mp4', 'redvideo10.mp4','red_video5.mp4', 'redvideo11.mp4', 'redvideo13.mp4','redvideo12.mp4','red_video6.mp4'];
    var currentVideoIndex = 0;

    // Set the first video source when the page loads
    videoPlayer.src = videoSources[currentVideoIndex];

    // Add click event listener to the next button
    nextButton.addEventListener('click', function() {
        // Increment the current video index
        currentVideoIndex++;

        // Check if we have reached the end of the video sources array
        if (currentVideoIndex === videoSources.length) {
            currentVideoIndex = 0; // Loop back to the beginning
        }

        // Set the new video source
        videoPlayer.src = videoSources[currentVideoIndex];

        // Play the video
        videoPlayer.play();
    });
});
