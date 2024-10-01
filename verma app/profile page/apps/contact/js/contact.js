// alert()
var plus = document.getElementById("plus");
var c_save = document.getElementById("save");
var close = document.getElementById("close");
var box = document.getElementById("add-box");
var c_name = document.getElementById("cont-name");
var c_no = document.getElementById("cont-no");
var c_img_bg = document.getElementById("profile-img");
var user_c = sessionStorage.getItem("user");
var cj = sessionStorage.getItem("cont");






pics();

if (sessionStorage.getItem("user") == null) {
    window.location.replace("../../../index.html ")
}
function pics() {

    // for contact image
    var user_c = sessionStorage.getItem("user");
    var im_c = localStorage.getItem(user_c + "image");

    c_img_bg.style.backgroundImage = "url(" + im_c + ")";
}


plus.onclick = function open() {
    box.style.display = "block";
    var new_h1 = document.getElementById("new_h1");
    new_h1.innerHTML = "All New  Contacts"
    box.style.display = "block";
    var c_name = document.getElementById("cont-name");
    var c_no = document.getElementById("cont-no");
    c_name.value = "";
    c_no.value = "";

}
close.onclick = function () {
    box.style.display = "none";
    cj.class = "animate__animated animate__slideInDown"


}
// code to store contact detail in local storage

c_save.onclick = function lll() {
    // alert(c_name.value)
    var contact = { name: c_name.value, number: c_no.value };
    var json_c = JSON.stringify(contact);
    if (c_name.value != "" && c_no.value != "") {
        // alert(c_name.value)
        localStorage.setItem(user_c + "cont" + c_name.value, json_c)
        alert("contact added!")
        window.location.reload();

    }
    else {
        alert("Enter Number and Name of Contacts")
    }
}

var i;
window.onload = function () {
    for (i = 0; i < localStorage.length; i++) {
        var all_c = localStorage.key(i);
        if (all_c.match(sessionStorage.getItem("user") + "cont")) {
            var json_to_txt = JSON.parse(localStorage.getItem(all_c))
            // alert(json_to_txt.name)
            // alert(json_to_txt.number)


            // code to display the contact 
            var cont_d = document.createElement("DIV")
            cont_d.setAttribute("id", "contact-info")

            var name_p = document.createElement("P")
            name_p.setAttribute("class", "s_name")
            // name_p.setAttribute("class","animate__animated animate__slideInDown")
            name_p.style.marginBottom = "-10px";

            var name_i = document.createElement("I")
            name_i.setAttribute("class", "fas fa-id-badge")

            var no_p = document.createElement("P")

            var no_i = document.createElement("I")
            no_i.setAttribute("class", "fa fa-phone")
            no_p.style.marginTop = "-5px";
            no_p.setAttribute("class", "cont_n")

            var tool = document.createElement("SPAN")
            tool.setAttribute("class", "tool")

            var edit_i = document.createElement("I")
            edit_i.setAttribute("class", "fa fa-edit editt")

            var del_i = document.createElement("I")
            del_i.setAttribute("class", "fa fa-trash-o dell")

            var hr = document.createElement("HR")


            name_p.appendChild(name_i)
            name_p.innerHTML += " " + json_to_txt.name;


            tool.appendChild(edit_i)
            tool.appendChild(del_i)

            no_p.appendChild(no_i)
            no_p.innerHTML += " " + json_to_txt.number;

            cont_d.appendChild(name_p)
            cont_d.appendChild(hr)
            cont_d.appendChild(tool)
            cont_d.appendChild(no_p)

            var a_c = document.getElementById("contact")
            a_c.appendChild(cont_d)


        }
    }

    var search = document.getElementById("search");

    search.oninput = function () {
        var contact_name = document.getElementsByClassName("s_name");
        // alert(contact_name[0].innerHTML)
        for (var k = 0; k < contact_name.length; k++) {
            // var l = contact_name[k].innerHTML;
            if (contact_name[k].innerHTML.match(search.value)) {
                // alert(contact_name[k].innerHTML)
                contact_name[k].parentElement.setAttribute("class", "animate__animated animate__zoomIn")
                contact_name[k].parentElement.style.display = "block";

            }
            else {
                // contact_name[k].parentElement.class="animate__animated animate__slideInDown"
                // contact_name[k].parentElement.setAttribute("class","animate__animated animate__slideInDown")
                contact_name[k].parentElement.style.display = "none";
            }
        }



    }

    function del() {
        var deli = document.getElementsByClassName("dell");
        for (var h = 0; h < deli.length; h++) {
            deli[h].onclick = function () {
                var ele_del = this.parentElement.parentElement;
                var pl = ele_del.getElementsByClassName("s_name")[0];
                var user_cc = pl.innerHTML.replace('<i class="fas fa-id-badge"></i> ', '')
                // alert(user_c)
                // alert(user_c+"cont"+user_cc)
                ele_del.remove();
                localStorage.removeItem(user_c + "cont" + user_cc)

            }
        }
    }
    del();

    // code to use edit  btn 

    function edit() {
        var edit = document.getElementsByClassName("editt");
        // alert(edit[1]) 
        for (var h = 0; h < edit.length; h++) {
            edit[h].onclick = function () {
                var ele_del = this.parentElement.parentElement;



                var pl = ele_del.getElementsByClassName("s_name")[0];


                var plx = ele_del.getElementsByClassName("cont_n")[0];

                // alert(plx.innerHTML)

                var user_cc = pl.innerHTML.replace('<i class="fas fa-id-badge"></i> ', '')
                var user_nn = plx.innerHTML.replace('<i class="fa fa-phone"></i> ', '')
                var new_h1 = document.getElementById("new_h1");
                new_h1.innerHTML = "Edit Contact"
                box.style.display = "block";
                var c_name = document.getElementById("cont-name");
                var c_no = document.getElementById("cont-no");
                c_name.value = user_cc;
                c_no.value = user_nn;
                // alert(c_save.innerHTML)
                c_save.onclick = function () {

                    if (c_name.value == user_cc && c_no.value == user_nn) {
                        // alert(c_name.value)

                        // localStorage.setItem(user_c+"cont"+c_name.value,json_c)
                        // alert("contact added!")
                        // window.location.reload();

                    }
                    else {
                        localStorage.removeItem(user_c + "cont" + user_cc)
                        var contact = { name: c_name.value, number: c_no.value };
                        var json_c = JSON.stringify(contact);

                        // alert(c_name.value)
                        localStorage.setItem(user_c + "cont" + c_name.value, json_c)
                        ele_del.remove()
                    }

                }




            }
        }
    }

    edit();


}

