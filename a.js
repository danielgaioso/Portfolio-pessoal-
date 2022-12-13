const mainContent = document.getElementById('main-content');
const windowWidth = window.innerWidth;

document.addEventListener('mousemove', (event) => {
  if (event.pageX > windowWidth / 2) {
    // Scroll to the right
    window.scrollTo(mainContent.scrollWidth, 0);
  } else {
    // Scroll to the left
    window.scrollTo(0, 0);
  }
});