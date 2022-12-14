
const users = new Map([["Admin", "Riley"], ["key2", "value2"]]);
localStorage.setItem("users", JSON.stringify(users));
// login function
function login() {
    // retrieve username and password from form
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;


  if (username  == "Admin") {
    if (password == "Riley")
    window.location.href = "ManMenu.html"
  }

  else if (localStorage.getItem(username) === password) {
    localStorage.setItem("username", username)
    window.location.href="Menu.html"
    alert('Login successful');
    
  }
  

    else {
      alert('Login failed');
    
  }
  
}

// function to create a new user with name, email, password
function register(username,password) {
    // store new user data 
  let registerUser = document.getElementById("newUserName").value;
    // store new user password
  let registerPassword = document.getElementById("newPassword").value;

  if (localStorage.getItem(registerUser) !== null) {
    alert("Username already exists");}


 else localStorage.setItem(registerUser, registerPassword);
 window.location.href="Signup.html"
 alert("Registration successful");
  
let newUserData = {registerUser : username, registerPassword : password}
users.push([registerUser, registerPassword]);
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
    // else
// {
//  window.location.href="Menu.html";
// }
}

var modall = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modall) {
        modall.style.display = "none";
    }

// else
// {
//  window.location.href="Menu.html";
// }
}

//logout function
function logout(){
  localStorage.clear
  window.location.reload
}

WelcomeUN.textContent = 'Welcome, ${Localstorage.username}'

  // Get the login and password from local storage
  var login = localStorage.getItem('username');
  var password = localStorage.getItem('password');
  
  // Check if the login and password match the expected values
  if (username === 'admin' && password === 'Riley') {
    // Get the button element
    var button = document.querySelector('button');
    
    // Make the button visible
    button.style.display = 'block';
  }
