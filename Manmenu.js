// function addToMenuClicked(){
//     arr.push({product_name : input_name.value, product_calories : input_calories.value, product_image : input_image.value, product_price : Number(input_price.value) })
   
//     let original = document.getElementsByClassName("Menu-items")[0]
//     let clonedOriginal = original.cloneNode(true)
    
//     let title = clonedOriginal.children[0].children[2]
//     let imageSrc = clonedOriginal.children[0].children[1]
//     let price = clonedOriginal.children[0].children[4]
 
//     title.textContent = input_name.value
//     price.textContent = input_price.value
//     imageSrc = input_image.value
//     addItemToMenu(title, price, imageSrc)
// }

// function addItemToMenu(title, price, imageSrc){
//     var MenuRow = document.createElement('div')
//     MenuRow.classList.add('{FoodType}')
//     var MenuItems = document.getElementsByClassName('Menu-items')[0]
//     var MenuItemNames = MenuItems.getElementsByClassName('Menu-item-title')
//     for(var i = 0; i < MenuItemNames.length; i++){
//         if (MenuItemNames[i].innerText == title) {
//             alert('This item is already added!!')
//             return
//         }
//     }
//     var MenuItemContents = `<div class="Menu-Items"><div class="bread"> 
//     <img class="app" src="${imageSrc}"  alt="">
//     <div class="Menu-item-title">${title}</div><div class="Menu-price">$${price}</div>
//     <button><a class="add" href="">Add Item</a></button>
// </div>
// </div>`
// MenuRow.innerHTML = MenuItemContents
//     MenuItems.append(MenuRow)

// }

//add bread
function copyDiv(imgSrc, title, price) {
      console.log("issue")

    // create a new div element
    let newDiv = document.createElement("div");
    newDiv.classList.add("bread");
    // create an img element
    let newImg = document.createElement("img");
    newImg.classList.add("app");
    // set the src attribute of the img element to the specified img value
    newImg.setAttribute("src", document.getElementById("imageSrc").value);
    // set the alt attribute of the img element to the specified title value
    newImg.setAttribute("alt", title);
  
    // create a div element for the name
    let newNameDiv = document.createElement("div");
    newNameDiv.class = "title";
    // set the text content of the div element to the specified name value
    newNameDiv.textContent = document.getElementById("title").value;
  
    // create a div element for the price
    let newPriceDiv = document.createElement("div");
    newPriceDiv.class = "price";
    // set the text content of the div element to the specified price value
    newPriceDiv.textContent = document.getElementById("price").value;
  
    // create a button element
    let newButton = document.createElement("button");
    // create an anchor element
    let newAnchor = document.createElement("a");
    newAnchor.classList.add("add");
    // set the href attribute of the anchor element to "#"
    newAnchor.setAttribute("href", "#");
    // set the text content of the anchor element to "Add Item"
    newAnchor.textContent = "Add Item";
    // append the anchor element to the button element
    newButton.appendChild(newAnchor);
  
    // append the img, name, price and button elements to the new div element
    newDiv.appendChild(newImg);
    newDiv.appendChild(newNameDiv);
    newDiv.appendChild(newPriceDiv);
    newDiv.appendChild(newButton);
  
    // store the new div element in local storage
    localStorage.setItem("newDiv", newDiv.outerHTML);
    document.body.appendChild(newDiv);
    
    // window.location.href="ManMenu.html"
  }

//   AddApp.addEventListener(click, copyDiv(imgSrc, title, price))