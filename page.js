var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        window.location.href="Menu.html";
    }
  
}

var modall = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modall) {
        window.location.href="Menu.html";
    }

// else
// {
//  window.location.href="Menu.html";
// }
}

var modall = document.getElementById('id03');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else
{
 window.location.href="landingpage.html";
}
}

