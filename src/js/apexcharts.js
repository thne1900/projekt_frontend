"use strict";

let option= {
    chart:{
        type:'bar',
        background:'#2c2a29',
    },
    series: [{
    name: 'Antal publicerade böcker per decennium',
    data:[7, 15, 15, 13, 14, 5],
}],
theme: {
    mode:'dark',
    },
    yaxis: {
        labels:{
        style:{
            colors:'#000000',
            fontSize:'14px',
        }
    }  
    },
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
    title: {
        text: 'Stephen Kings publicerade bokverk per decennium',
        align:'center',
        style: {
            fontSize:'16px',
            fontWeight:'bold',
            color:'white', 
        }
    },
    fill: {
        colors: ['#8f0a0a']
    }
}

let chart= new ApexCharts(document.querySelector('#chart'), option)
chart.render()