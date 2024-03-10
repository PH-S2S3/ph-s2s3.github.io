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