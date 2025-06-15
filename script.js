window.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = 'opacity .5s';
    document.body.style.opacity = 1;
  }, 50);
});
