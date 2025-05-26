const video = document.getElementById('video');
const button = document.getElementById('playPauseButton');

function updateButtonVisibility() {
    if (video.paused || video.ended) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

window.addEventListener('load', updateButtonVisibility);

// toggle play/pause
function togglePlayPause() {
    if (video.paused || video.ended) {
        video.play().then(() => {
            button.style.display = 'none';
        }).catch((err) => {
            console.error('Autoplay error:', err);
        });
    } else {
        video.pause();
        button.style.display = 'block';
    }
}

// Bind events
button.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);

video.addEventListener('play', updateButtonVisibility);
video.addEventListener('pause', updateButtonVisibility);
video.addEventListener('ended', updateButtonVisibility);


document.querySelectorAll('.faq-list-head-box').forEach(header => {
    header.addEventListener('click', function () {
        const container = this.closest('.faq-list-container');
        container.classList.toggle('active');
    });
});