// to open and close modal window
document.querySelectorAll('.btn-catalog').forEach(btn => {
  btn.addEventListener('click', () => {
    document
      .querySelector('.catalog-item:nth-child(6)')
      .classList.toggle('show-more');
  });
});
