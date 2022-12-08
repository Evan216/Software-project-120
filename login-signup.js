
// login function
function login() {
    // retrieve username and password from form
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (localStorage.getItem(username) === password) {
    window.location.href="Menu.html"
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

 else localStorage.setItem(registerUser, registerPassword);
 window.location.href="Menu.html"
 alert("Registration successful");
  

users.push({registerUser, registerPassword});
}

// function to alert login needed for access to page
function feature(){
    alert('please login to use this feature!!')
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else
{
 window.location.href="Menu.html";
}
}

var modall = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modall) {
        modall.style.display = "none";
    }

else
{
 window.location.href="Menu.html";
}
}

var modall = document.getElementById('id03');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else
{
 window.location.href="Menu.html";
}
}