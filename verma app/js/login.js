var nam = document.getElementById("name");
var m = document.getElementById("mail")
var pho = document.getElementById("phone")
var p = document.getElementById("pass")
var form = document.getElementById("sigup-form")
var sign_btn = document.getElementById("signup-btn")
var mai = document.getElementById("mai")





form.onsubmit = function () {

    var data = { name: nam.value, mail: m.value, phoneNo: pho.value, password: p.value }
    var json_data = JSON.stringify(data);



    if (nam.value != "" && m.value != "" && pho.value != "" && p.value != "") {


        if (localStorage.getItem(m.value) == null) {


            localStorage.setItem(m.value, json_data);
            sign_btn.style.backgroundColor = "#14b129"

            sign_btn.innerHTML = "Signup Sucess"

            setTimeout(function () {
                sign_btn.style.background = "linear-gradient(to right, #19c9f579, #63e7e162)"
                sign_btn.innerHTML = "Signup"
                form.reset()
            }, 3000);

            return false
        }
        else {

            sign_btn.style.background = "linear-gradient(90deg, rgba(221,56,56,1) 0%, rgba(205,47,86,1) 50%, rgba(255,0,0,1) 100%)"
            sign_btn.style.backgroundColor = "red"
            sign_btn.style.color = "white"
            sign_btn.style.fontSize="10px"
            sign_btn.innerHTML = "Email already exist!"
            m.style.borderBottomColor = "red"

            setTimeout(function () {
                sign_btn.style.background = "linear-gradient(to right, #19c9f579, #63e7e162)"
                sign_btn.innerHTML = "Signup"
            }, 5000);



        }

    }
    else {

        sign_btn.style.background = "linear-gradient(90deg, rgba(221,56,56,1) 0%, rgba(205,47,86,1) 50%, rgba(255,0,0,1) 100%)"
        sign_btn.style.backgroundColor = "red"
        sign_btn.style.color = "white"
        sign_btn.innerHTML = "Signup Failed"

        setTimeout(function () {
            sign_btn.style.background = "linear-gradient(to right, #19c9f579, #63e7e162)"
            sign_btn.innerHTML = "Signup"
        }, 5000);
    }

    return false;

}


//  login form coding start here 


var login_fm = document.getElementById("signin");
var login_mail = document.getElementById("login-mail");
var login_pass = document.getElementById("login-pass");
var lbtn = document.getElementById("login-btn");

login_fm.onsubmit = function () {


    var da = localStorage.getItem(login_mail.value);
    var d = JSON.parse(da);

    if (localStorage.getItem(login_mail.value) == null) {

        lbtn.style.background = "linear-gradient(90deg, rgba(221,56,56,1) 0%, rgba(205,47,86,1) 50%, rgba(255,0,0,1) 100%)"
        lbtn.style.backgroundColor = "red"
        lbtn.style.color = "white"
        lbtn.style.fontSize="10px"
        lbtn.innerHTML = "Email not  exist!"
        m.style.borderBottomColor = "red"
        
        setTimeout(function () {
            lbtn.style.color = "black"
            lbtn.style.fontSize="16px"
            lbtn.style.background = "linear-gradient(to right, #19c9f579, #63e7e162)"
            lbtn.innerHTML = "Login"
        }, 5000);



        return false
    }

    else if (d.password == login_pass.value) {


        lbtn.style.backgroundColor = "#14b129"

        lbtn.innerHTML = "Login Sucess"

        sessionStorage.setItem("user", login_mail.value)
        window.open("profile page/page.html","_parent")

        setTimeout(function () {
            lbtn.style.color = "black"
            lbtn.style.fontSize="16px"
            lbtn.style.background = "linear-gradient(to right, #19c9f579, #63e7e162)"
            lbtn.innerHTML = "Login"
            form.reset()
        }, 3000);

        return false

    }
    else {

        lbtn.style.background = "linear-gradient(90deg, rgba(221,56,56,1) 0%, rgba(205,47,86,1) 50%, rgba(255,0,0,1) 100%)"
        lbtn.style.backgroundColor = "red"
        lbtn.style.color = "white"
                lbtn.style.color = "white"
            lbtn.style.fontSize="10px"
        lbtn.innerHTML = "Wrong password!"
        m.style.borderBottomColor = "red"

        setTimeout(function () {
             lbtn.style.color = "black"
            lbtn.style.fontSize="16px"
            lbtn.style.background = "linear-gradient(to right, #19c9f579, #63e7e162)"
            lbtn.innerHTML = "Login"
        }, 5000);
        return false
    }


}




