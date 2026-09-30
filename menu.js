const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); 
  dropdownMenu.classList.toggle('active');
  menuToggle.classList.toggle('active'); 
});

document.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    dropdownMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

window.addEventListener('scroll', () => {
  if (dropdownMenu.classList.contains('active')) {
    dropdownMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
}, { passive: true });

document.querySelector('.hero-section').addEventListener('scroll', () => {
  if (dropdownMenu.classList.contains('active')) {
    dropdownMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
}, { passive: true });