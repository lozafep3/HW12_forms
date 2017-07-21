var username = document.forms.authorization.elements.username;
var password = document.forms.authorization.elements.password;
var submit = document.forms.authorization.elements.submit;

var regUsername = /^[a-z0-9]{2,15}$/i;
var regPassword = /^(?=.*[$])(?=.*[#])[a-z0-9#$]{6,15}$/i;

submit.onclick = function() {
    var usernameValid = regUsername.test(username.value);
    var passwordValid = regPassword.test(password.value);

    username.classList.remove("invalid");
    password.classList.remove("invalid");

    if ( usernameValid === true && passwordValid === true ) {
        checkLocalStorage();
    } else {
        if ( usernameValid === false ) {
            username.classList.add("invalid");
        }
        if ( passwordValid === false ) {
            password.classList.add("invalid");
        }
    }
};

function checkLocalStorage() {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(username.value, password.value);
    } else {
        document.cookie = username.value +'='+ password.value;
    }
}