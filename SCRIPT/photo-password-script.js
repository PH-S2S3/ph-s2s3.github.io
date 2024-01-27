function checkPassword() {
    var password = document.getElementById("password").value;

    if (password === "ph-s1s3") {
        window.location.href = "https://drive.google.com/drive/mobile/folders/1nPsK86hsAwgr5qnciY0l7pzsByl36PpM";
    } else {
        var result = document.getElementById("result");
        result.style.display = "block";
        result.innerHTML = "Incorrect password. Please try again.";
    }
}

// Add event listener for "Enter" key press in the password input field
document.getElementById("password").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission
        checkPassword(); // Call the checkPassword function when "Enter" is pressed
    }
});