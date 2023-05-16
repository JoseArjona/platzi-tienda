const linkEmail = document.querySelector('.navbar-email');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetails = document.querySelector('.product-detail');
const burguerIcon = document.querySelector('#burguerIcon');
const accountMenu = document.querySelector('#accountMenu');
const shoppingCart = document.querySelector('#shoppingCart');

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
    productDetails.classList.add('inactive');
});

shoppingCart.addEventListener('click', () => {
    console.log('click Cart');
    toggleMenus(productDetails);
    mobileMenu.classList.add('inactive');
});