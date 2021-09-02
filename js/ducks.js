function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 750);
}

var images = [], x = -1;
images[0] = "images/IMG_0681.PNG";
images[1] = "images/IMG_0682.PNG";
images[2] = "images/IMG_0683.PNG";
images[3] = "images/IMG_0684.PNG";
images[4] = "images/IMG_0685.PNG";
images[5] = "images/IMG_0686.PNG";
images[6] = "images/IMG_0687.PNG";
images[7] = "images/IMG_0688.PNG";
images[8] = "images/IMG_0689.PNG";
