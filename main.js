const linkEmail = document.querySelector('.navbar-email');
const burguerIcon = document.querySelector('#burguerIcon');
const accountMenu = document.querySelector('#accountMenu');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleMenus(selectMenu) {
    selectMenu.classList.toggle('inactive');
}

linkEmail.addEventListener('click', () => {
    console.log('click Email');
    toggleMenus(accountMenu);
});

burguerIcon.addEventListener('click', () => {
    console.log('click Burguer');
    toggleMenus(mobileMenu);
});