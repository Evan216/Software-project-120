var menu = [
    {
        "id" :1,
        "image":"menuimg/Breadsticks-gv-590x365.webp",
        "title": "Evil Breadsticks",
        "price": "$4.50"
    },
    {
        "id" :2,
        "image":"menuimg/calamari-dpv-590x365.webp",
        "title": "Evil Calamari",
        "price": "$11.99"
    },
    {
        "id" :3,
        "image":"menuimg/Lasagna-Fritta-gv-590x365.webp",
        "title": "Evil Lasagna Fritta",
        "price": "$10.50"
    },
    {
        "id" :4,
        "image":"menuimg/Spinach-Artichoke-Dip-gv-590x365.web",
        "title": "Evil Spinach Artichoke Dip",
        "price": "$10.30"
    },
    {
        "id" :5,
        "image":"menuimg/toasted-ravioli-gv-590x365.webp",
        "title": "Evil Toasted Ravioli",
        "price": "$7.99"
    },
    {
        "id" :6,
        "image":"menuimg/soup-array-dpv-590x365.webp",
        "title": "Evil Soup",
        "price": "$7.99"
    },
    {
        "id" :7,
        "image":"menuimg/Dipping-Sauces-dvp-1180X730.jpg",
        "title": "Evil Side Of Dipping Sauces",
        "price": "$2.50"
    },
    {
        "id" :8,
        "image":"menuimg/Five-Cheese-Ziti-Lunch-gv-590x365.webp",
        "title": "Evil Cheese Ziti ",
        "price": "$12.99"
    },
    {
        "id" :9,
        "image":"menuimg/Ravioli-Carbonara-gv-590x365.webp",
        "title": "Evil Ravioli Carbanara ",
        "price": "$14.99"
    },
    {
        "id" :10,
        "image":"menuimg/HerbGrilledSalmon_v1_gv.webp",
        "title": "Evil Grilled Salmon",
        "price": "$14.99"
    },
    {
        "id" :11,
        "image":"menuimg/Spaghetti-meatballs-gv-590x365.webp",
        "title": "Evil Spaghetti and Meatballs",
        "price": "$13.99"
    },
    {
        "id" :12,
        "image":"menuimg/Merch_Steak_Alfredo_Salad_Wine_GV.webp",
        "title": "Evil Steak Alfredo",
        "price": "$13.99"
    },
    {
        "id" :13,
        "image":"menuimg/Ravioli-Carbonara-gv-590x365.webp",
        "title": "Evil Ravioli Carbonara",
        "price": "$11.99"
    },
    {
        "id" :14,
        "image":"menuimg/seafood-alfredo-gv-590x365.webp",
        "title": "Evil Seafood Alfredo",
        "price": "$11.99"
    },
    {
        "id" :15,
        "image":"menuimg/dinner-chicken-parm-dpv-590x365.webp",
        "title": "Evil Chicken Parmigiana",
        "price": "$11.99"
    },
    {
        "id" :16,
        "image":"menuimg/Shrimp-Scampi-Dinner-gv-590x365.webp",
        "title": "Evil Shrimp Scampi",
        "price": "$12.99"
    },
    {
        "id" :17,
        "image":"menuimg/chicken-and-shrimp-carbonara-dpv-590x365.webp",
        "title": "Evil Chicken and Shrimp Carbanara",
        "price": "$11.99"
    },
    {
        "id" :18,
        "image":"menuimg/black-tie-mousse-cake-dpv-590x365.webp",
        "title": "Evil Black Tie Mousse Cake",
        "price": "$4.50"
    },
    {
        "id" :19,
        "image":"menuimg/Strawberry-Cheesecake-gv-590x365.webp",
        "title": "Evil Strawberry Cheese Cake",
        "price": "$4.99"
    },
    {
        "id" :20,
        "image":"menuimg/Strawberry-Cream-Cake-Updated-gv-590x365.jpg",
        "title": "Evil Strawberries and Cream Cake",
        "price": "$4.50"
    },
    {
        "id" :21,
        "image":"menuimg/Tiramisu-gv-590x365.webp",
        "title": "Evil Tiramisu",
        "price": "$3.99"
    }   
];
var cart = [];
if ("cart" in localStorage) {
    var cart = JSON.parse(localStorage.getItem('cart'))
} else {
    localStorage.setItem('cart', JSON.stringify([]))
    var cart = JSON.parse(localStorage.getItem('cart'))
}
localStorage.setItem('menu', JSON.stringify(menu))
var menu = JSON.parse(localStorage.getItem('menu'))

function addItemToCart(e) {
    // var cartItems = document.getElementsByClassName('cart-items')[0]
    // var cartRow = document.createElement('div')
    // cartRow.classList.add('cart-row')

    // var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    // for(var i = 0; i < cartItemNames.length; i++){
    //     if (cartItemNames[i].innerText == title) {
    //         alert('This item is already added!!')
    //         return
let item = menu[e]
//     var cartRowContents = `<div class="appetizers bread">
//     <img class="app" src="${item.image}" width="100" height="100">
//     <span class="title">${item.title}</span>
// </div>
// <span class="price cart-column">${item.price}</span>
// <div class="cart-quantity cart-column">
//     <input class="cart-quantity-input" type="number" value="1">
//     <button class="add" type="button">REMOVE</button>
// </div>`
var cartRowContents = `<div class="cart-row">
<div class="cart-item cart-column">
    <img class="cart-item-image" src="${item.image}" width="100" height="100">
    <span class="cart-item-title">${item.title}</span>
</div>
<span class="cart-price cart-column">${item.price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="2">
    <button class="btn btn-danger" onclick="updateCartTotal()" type="button">REMOVE</button>
</div>
</div>`
    cart.push(cartRowContents)
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(JSON.parse(localStorage.getItem('cart')))
    
    // cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    // cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

    // x.push('cartRowContents')
    // let Pushtocart = JSON.stringify(x)
    // localStorage.setItem('Pushtocart')
}

// function addToCartClicked(item) {
//     // console.log("1")
//     var button = event.target
//     var shopItem = button.parentElement
//     var title = shopItem.getElementsByClassName('title')[0].innerText
//     var price = shopItem.getElementsByClassName('price')[0].innerText
//     var imageSrc = shopItem.getElementsByClassName('app')[0].click
//     addItemToCart(title, price, imageSrc)
//     console.log("1")
//     //updateCartTotal()

// }
var cartRows = []
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0]
     cartRows = cartItemContainer.getElementsByClassName('cart-row')
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
// element.addEventListener("button", functionToExecute)
// Btn.addEventListener