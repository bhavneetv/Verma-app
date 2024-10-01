var signup_pg = document.getElementById("signup")
var signin_pg = document.getElementById("signin")
var sign_lk = document.getElementById("sign-link")
var login_lak = document.getElementById("login-llk")
var login_pas = document.getElementById("login-pass")
// var passs= document.getElementById("pass")
var eye_o = document.getElementById("eye-open")
var eye_c = document.getElementById("eye-close")

sign_lk.onclick = function login() {
    signin_pg.style.display = "none"
    signup_pg.style.display = "block"

}

login_lak.onclick = function () {
    signup_pg.style.display = "none";
    signin_pg.style.display = "block"

}
// coding for eye open adn close 
login_pas.onchange = function () {


    if (login_pas.value != 0) {
        eye_o.style.display = "block"

    }
    else {
        eye_o.style.display = "none"
    }

}


eye_c.onclick = function login() {
    eye_c.style.display = "none"
    login_pas.type = "password";
    eye_o.style.display = "block"

}

eye_o.onclick = function () {
    login_pas.type = "text";
    eye_o.style.display = "none";
    eye_c.style.display = "block"

}


