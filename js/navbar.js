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



