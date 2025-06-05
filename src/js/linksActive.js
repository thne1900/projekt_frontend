/* To show the active present page*/

"use strict";

/**
 * När länkar för navigering har laddats in, ska den aktuella sidan markeras aktiv. 
 * @event 
 */
document.addEventListener("DOMContentLoaded", function(){

/**
* Alla länkar med klassen "linkAct", ska hittas.
* @type {HTMLElement}
*/
const linksA=document.querySelectorAll(".linkAct");

/**
 * Den aktuella sidans URL kontrolleras
 * @type {string}
 */
const presentLocation=window.location.href;

/**
 * Länkarna loopas igenom och får klassen "active" på den som stämmer överens med aktuell URL. 
 * @param {HTMLElement} link - Den länken som matchar av länkarna blir aktiv. 
 */
linksA.forEach(link=>{
    if(link.href===presentLocation) {

        link.classList.add("active");
    }
});
});


/*To toogle the links on the hamburger-meny*/

/**
 * En händelsehanterare på menynknappen som reagerar på klick, som växlar länkarnas visning på sidan. 
 * @event 
 */
document.getElementById("menu-ham").addEventListener("click",function(){

/**
 * Klass ändras på elementet ("links") för att kunna växla mellan att dölja och visa menyn. 
 * @type {HTMLElement}
 */
    const links=document.getElementById("links");

    links.classList.toggle("active");

});
