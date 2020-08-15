document.addEventListener('DOMContentLoaded', function(){
    container = document.querySelector(".container")
    black_background = document.querySelector(".black-background");
    menu_res = document.querySelector(".menu-res");
    button = document.querySelector(".icon");
    x = document.querySelector(" .x");
    button.onclick = function(){
        black_background.classList.toggle("xuathien");
        menu_res.classList.toggle("dichphai");
        container.classList.toggle("fix-back");
    }
    x.onclick = function(){
        black_background.classList.remove("xuathien");
        menu_res.classList.remove("dichphai");
        container.classList.remove("fix-back");
    }
    button1 = document.querySelector(".portfolio .icon1");
    port_menu = document.querySelector(".port-menu");
    button1.onclick =function(){
        port_menu.classList.toggle("display");
    }
},false)