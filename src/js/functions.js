/*Javascript for message box that has a set display time.*/

"use strict";

    let memberButton=document.getElementById("member");
    let memberMessage=document.getElementById("memberMessage");

    memberButton.addEventListener("click",()=> {
        memberMessage.style.display="block";

        setTimeout(()=>{
            memberMessage.style.display="none";

        }, 2000);
    });

  