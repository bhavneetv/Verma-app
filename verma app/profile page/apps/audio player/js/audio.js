var video = document.getElementById("video-p")
var play = document.getElementById("play")
var pause = document.getElementById("pause")
var skip = document.getElementById("skip")
var v_name = document.getElementById("video-name")
var v_link = document.getElementById("video_link")
var v_submit = document.getElementById("video_sub")
var skip_back = document.getElementById("back")
var v_inp = document.getElementById("video-inp")
var volume = document.getElementById("vol-min")
var vol_nav = document.getElementById("r")
var speed = document.getElementById("volx")
var inp_range = document.getElementById("input-range")
var first_box = document.getElementById("up")
var main_p = document.getElementById("main-player")
var demo_v = document.getElementById("vd")





var user = sessionStorage.getItem("user")


// alert(user)
if (user == null) {
    window.location.replace("../../../index.html")
    // window.open("../../../index.html" ,"_parent")
}

// code for first box
window.onload = function () {
    // alert(localStorage.getItem(user+"audio").match(user+"audio"))

    for (let mm = 0; mm < localStorage.length; mm++) {
        var all_k = localStorage.key(mm)
        // alert(all_k)
        // alert()
        if (all_k.match(user + "audio") == null) {
            // alert("yer")
            main_p.style.display = "none"
            first_box.style.display = "block"
        }
        else {
            first_box.style.display = "none"
            main_p.style.display = "block"
            // alert("d")

            break;
        }

    }

}
// code to save local storage thorugh first box
var n = document.getElementById("next-btn")

n.onclick = function () {
    var f_name = document.getElementById("video-name-first")
    var f_link = document.getElementById("video_link-first")
    var video_d = { Name: f_name.value, link: f_link.value }
    var video_d_jsonp = JSON.stringify(video_d)
    if (f_name.value != "" && f_link.value != "") {

        localStorage.setItem(user + "audio" + f_name.value, video_d_jsonp)
        window.location.reload()

    }

    else {
        alert("Enter Name")
    }
}



// code for play and pause

play.onclick = function () {
    video.play()
    demo_v.play()
    play.style.display = "none"
    pause.style.display = "block"
}

pause.onclick = function pln() {
    video.pause();
    demo_v.pause()

    play.style.display = "block"
    pause.style.display = "none"
}
skip.onclick = function () {
    video.currentTime = video.currentTime + 10;
}


// code to add video to local session
v_submit.onclick = function () {
    var v_name = document.getElementById("video-name")
    var v_link = document.getElementById("video_link")
    var video_d = { Name: v_name.value, link: v_link.value }
    var video_d_json = JSON.stringify(video_d)


    if (v_name.value != "" && v_link.value != "") {

        localStorage.setItem(user + "audio" + v_name.value, video_d_json)

    }
    else if (v_inp.value != "") {
        var v_scr = document.getElementById("v_scr")
        var filename = v_inp.value.replace('C:\\fakepath\\', 'in bulid songs/');
        v_scr.src = filename
        video.load()
        // pln();

        // alert(filename)
    }

    else {
        alert("Enter Name")
    }
}


// var _inp = document.getElementById("input")

// code to stop demo video automectic


skip_back.onclick = function () {
    if (video.currentTime >= 10) {

        video.currentTime = video.currentTime - 10;
    }
    else {
        video.currentTime = video.currentTime - 5;

    }
}




// code for time and progress bar
video.ontimeupdate = function () {
    // alert(video.currentTime)
    var time = document.getElementById("time");
    var c_time = this.currentTime;
    var t_time = this.duration;


    var s = c_time - parseInt(c_time / 60) * 60;
    time.innerHTML = parseInt(c_time / 60) + ":" + parseInt(s) + "/" + parseInt(t_time / 60) + ":" + parseInt(t_time - parseInt(t_time / 60) * 60);
    var p_bar = document.getElementById("progress-bar")


    p_bar.style.width = c_time * 100 / t_time + "%";
    if (video.currentTime == video.duration) {
        demo_v.pause()
    }



}
function video_dis() {
    for (i = 0; i < localStorage.length; i++) {
        var all_v = localStorage.key(i);
        if (all_v.match(sessionStorage.getItem("user") + "audio")) {
            var json_to_txt = JSON.parse(localStorage.getItem(all_v))
            // alert(json_to_txt.Name)



            // code to display the audio

            var v_parent = document.createElement("DIV")
            v_parent.setAttribute("id", "recent_video")

            var v_p = document.createElement("P")
            v_p.setAttribute("id", "video_name")
            v_p.setAttribute("class", "v_name")


            var v_t = document.createElement("NAV")
            v_t.setAttribute("id", "recent-tool")



            var play_b = document.createElement("button")
            // play_b.setAttribute("type", "button")
            play_b.setAttribute("id", "rec-play")
            // play_b.setAttribute("class","play-linkxx")
            play_b.className = "play-linkxx"
            play_b.setAttribute("linkv", json_to_txt.link)
            play_b.innerHTML = "Play"



            var del_b = document.createElement("BUTTON")
            del_b.setAttribute("type", "button")
            del_b.setAttribute("id", "delete")
            del_b.className = "dell"
            del_b.style.backgroundColor = "red"
            del_b.innerHTML = "Delete"
            v_p.innerHTML = json_to_txt.Name;



            v_t.appendChild(play_b)
            v_t.appendChild(del_b)
            v_parent.appendChild(v_p)
            v_parent.appendChild(v_t)
            var av = document.getElementById("all_c")
            av.appendChild(v_parent)





        }
    }
}
video_dis()
// code for search
var search = document.getElementById("video-search");

search.oninput = function () {
    var v_nm = document.getElementsByClassName("v_name");
    // alert(contact_name[0].innerHTML)
    for (var k = 0; k < v_nm.length; k++) {
        // var l = contact_name[k].innerHTML;
        if (v_nm[k].innerHTML.match(search.value)) {
            // alert(contact_name[k].innerHTML)
            v_nm[k].parentElement.setAttribute("class", "animate__animated animate__zoomIn")
            v_nm[k].parentElement.style.display = "block";

        }
        else {
            // contact_name[k].parentElement.class="animat+e__animated animate__slideInDown"
            // contact_name[k].parentElement.setAttribute("class","animate__animated animate__slideInDown")
            v_nm[k].parentElement.style.display = "none";
        }
    }



}
// to play store video
function playx() {
    volume.style.display = "block"
    var pla_b = document.getElementsByClassName("play-linkxx")
    // alert(pla_b[1])
    for (let m = 0; m < pla_b.length; m++) {
        pla_b[m].onclick = function () {
            clear()
            var ele_del = this.parentElement.parentElement;
            var v_url = this.getAttribute("linkv");
            // alert(v_url);
            var v_scr = document.getElementById("v_scr")
            v_scr.src = v_url
            play.style.display = "none"
            pause.style.display = "block"
            ele_del.style.backgroundColor = "rgba(46, 46, 46, 0.24)"
            ele_del.style.boxShadow = "3px 1px 10px black"
            pla_b[m].innerHTML = "Playing"
            video.load()
            demo_v.play()
            video.play()



        }



    }

}

playx();
// coode to clear playing
function clear() {
    var pla_bx = document.getElementsByClassName("play-linkxx")
    // alert(pla_b[1])
    for (let m = 0; m < pla_bx.length; m++) {
        pla_bx[m].innerHTML = "Play"
        var ele_del = pla_bx[m].parentElement.parentElement;
        ele_del.style.backgroundColor = "rgba(46, 46, 46, 0.123)"

    }
}

// code to delete

function del() {
    var deli = document.getElementsByClassName("dell");
    // alert(deli[1])
    for (var h = 0; h < deli.length; h++) {
        deli[h].onclick = function () {
            var ele_del = this.parentElement.parentElement;
            var pl = ele_del.getElementsByClassName("v_name")[0];
            //  alert(pl.innerHTML)
            // var user_cc = pl.innerHTML.replace('<i class="fas fa-id-badge"></i> ' ,'')
            // alert(user)
            // alert(user+"audio"+pl)
            localStorage.removeItem(user + "audio" + pl.innerHTML)
            ele_del.className = " animate__animated animate__bounceOut"
            setTimeout(function () {
                ele_del.remove();

            }, 1000)

        }
    }
}
del();


speed.onclick = function zz() {
    // alert()
    vol_nav.className = " animate__animated animate__fadeIn"
    vol_nav.style.display = "block"

    speed.ondblclick = function () {
        video.volume = 0;
        vol_i()
        // vol_nav.style.display="none"
    }


    setTimeout(function () {
        // vol_nav.className.replace("animate__an6mated animate__fadeIn" , "animate__animated animate__fadeOut")

        // alert(k)
        vol_nav.style.display = "none"

        // ele_del.remove();

    }, 6000)
}
// code for volume
inp_range.oninput = function () {

    vol_i()

    video.volume = this.value
    this.value = video.volume




}
// code for volume i acc to volume
function vol_i() {
    var v_max = document.getElementById("vol-full")
    var v_mute = document.getElementById("vol-mute")
    var v_min = document.getElementById("vol-min")
    if (video.volume > 0.6) {
        v_max.style.display = "block"
        v_min.style.display = "none"
        v_mute.style.display = "none"
    }
    else if (video.volume > 0.02) {
        v_max.style.display = "none"
        v_min.style.display = "block"
        v_mute.style.display = "none"

    }
    else {
        v_max.style.display = "none"
        v_min.style.display = "none"
        v_mute.style.display = "block"

    }



}


