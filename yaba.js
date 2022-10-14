// ...COMIENZO TARJETAS 
let tarjetas=document.getElementById("tarjetas");

tarjetas.innerHTML=`
<section class="store">
<div class="container">
    <div class="items">
        <div class="row">

            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    <h3 class="item-title">Jogger cargo blanco</h3>
                    <img class="item-image" src="https://www.tuareq.com/wp-content/uploads/2022/05/DSC02019-1-scaled-1.webp">

                    <div class="item-details">
                        <h4 class="item-price">$ 9500</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    <h3 class="item-title">Jogger cargo chocolate</h3>

                    <img class="item-image" src="https://www.tuareq.com/wp-content/uploads/2022/05/DSC09435-1-scaled-e1652559105782.webp">

                    <div class="item-details">
                        <h4 class="item-price">$ 9500</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    <h3 class="item-title">Remera oversize blanco</h3>

                    <img class="item-image" src="https://www.tuareq.com/wp-content/uploads/2022/07/DSC004301-2-1.webp">

                    <div class="item-details">
                        <h4 class="item-price">$ 5000</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    <h3 class="item-title">Remera oversize negra</h3>

                    <img class="item-image" src="https://www.tuareq.com/wp-content/uploads/2022/07/DSC01051-2-1-e1659115118341.webp">

                    <div class="item-details">
                        <h4 class="item-price">$ 5000</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    <h3 class="item-title">Buzo oversize chocolate</h3>

                    <img class="item-image" src="https://www.tuareq.com/wp-content/uploads/2022/05/DSC07217-1-scaled-e1650179870924.webp">
                    <div class="item-details">
                        <h4 class="item-price">$ 11000</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    <h3 class="item-title">Buzo oversize Gris</h3>

                    <img class="item-image" src="https://www.tuareq.com/wp-content/uploads/2022/05/DSC05344-scaled-e1652585240415-1.webp">
                    <div class="item-details">
                        <h4 class="item-price">$ 11000</h4>
                        <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>`;
// ...FINAL TARJETAS



// !!!COMIENZO CARRITO
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

// BOTON COMPRAR PRODUCTO
const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);
// FINAL BOTON COMPRAR

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}
//*COMIENZO FUNCION NO DUPLICAR PRODUCTOS */
function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }
//*FINAL FUNCION NO DUPLICAR PRODUCTOS */


  Swal.fire({
    title: 'Estas seguro que quieres agregar este producto?',
  showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '',
        'Tu producto fue agregado al carrito',
        'success'
      )
    }
  })
  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;

// --COMIENZO FUNCION BORRAR PRODUCTOS
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);
// --FINAL FUNCION BORRAR PRODUCTOS

//### COMIENZO FUNCION CAMBIAR PRODUCTOS
  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}
//### FINAL FUNCION CAMBIAR PRODUCTOS
 

// !!!FINAL CARRITO



// ***COMIENZO FUNCION ACTUALIZAR PRECIO
function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}
// ***FINAL FUNCION ACTUALIZAR PRECIO


// --COMIENZO FUNCION BORRAR PRODUCTOS
function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}


//### COMIENZO FUNCION CAMBIAR PRODUCTOS
function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

// FUNCION BOTON COMPRAR
function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML ='1';
  updateShoppingCartTotal();}

