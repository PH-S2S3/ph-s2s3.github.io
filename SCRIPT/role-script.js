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

function showContainer1() {

    var container1 = document.getElementById('container1');
    var closeBtn = document.getElementById('closeBtn');

    //Show container
    container1.style.visibility = 'visible';
    container1.style.position = 'absolute'
    container1.style.top = '0';
    container1.style.left = '0';
    container1.style.width = '100%';
    container1.style.height = '100vh';
    container1.style.objectFit = 'cover';
    container1.style.zIndex = '2';

    //Showing close button
    closeBtn.style.visibility = 'visible';
    closeBtn.style.color = 'black';
}

function showContainer2() {
    var container2 = document.getElementById('container2');
    var closeBtn = document.getElementById('closeBtn');

    //Show container
    container2.style.visibility = 'visible';
    container2.style.position = 'absolute'
    container2.style.top = '0';
    container2.style.left = '0';
    container2.style.width = '100%';
    container2.style.height = '100vh';
    container2.style.objectFit = 'cover';
    container2.style.zIndex = '2';

    //Showing close button
    closeBtn.style.visibility = 'visible';
    closeBtn.style.color = 'black';
}

function showContainer3() {

    var container3 = document.getElementById('container3');
    var closeBtn = document.getElementById('closeBtn');

    //Show container
    container3.style.visibility = 'visible';
    container3.style.position = 'absolute'
    container3.style.top = '0';
    container3.style.left = '0';
    container3.style.width = '100%';
    container3.style.height = '100vh';
    container3.style.objectFit = 'cover';
    container3.style.zIndex = '2';

    //Showing close button
    closeBtn.style.visibility = 'visible';
    closeBtn.style.color = 'black';
}

function closeContainer() {
    container1.style.visibility = 'hidden';
    container2.style.visibility = 'hidden';
    container3.style.visibility = 'hidden';
    closeBtn.style.color = 'transparent';
}

document.addEventListener('DOMContentLoaded', function () {
});

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
