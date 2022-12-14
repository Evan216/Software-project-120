var menutems = JSON.parse(localStorage.getItem('foodItems'))

function renderManagerMenu(<div class="">
<img class="app" src="${menuItem.image}" alt="">
<div class="title">${menuItem.name}</div><div class="price"> ${menuItem.price}</div>
<button><a class="add" href="">Add Item</a></button>
</div>) {

    menulist.innerHTML = "";
    foodItems.forEach((foodItem) => {
        menulist.innerHTML += 
            <div class="menulist">
                <div class="categories">
                    <div class="shop-item">
                        <ion-icon class="removeButton" onclick="removeFromMenu(${foodItem.id})" name="close-circle-outline">Remove</ion-icon>
                        <img class="shop-item-image" src="${foodItem.image}" alt="">
                        <h3 class="itemName">${foodItem.name}</h3>
                        <div class="shop-item-details">
                        <span class="shop-item-price">${foodItem.price}</span> <br> 
                        <button class="btn btn-primary shop-item-button" type="button">Item back to cart</button>
                        </div>
                    </div>
            <div>
        ;
    });
};