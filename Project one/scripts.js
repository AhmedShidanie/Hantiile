
document.addEventListener('DOMContentLoaded', () => {
  const banners = document.querySelectorAll('.banner');
  let current = 0;

  const showBanner = (index) => {
    banners.forEach((banner, i) => {
      banner.classList.remove('active');
      if (i === index) {
        banner.classList.add('active');
      }
    });
  };

  const nextBanner = () => {
    current = (current + 1) % banners.length;
    showBanner(current);
  };

  showBanner(current);
  setInterval(nextBanner, 5000); // Change banner every 5 seconds
});