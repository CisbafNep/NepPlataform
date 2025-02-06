let currentIndex = 0;
            
function moveCarros(direction) {
    const images = document.querySelector('.carrosImg');
    const totalImages = images.children.length;
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;
    images.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    moveCarros(1);
}, 4000);

function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    menu.classList.toggle("open");
    overlay.classList.toggle("show");
}

// Quando o overlay (fundo) for clicado, o menu se fecha
document.getElementById("overlay").addEventListener("click", closeMenu);

function closeMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    menu.classList.remove("open");
    overlay.classList.remove("show");
}

