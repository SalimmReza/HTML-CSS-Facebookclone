var settingmenu = document.querySelector(".setting-menu");
var dark_btn= document.getElementById("dark_btn")

function settings_menu_drop_down(){
    settingmenu.classList.toggle("setting-menu-height");


}

dark_btn.onclick= function(){
    dark_btn.classList.toggle("dark_btn_on");
    document.body.classList.toggle("dark_theme");

    if(localStorage.getItem("theme")== "light"){
    localStorage.setItem("theme" , "dark");}

    else{
        localStorage.setItem("theme" , "light");
    }


}

if(localStorage.getItem("theme")== "light"){
    dark_btn.classList.remove("dark_btn_on");
    document.body.classList.remove("dark_theme");
}
else if(localStorage.getItem("theme")== "dark"){
    dark_btn.classList.add("dark_btn_on");
    document.body.classList.add("dark_theme");
}

else {
     localStorage.setItem("theme" , "light");
}


