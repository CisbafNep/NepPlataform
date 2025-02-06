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