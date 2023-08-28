$(document).ready(function () {
    window.addEventListener("scroll",function(){
        if(window.scrollY>10){
            $('#nav-bar').css("background-color","#40739e");
            $('a').css("color","#fff");
            $('.up-btn').css("display","block");
        }
        
        else if(this.window.screenY<10){
            $('#nav-bar').css("background-color","#fff");
            $('a').css("color","#000");
            $('.up-btn').css("display","none");
        }
    });
});
function openNav(){
    document.getElementById('res-nav').style.width='300px';
}
function closeNav(){
    document.getElementById('res-nav').style.width='0';
}
var loader=document.getElementById('load');
