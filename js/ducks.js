function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 750);
}

var images = [], x = -1;
images[0] = "images/Artboard1@3x.png";
images[1] = "images/Artboard2@3x.png";
images[2] = "images/Artboard3@3x.png";
images[3] = "images/Artboard4@3x.png";
images[4] = "images/Artboard5@3x.png";
images[5] = "images/Artboard6@3x.png";
images[6] = "images/Artboard7@3x.png";
images[7] = "images/Artboard8@3x.png";
images[8] = "images/Artboard9@3x.png";
images[9] = "images/Artboard10@3x.png";
images[10] = "images/Artboard11@3x.png";
images[11] = "images/Artboard12@3x.png";
images[12] = "images/Artboard13@3x.png";
// images[13] = "images/Artboard14@3x.png";
