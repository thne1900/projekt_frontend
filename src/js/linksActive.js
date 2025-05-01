"use strict";
document.addEventListener("DOMContentLoaded", function(){

const linksA=document.querySelectorAll(".linkAct");
const presentLocation=window.location.href;
linksA.forEach(link=>{
    if(link.href===presentLocation) {

        link.classList.add("active");
    }
});
});


document.getElementById("menu-ham").addEventListener("click",function(){
    const links=document.getElementById("links");

    links.classList.toggle("active");

});
