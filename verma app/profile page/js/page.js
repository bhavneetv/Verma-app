
//  var user_m = sessionStorage.getItem("user");
//  var json_t = localStorage.getItem(atob(user_m));
var nbtn = document.getElementById("next-btn");
var profile = document.getElementById("box");
// var profil_img = document.getElementById("img");

window.onload = function () {



    //  code for session 

    if (sessionStorage.getItem("user") == null) {
        window.open("../index.html" ,"_parent")
    }






    // code of profile



    else {


        // code for username
        var user_ms = document.getElementById("user-msg");
        var user_mail = sessionStorage.getItem("user");
        var json_t = localStorage.getItem(user_mail);
        var data_after_json = JSON.parse(json_t);
        user_ms.innerHTML = data_after_json.name;


        if (localStorage.getItem(user_mail + "image") != null) {
            var user_m = sessionStorage.getItem("user");
            var username_pmain = document.getElementById("user-nme");
            var profil_img = document.getElementById("img");
            var profil_box = document.getElementById("p-box");

            profile.style.display = "none"
            profil_box.style.display = "block"
            username_pmain.innerHTML = data_after_json.name;
            var final_img = localStorage.getItem(user_mail+"image");
            // alert(final_img)
            profil_img.style.backgroundImage="url("+final_img+")";



        }


        else {

// code for profile pic index
            var img_inp = document.getElementById("input")
            img_inp.onchange = function () {

                var user_fafa = document.getElementById("user-fafa");

                var p_img = document.getElementById("profile-img");
                var reader = new FileReader();
                reader.readAsDataURL(img_inp.files[0]);
                reader.onload = function () {
                    var file_name = reader.result;
                    p_img.style.backgroundImage = "url(" + file_name + ")";
                    nbtn.style.display = "block";
                   
                    user_fafa.style.display = "none"

                    // code for next btn
                    nbtn.onclick = function () {
                        var user_mail = sessionStorage.getItem("user");
                        // alert(user_mail)

                       

                        localStorage.setItem(user_mail+"image",file_name)
                        // alert(localStorage.getItem(user_mail+"image",file_name))
                        window.location.reload()
                    }
                }
            }

        }


    }










}






function logout() {
    sessionStorage.removeItem("user");
    location.reload();
}


function pr (){
    window.open("profile/profile.html","_parent")
}
