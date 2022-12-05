// copied code from Riley and Anthony's previous project


// registration form login with some users already created
let users = [
    {
        username: "Evan",
        password: "1234"
        },
    {
        username: "Riley",
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
    window.location.href="Menu.html"
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
    
  else{localStorage.setItem(registerUser, registerPassword);
    alert("Registration successful");}

users.push({registerUser, registerPassword});

}

// function to alert login needed for access to page
function feature(){
    alert('please login to use this feature!!')
}