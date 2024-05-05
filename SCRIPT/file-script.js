document.addEventListener("orientationchange", function (event) {
    switch (window.orientation) {
        case -90: case 90:  /* Device is in landscape mode */
            break;
        default:        /* Device is in portrait mode */
    }
});

var video = document.createElement('video');

function home() {


    video.src = 'VIDEO/Fire Ring Animation.mp4';
    video.autoplay = true;
    video.controls = false;
    video.muted = false;
    video.style.visibility = "visible";
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';

    window.addEventListener('resize', () => {
        video.style.width = '100%';
        video.style.height = '100%';
    });

    const box = document.getElementById('box');

    box.appendChild(video);

    video.onended = function () { hyperlink() }

    function hyperlink() {
        document.location.href = "index.html";
    }
}

function photo() {

    video.src = 'VIDEO/lock.mp4';
    video.autoplay = true;
    video.controls = false;
    video.muted = false;
    video.style.visibility = "visible";
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';

    window.addEventListener('resize', () => {
        video.style.width = '100%';
        video.style.height = '100%';
    });

    const box = document.getElementById('box1');

    box.appendChild(video);

    video.onended = function () { hyperlink() }

    function hyperlink() {
        document.location.href = "photo-password.html";
    }

}

function vvideo() {
    document.location.href = "video-password.html";
}

function peranan() {


    video.src = 'VIDEO/fire.mp4';
    video.autoplay = true;
    video.controls = false;
    video.muted = false;
    video.style.visibility = "visible";
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';

    window.addEventListener('resize', () => {
        video.style.width = '100%';
        video.style.height = '100%';
    });

    const box = document.getElementById('box');

    box.appendChild(video);

    video.onended = function () { hyperlink() }

    function hyperlink() {
        document.location.href = "role.html";
    }
}

function insta() {



    video.src = 'VIDEO/fire.mp4';
    video.autoplay = true;
    video.controls = false;
    video.muted = false;
    video.style.visibility = "visible";
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';

    window.addEventListener('resize', () => {
        video.style.width = '100%';
        video.style.height = '100%';
    });

    const box = document.getElementById('box');

    box.appendChild(video);

    video.onended = function () { hyperlink() }

    function hyperlink() {
        window.open('https://www.instagram.com/ph_s1s3/', '_blank');
        video.style.visibility = "hidden";
    }
}

function discord() {



    video.src = 'VIDEO/fire.mp4';
    video.autoplay = true;
    video.controls = false;
    video.muted = false;
    video.style.visibility = "visible";
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';

    window.addEventListener('resize', () => {
        video.style.width = '100%';
        video.style.height = '100%';
    });

    const box = document.getElementById('box');

    box.appendChild(video);

    video.onended = function () { hyperlink() }


    function hyperlink() {
        window.open('https://discord.gg/vN7USfE5hh', '_blank');
        video.style.visibility = "hidden";
    }

}

//Feedback
document.addEventListener('DOMContentLoaded', function () {

    // Get the button element
    var button = document.getElementById('button');

    // Get the feedback container
    var feedback = document.getElementById('feedback');
    var originalTransform = feedback.style.transform; // Store the original transform value
    var originalOpacity = feedback.style.opacity !== '' ? feedback.style.opacity : '1'; // Default to 1 if opacity is not set

    // Add click event listener to the button
    button.addEventListener('click', function () {
        // Toggle the visibility of the feedback container
        if (feedback.style.visibility === 'visible') {
            gsap.to(feedback, {
                duration: 0.5, // Short duration for immediate hiding
                opacity: 0,
                onComplete: function () {
                    feedback.style.visibility = 'hidden';
                    feedback.style.transform = originalTransform; // Reset transform to original value
                    feedback.style.opacity = originalOpacity; // Reset opacity to original value
                    gsap.set(feedback, { clearProps: 'all' }); // Clear all applied GSAP properties
                }
            });
        } else {
            feedback.style.visibility = 'visible';
            gsap.to(feedback, {
                duration: 1,
                ease: "elastic.out(1,0.4)",
                y: '-9vh'
            });
        }
    });
});
