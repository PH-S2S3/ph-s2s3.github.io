//alert("IT IS RECOMMENDED TO USE LANDSCAPE MODE TO VIEW THIS WEBSITE")
document.addEventListener("orientationchange", function (event) {
    switch (window.orientation) {
        case -90: case 90:  /* Device is in landscape mode */
            break;
        default:        /* Device is in portrait mode */
    }
});


function file() {
    document.location.href = "file.html";
}

function photo() {
    document.location.href = "photo-password.html";
}

function video() {
    document.location.href = "video-password.html";
}

function peranan() {
    document.location.href = "role.html";
}

function insta() {
    window.open('https://www.instagram.com/ph_s1s3/', '_blank');
}

function discord() {
    window.open('https://discord.gg/vN7USfE5hh', '_blank');
}