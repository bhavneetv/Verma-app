
var save= document.getElementById("save-btn")
var out= document.getElementById("out")
var text = document.getElementById("top-t");
var user=sessionStorage.getItem("user");


// code to display user name in header
function txt(){
    var user_name = localStorage.getItem(user);
    var u_n = JSON.parse(user_name);
    text.innerHTML=u_n.name+" Note's"
}



txt()


var a = document.getElementById("code");
function x(){
    if(sessionStorage.getItem("user")==null){
        location.replace("../../../index.html")

    }
    else if(localStorage.getItem(user+"note") != null){
        var l = localStorage.getItem(user+"note")
        var p = JSON.parse(l)
        // alert(p.code)
        a.innerHTML=p.code
    }

}
x();
var save= document.getElementById("save-btn")
save.onclick=function(){
    this.innerHTML="Saving.."
    var a = document.getElementById("code").value;
   var code_text={code:a};
   code_text_json = JSON.stringify(code_text);
   
   
   localStorage.setItem(user+"note",code_text_json)

   setTimeout(function(){
   
    save.innerHTML="<i class='fas fa-save'></i> Save"
   
}, 2000);

}

// code for dark mode or light mode

var lightx = document.getElementById("light")
var darks = document.getElementById("darkx")
var mode = document.getElementById("mode")
var body =document.getElementById("body")

function checks(){
    if(localStorage.getItem(user+"note_light") == null && localStorage.getItem(user+"note_dark") == null){
        localStorage.setItem(user+"note_light","True")
    }
}
checks();


lightx.onclick=function light(){
    // alert()
    darks.style.display="block"
    lightx.style.display="none"
    body.style.background= "linear-gradient(to right, #4472a08e, #6ed6b58e)"
    lightx.style.color="rgb(41, 93, 95)"


    if(localStorage.getItem(user+"note_light")== null){
        localStorage.setItem(user+"note_light","True")
    }
    localStorage.removeItem(user+"note_dark")
    
}

darks.onclick=function dark(){
    // alert()
    darks.style.display="none"
    lightx.style.display="block"
    body.style.background="linear-gradient(to right, #112f4d8e, #06533b8e)"
    lightx.style.color="rgb(10, 43, 44)"
    if(localStorage.getItem(user+"note_dark")== null){
        localStorage.setItem(user+"note_dark","True")
    }
    localStorage.removeItem(user+"note_light")
  
}



function theme(){
    if(localStorage.getItem(user+"note_light")!= null){
        darks.style.display="block"
    lightx.style.display="none"
    body.style.background= "linear-gradient(to right, #4472a08e, #6ed6b58e)"
    lightx.style.color="rgb(41, 93, 95)"


    
    }
    else if(localStorage.getItem(user+"note_dark")!= null){

    darks.style.display="none"
    lightx.style.display="block"
    body.style.background="linear-gradient(to right, #112f4d8e, #06533b8e)"
    lightx.style.color="rgb(10, 43, 44)"

    }
    
}
theme()

// code for clear 

var clear = document.getElementById("clear")
var deletex = document.getElementById("delete")




deletex.onclick=function(){
    if(localStorage.getItem(user+"note") != null){
        localStorage.removeItem(user+"note")
        this.innerHTML="Deleted !!"
    }
    else{
        alert("You Doesn't Save any Note !!")
    }




    setTimeout(function(){
   
        deletex.innerHTML="<i class='fa-solid fa-trash'></i> Delete All"
       
   }, 2000);
}

