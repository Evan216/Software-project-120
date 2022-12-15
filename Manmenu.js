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

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    // else
// {
//  window.location.href="Menu.html";
// }
}