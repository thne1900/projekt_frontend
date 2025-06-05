/*Chart with Apexcharts*/

"use strict";
/**
 * Skapande av ett stapeldiagram med Apexcharts.
 * @type {object} 
 */
let option= {

/**
 * Inställningar för chartens utformning.
 * @property {Object} chart - Visar typ av diagram och vald bakgrundsfärg. 
 */
    chart:{
        type:'bar',
        background:'#2c2a29',
    },

/**
 * Diagrammets data
 * @property {Array} series - En serie av array med dess data.
 */
    series: [{
    name: 'Antal publicerade böcker per decennium',
    data:[7, 15, 15, 13, 14, 5],
}],

/**
 * Inställningar för utformningen (mörkt tema).
 * @property {Object} theme - Det valda temat för diagrammet. 
 */
theme: {
    mode:'dark',
    },

/**
 * Design för y-axeln
 * @property {Object} yaxis - vald färg och storlek. 
 */
    yaxis: {
        labels:{
        style:{
            colors:'#000000',
            fontSize:'14px',
        }
    }  
    },

/**
 * Design för x-axeln
 * @property {Object} xaxis - Kategorier (array) och dess färg och storlek. 
 */
    xaxis: {
        categories: [1970, 1980, 1990, 2000, 2010, 2020],
        labels: {
            style:{
                colors:'#FFFFFF',
                fontSize:'14px',
                fontWeight:'bold',
            }
        }  
    },

/**
 * Titel på diagrammet
 * @property {Object} title - En titel är satt på diagrammet, med utformning på placering, storlek och färg.
 */
    title: {
        text: 'Stephen Kings publicerade bokverk per decennium',
        align:'center',
        style: {
            fontSize:'16px',
            fontWeight:'bold',
            color:'white', 
        }
    },

/**
* Färgsättning
* @property {Object} fill - Vald färg på staplarna. 
*/
    fill: {
        colors: ['#8f0a0a']
    }
}

/**
 * Renderar och utformar diagrammet i elementet på HTML-dokumentet (#chart).
 * @type {ApexCharts} 
 */
let chart= new ApexCharts(document.querySelector('#chart'), option)
chart.render()