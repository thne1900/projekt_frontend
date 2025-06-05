/*To change the color scheme to a lighter theme*/

"use strict";

/**
 * Inhämtar knapp-elementet från html-dokumentet med id "colorScheme", som ska ändra färgtemat på sidan.
 * @type {HTMLElement} 
 */
let changeColor=document.getElementById("colorScheme");

/**
 * Tillägg av händelsehanterar som ska växla mellan färgteman. 
 * @event - En händelsehanterar som reagerar vid "klick" på knappen. 
 * @function - Växlar mellan mörkt till ljust tema på sidornas body- element. 
 */
changeColor.addEventListener("click", ()=>{
document.body.classList.toggle("light-theme");

});

