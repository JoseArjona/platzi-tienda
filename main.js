const linkEmail = document.querySelector('.navbar-email');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetails = document.querySelector('#shCartAside');
const burguerIcon = document.querySelector('#burguerIcon');
const accountMenu = document.querySelector('#accountMenu');
const shoppingCart = document.querySelector('#shoppingCart');

// Creamos una funcion para que se active y desactive el menu
function toggleMenus(selectMenu) {
    selectMenu.classList.toggle('inactive');
}
// Agregamos un evento al elemento que queremos que se active y desactive
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

// Products List
const products = [];
products.push({
    id: 1,
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
});

products.push({
    id: 2,
    name: 'Car',
    price: 12000,
    image: 'https://images.pexels.com/photos/1519192/pexels-photo-1519192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

products.push({
    id: 3,
    name: 'Airplane',
    price: 110000,
    image: 'https://images.pexels.com/photos/45230/aircraft-double-decker-airport-army-aviation-space-45230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderCard(array) {
    // Creamos un for of para recorrer el array de productos 
    for (product of array) {
        // Creamos una constante para agregar el html de cada producto
        const productCard =
            `<div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-info">
          <div>
            <p>$${product.price}</p>
            <p>${product.name}</p>
          </div>
          <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="figure shop cart">
          </figure>
        </div>
     </div>
        `;
        // Agregamos el html de cada producto al contenedor de productos
        document.querySelector('.cards-container').innerHTML += productCard;
    }
}

renderCard(products);