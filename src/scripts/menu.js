// Mobile menu button
const menu = document.querySelector('.menu');

menu?.addEventListener('click', () => {
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', `${!isExpanded}`);
});

// Style current menu link
document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.pathname;
  const navLinks = document.querySelectorAll("#main-nav a");

  navLinks.forEach(link => {
    // If the href matches the current path, add the "active" class
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
    }
  });
});
