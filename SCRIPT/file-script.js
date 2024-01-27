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