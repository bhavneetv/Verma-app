var edit_btn = document.getElementById("edit-btn")
var done_btn = document.getElementById("done-btn")
var img_input = document.getElementById("input")
var p_box = document.getElementById("k")
var p_box_edit = document.getElementById("l")

var data = sessionStorage.getItem("user");
var local_data = localStorage.getItem(data);
var json_data = JSON.parse(local_data);
var name_p = document.getElementById("name-pr")
var mail_p = document.getElementById("mail-pr")
var phone_p = document.getElementById("phone-pr")
var pass_p = document.getElementById("pass-pr")
var img = document.getElementById("img")
if (data == null) {
    window.location.replace("../../../index.html")
    // window.open("../../../index.html" ,"_parent")
}

window.onload = function () {

    var img = document.getElementById("img")
    var name_e = document.getElementById("name-input")
    var mail_e = document.getElementById("mail-input")
    var phone_e = document.getElementById("phone-input")
    var pass_e = document.getElementById("pass-input")
    name_p.innerHTML = json_data.name;
    mail_p.innerHTML = json_data.mail;
    phone_p.innerHTML = json_data.phoneNo;
    pass_p.innerHTML = json_data.password;

    name_e.value = json_data.name;
    mail_e.value = json_data.mail;
    phone_e.value = json_data.phoneNo;
    pass_e.value = json_data.password;
    // alert(data)
    var img_path = localStorage.getItem(data + "image")
    // alert(img_path)

    img.style.backgroundImage = "url(" + img_path + ")";
    // 

}
// code for edit btn
// img_input.onchange = imk();
edit_btn.onclick = function () {
    p_box.style.display = "none";
    p_box_edit.style.display = "block";
    img_input.style.display = "block";
    img.style.boxShadow = "0px 0px 7px red"
    return false

}


// code for done btn
done_btn.onclick = function () {
    p_box.style.display = "block";
    p_box_edit.style.display = "none"
    // img_input.style.display = "none";


    var name_e = document.getElementById("name-input").value
    var mail_e = document.getElementById("mail-input").value
    var phone_e = document.getElementById("phone-input").value
    var pass_e = document.getElementById("pass-input").value
    // alert(name_e)
    var data = sessionStorage.getItem("user");
    var local_data = localStorage.getItem(data);
    var json_data = JSON.parse(local_data);

    var data = { name: name_e, mail: json_data.mail, phoneNo: phone_e, password: pass_e }
    var json_data = JSON.stringify(data);
    // var p_img = document.getElementById("profile-img");

    // code for edit img





    //     }
    // alert(jso_data.mail)
    localStorage.setItem(mail_e, json_data);


    // var img_inp = document.getElementById("input")


    // function imk() {

    // }







    location.reload();

    return false
}
// code to change photo

img_input.onchange = function () {

    var img_input = document.getElementById("input")
    var img = document.getElementById("img")
    var reader = new FileReader();
    reader.readAsDataURL(img_input.files[0]);
    reader.onload = function () {
        var file_name = reader.result;


        img.style.backgroundImage = "url(" + file_name + ")"
        done_btn.onclick = function () {
            var data = sessionStorage.getItem("user");
            var data = sessionStorage.getItem("user");
            var local_data = localStorage.getItem(data);
            var json_data = JSON.parse(local_data);
            // alert(json_data.mail)
            localStorage.setItem(json_data.mail + "image", file_name);
            // var local_data = localStorage.getItem(data);
            //  alert(k)
            // alert(local_data)
        }
    }
}

