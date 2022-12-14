var x = {};

function addItemToCart(e) {
    // var cartItems = document.getElementsByClassName('cart-items')[0]
    // var cartRow = document.createElement('div')
    // cartRow.classList.add('cart-row')
var cartItems = e;
console.log(cartItems)
    // var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    // for(var i = 0; i < cartItemNames.length; i++){
    //     if (cartItemNames[i].innerText == title) {
    //         alert('This item is already added!!')
    //         return

    var cartRowContents = `<div class="appetizers bread">
    <img class="app" src="${imageSrc}" width="100" height="100">
    <span class="title">${title}</span>
</div>
<span class="price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="add" type="button">REMOVE</button>
</div>`
    cartRow.innerHTML = cartRowContents
    console.log(cartRow)
    cartItems.appendChild(cartRow)
    console.log("cartRow")
    // cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

    x.push('cartRowContents')
    let Pushtocart = JSON.stringify(x)
    localStorage.setItem('Pushtocart')
}

function addToCartClicked() {
    console.log("1")
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('app')[0].imageSrc
    addItemToCart(title, price, imageSrc)
    console.log("1")
    //updateCartTotal()

}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
        [0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsById('cart-total-price')[0].innerText = '$' + total
}
element.addEventListener("type-of-event", functionToExecute)