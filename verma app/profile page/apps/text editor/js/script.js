
var save= document.getElementById("save-btn")
var out= document.getElementById("out")


function run()
{
    var a = document.getElementById("code").value;
    var input= document.getElementById("input");
    // window.alert(a)
    var output = document.getElementById("output-codes");
    var outputfeildset = document.getElementById("output");
    var btn = document.getElementById("run-btn")
    var backbtn = document.getElementById("back-btn")
    output.innerHTML=a;
    out.style.display="block";
    input.style.display="none";
    backbtn.style.display="block";
    btn.style.display="none";
    save.style.display="none";

}
function back()
{
    var a = document.getElementById("code").value;
    var input= document.getElementById("input");
    // window.alert(a)
    var output = document.getElementById("output-codes");
    var outputfeildset = document.getElementById("output");
    // output.innerHTML=a;
    out.style.display="none";
    input.style.display="block";
    var btn = document.getElementById("run-btn")
    var backbtn = document.getElementById("back-btn")
    backbtn.style.display="none";
    btn.style.display="block";
    save.style.display="block";
    // outputfeildset.setAttribute("class","animate__animated animate__SlideInLeft")


}

var user=sessionStorage.getItem("user");

var a = document.getElementById("code");
function x(){
    if(sessionStorage.getItem("user")==null){
        location.replace("../../../index.html")

    }
    else if(localStorage.getItem(user+"code") != null){
        var l = localStorage.getItem(user+"code")
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
   
   
   localStorage.setItem(user+"code",code_text_json)
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
    if(localStorage.getItem(user+"light") == null && localStorage.getItem(user+"dark") == null){
        localStorage.setItem(user+"light","True")
    }
}
checks();


lightx.onclick=function light(){
    // alert()
    darks.style.display="block"
    lightx.style.display="none"
    body.style.background= "linear-gradient(to right, #4472a08e, #6ed6b58e)"
    lightx.style.color="rgb(41, 93, 95)"


    if(localStorage.getItem(user+"light")== null){
        localStorage.setItem(user+"light","True")
    }
    localStorage.removeItem(user+"dark")
    
}

darks.onclick=function dark(){
    // alert()
    darks.style.display="none"
    lightx.style.display="block"
    body.style.background="linear-gradient(to right, #112f4d8e, #06533b8e)"
    lightx.style.color="rgb(10, 43, 44)"
    if(localStorage.getItem(user+"dark")== null){
        localStorage.setItem(user+"dark","True")
    }
    localStorage.removeItem(user+"light")
  
}



function theme(){
    if(localStorage.getItem(user+"light")!= null){
        darks.style.display="block"
    lightx.style.display="none"
    body.style.background= "linear-gradient(to right, #4472a08e, #6ed6b58e)"
    lightx.style.color="rgb(41, 93, 95)"


    
    }
    else if(localStorage.getItem(user+"dark")!= null){

    darks.style.display="none"
    lightx.style.display="block"
    body.style.background="linear-gradient(to right, #112f4d8e, #06533b8e)"
    lightx.style.color="rgb(10, 43, 44)"

    }
    
}
theme()