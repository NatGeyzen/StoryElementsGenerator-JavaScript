const nav_link_container = document.getElementById('nav-link-container');
document.getElementById('nav-icon-container').addEventListener('click', () => {
  if (nav_link_container.classList.contains('non-active')) {
    nav_link_container.classList.remove('non-active');
    nav_link_container.classList.add('active');
  } else if (nav_link_container.classList.contains('active')) {
    nav_link_container.classList.remove('active');
    nav_link_container.classList.add('non-active');
  }
});