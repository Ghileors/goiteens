document.querySelector('.hero__button').onclick = () => {
  const height = document.querySelector('.hero').offsetHeight;
  window.scrollTo({
    top: height,
    behavior: 'smooth',
  });
};

document.querySelector('.footer__up-button').onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
