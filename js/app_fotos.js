var images = ['./img/solidarite.jpeg',
    './img/canto-coral.jpg',
    './img/flauta.jpg',
    './img/solidarite.jpeg'
];

let i = 0
const tam = images.length - 1

function slideShow() {
    document.getElementById("image").src = images[i];
    if (i < tam) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideShow()", 3000);
}

window.onload = slideShow;