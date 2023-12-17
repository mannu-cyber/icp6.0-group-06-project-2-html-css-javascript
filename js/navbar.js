hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}



function openImg(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    modal.style.display = 'flex';
    modalImage.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

const hertElement = document.getElementById('hert');
let dil = false;
function clrChang() {

    if (dil == false) {
        hertElement.src = '../logo/red-hert.png'
        dil = true
    }

    else {
        hertElement.src = '../logo/heart.png'
        dil = false;
    }
}


const saves = document.getElementById('save');
let state = false
function saved() {

    if (state == false) {
        saves.src = '../logo/bookmark-black.png'
        state = true;
    }

    else {
        saves.src = '../logo/bookmark-white.png'
        state = false
    }
}


