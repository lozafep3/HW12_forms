




















function saveData() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
}