function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}
// optional: click outside to close
window.addEventListener('click', function(event) {
    const button = document.querySelector('.dropdown-toggle');
    const menu = document.getElementById('dropdown-menu');
    if (!event.target.matches('.dropdown-toggle') && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
  }
);