const linkEmail = document.querySelector('.navbar-email');
const accountMenu = document.querySelector('#accountMenu');

linkEmail.addEventListener('click', () => {
    console.log('click Email');
    accountMenu.classList.toggle('inactive');
});