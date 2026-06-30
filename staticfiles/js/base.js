function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const btn = document.getElementById('sidebar-btn');
    sidebar.classList.toggle('open');
    btn.textContent = sidebar.classList.contains('open') ? '✕ Close' : '☰ Metrics';
}





const navbar = document.getElementById('navbar');
const progressBar  = document.getElementById('progress-bar');
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobile-menu');
const searchTrigger = document.getElementById('search-trigger');
const searchOverlay = document.getElementById('search-overlay');
const searchClose  = document.getElementById('search-close');
const searchInput  = document.getElementById('search-input');

// Sticky shadow + reading progress
window.addEventListener('scroll', () => {
navbar.classList.toggle('scrolled', window.scrollY > 10);
const docHeight = document.documentElement.scrollHeight - window.innerHeight;
progressBar.style.width = docHeight > 0 ? (window.scrollY / docHeight * 100) + '%' : '0%';
});

// Hamburger
hamburger.addEventListener('click', () => {
const isOpen = mobileMenu.classList.toggle('open');
hamburger.classList.toggle('open', isOpen);
hamburger.setAttribute('aria-expanded', isOpen);
});

// Search open
function openSearch() {
searchOverlay.classList.add('open');
searchInput.focus();
}

function closeSearch() {
searchOverlay.classList.remove('open');
searchInput.value = '';
}

searchTrigger.addEventListener('click', openSearch);
searchClose.addEventListener('click', closeSearch);

searchOverlay.addEventListener('click', e => {
if (e.target === searchOverlay) closeSearch();
});

document.addEventListener('keydown', e => {
if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    openSearch();
}
if (e.key === 'Escape') closeSearch();
});
