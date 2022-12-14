if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}
function ready(){
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i= 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    // document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked(){
    alert('Thank you for your buisness')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event){
 var buttonClicked = event.target
       buttonClicked.parentElement.parentElement.remove()
       updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('app')[0].imageSrc
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]

    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for(var i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added!!')
            return
        }
    }
    var cartRowContents = `<div class="cart-item cart-column">
    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>`
cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal(){
    var cartItemContainer= document.getElementsByClassName("cart-items")[0]
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
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

let users = [
    {
        username: "Evan",
        password: "1234"
        },
    {
        username: "riley",
        password: "4321"
    }    
]

// login function
function login() {
    // retrieve username and password from form
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (localStorage.getItem(username) === password) {
    alert('Login successful');

  }
    else {
      alert('Login failed');
    
  }
  
}

// function to create a new user with name, email, password
function register() {
    // store new user data 
  let registerUser = document.getElementById("newUserName").value;
    // store new user password
  let registerPassword = document.getElementById("newPassword").value;

  if (localStorage.getItem(registerUser) !== null) {
    alert("Username already exists");}

  localStorage.setItem(registerUser, registerPassword);
  alert("Registration successful");

users.push({registerUser, registerPassword});
}

// function to alert login needed for access to page
function feature(){
    alert('please login to use this feature!!')
}


function copyDivs(fromSectionId, toSectionId) {
    // Get the 'from' and 'to' sections by their id
    var fromSection = document.getElementById(fromSectionId);
    var toSection = document.getElementById(toSectionId);
  
    // Get all the divs in the 'from' section
    var divs = fromSection.getElementsByTagName("div");
  
    // Loop through each div
    for (var i = 0; i < divs.length; i++) {
      // Create a copy of the div
      var copy = divs[i].cloneNode(true);
  
      // Add the copy to the 'to' section
      toSection.appendChild(copy);
    }
  }
  













// function showReceipt() {
//     // Get the cart items from the cart page function
//     var cart = getCartItems();
  
//     // Calculate the total price of the cart items
//     var total = 0;
//     for (var i = 0; i < cart.length; i++) {
//       total += cart[i].price;
//     }
  
// 
function showButtonOnLogin() {
    // Get the login and password from local storage
    var login = localStorage.getItem('login');
    var password = localStorage.getItem('password');
    
    // Check if the login and password match the expected values
    if (login === 'admin' && password === 'password') {
      // Get the button element
      var button = document.querySelector('button');
      
      // Make the button visible
      button.style.display = 'block';
    }
  }

  //receipt
//   var receipt = contentsection.innerHTML
//   FinReceipt.innerHTML = contentsection.innerHTML
function copyDiv(divId) {
    // Get the div element with the specified divId
    var div = document.getElementById(contentsection);
  
    // Create a new popup window
    var popup = window.open();
  
    // Get the document object for the popup window
    var doc = popup.document;
  
    // Copy the contents of the div into the popup window
    doc.write(div.innerHTML);
  }