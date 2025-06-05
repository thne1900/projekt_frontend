/*Javascript for message boxes that has a set display time.*/

"use strict";
/**
 * Inhämtar knapp- elementet från HTML-dokuementet med id "member" (medlemsknappen).
 * @type {HTMLElement}
 */
    let memberButton=document.getElementById("member");

/**
 * Inhämtar elementet från HTML-dokumentet, ett div-element innehållande textmeddelande.
 * @type {HTMLElement}
 */
    let memberMessage=document.getElementById("memberMessage");

/**
 * Lägger till en händelsehanterar på knappen, för att ett meddelande ska dyka upp.
 * @event - Vid klick på medlemsknappen, reagerar funktion.
 * @function - Visar meddelandet som ska dyka upp på sidan. 
 * @function setTimeout - Visa meddelandet under en tid på 2 sekunder. 
 */
    memberButton.addEventListener("click",()=> {
        memberMessage.style.display="block";

        setTimeout(()=>{
            memberMessage.style.display="none";

        }, 2000);
    });


/**
 * Inhämtar knapp-elementet från HTML-dokumentet med id "chat" (chatknappen).
 * @type {HTMLElement}
 */
    let chatButton=document.getElementById("chat");

/**
 * Inhämtar elementet från HTML-dokumentet, ett div-element som består av ett textmeddelande. 
 * @type {HTMLElement}
 */
    let chatMessage=document.getElementById("chatMessage");

/**
 * Lägger till händelsehanterar på knappen.
 * @event - Vid klick på chatknappen, reagerar funktion.
 * @function - Visar textmeddelandet. 
 * @function setTimeout - Visar meddelandet under en tid på 2 sekunder. 
 */

    chatButton.addEventListener("click",()=> {
        chatMessage.style.display="block";

        setTimeout(()=>{
            chatMessage.style.display="none";

        }, 2000);
    });