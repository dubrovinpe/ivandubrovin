function openMail() {
  const u = "ivan.dub";
  const d = "gmx.de";
  window.location.href = `mailto:${u}@${d}?subject=Website Contact`;
}

function openPhone() {
  window.location.href = "tel:+4915903146464";
}

// === SLIDER LOGIC (Making Of Gallery) ===
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const images = document.querySelectorAll('.slider-track img');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    // Nur ausführen, wenn ein Slider auf der Seite existiert
    if (track && images.length > 0) {
        let currentIndex = 0;

        function updateSlider() {
            const width = images[0].clientWidth;
            track.style.transform = `translateX(-${currentIndex * width}px)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        });

        // Resize handling
        window.addEventListener('resize', updateSlider);
    }
});