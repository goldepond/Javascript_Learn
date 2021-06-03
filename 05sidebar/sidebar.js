var sidenav =document.querySelector(".sidenav");
var menuBtn =document.querySelector(".menuBtn");

menuBtn.addEventListener("click", onSidenav );

function  onSidenav(){
    console.log(1);
    var btn = sidenav.style.width;

    if(window.innerWidth <=767){
        if(btn == "" || btn=="0px")
        {
            sidenav.style.width="200px";
        }
        else{
            sidenav.style.width="0px";
        }
    }
    else{
        if(btn == "" || btn=="200px")
        {
            sidenav.style.width="0px";
        }
        else{
            sidenav.style.width="200px";
        }
    }
}