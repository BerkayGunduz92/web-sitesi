// JavaScript Dosyası (script.js)

document.addEventListener('DOMContentLoaded', function () {
    // Görsellere tıklama olayı ekleme
    const images = document.querySelectorAll('.category img');
    images.forEach(img => {
        img.addEventListener('click', function () {
            openFullscreen(this);
        });
    });

    // Tam ekran yapma fonksiyonu
    function openFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    // Klavye olayı dinleme (tam ekrandan çıkma)
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            closeFullscreen();
        }
    });

    // Tam ekrandan çıkma fonksiyonu
    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }

    // Fotoğraflar arasında geçiş yapma
    let currentIndex = 0;
    document.addEventListener('keydown', function (event) {
        const key = event.key;
        if (key === 'ArrowLeft') {
            showPreviousImage();
        } else if (key === 'ArrowRight') {
            showNextImage();
        }
    });

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].click();
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].click();
    }
});
