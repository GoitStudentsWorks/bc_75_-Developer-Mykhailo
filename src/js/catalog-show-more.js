// to show more 5-th item
document.querySelectorAll('.btn-catalog').forEach(btn => {
  btn.addEventListener('click', () => {
    document
      .querySelector('.catalog-item:nth-child(5)')
      .classList.toggle('show-more');
  });
});

// to show more 6-th item

document.querySelectorAll('.btn-catalog').forEach(btn => {
  btn.addEventListener('click', () => {
    document
      .querySelector('.catalog-item:nth-child(6)')
      .classList.toggle('show-more');
  });
});

//
