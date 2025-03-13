const setupCarousel = (section) => {
    const track = section.querySelector('.carousel-track');
    const prevBtn = section.querySelector('.prev');
    const nextBtn = section.querySelector('.next');
    const items = Array.from(track.children);
    let currentIndex = 0;

    const moveCarousel = (index) => {
        track.style.transform = translateX(-${index * 100%});
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        moveCarousel(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        moveCarousel(currentIndex);
    });
};

document.querySelectorAll('.carousel-container').forEach(setupCarousel);