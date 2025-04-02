document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopBtn = document.getElementById('scrollToTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > document.documentElement.scrollHeight / 5) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

//-----------------

function smoothScrollToTop() {
  const scrollDuration = 300; // Час прокрутки (мс)
  const startPosition = window.scrollY;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / scrollDuration, 1);
    window.scrollTo(0, startPosition * (1 - progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

document
  .getElementById('scrollToTop')
  .addEventListener('click', smoothScrollToTop);

// ----------------------------------
