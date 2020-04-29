/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function() {
    "use strict";
    // ==============================================================
    // Our Visitor
    // ==============================================================

    var chart = c3.generate({
        bindto: '#visitor',
        data: {
            columns: [
                ['Total Swabs', 121774],
                ['Unique Persons', 82644],
                ['Per 1,000,000 Total Population', 21400],
                [' Unique Per 1,000,000 Total Population', 14500],
            ],

            type: 'donut',
            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) { console.log("onmouseover", d, i); },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                show: false
            },
            title: "Number of Swabs Tested",
            width: 20,

        },

        legend: {
            hide: true
            //or hide: 'data1'
            //or hide: ['data1', 'data2']
        },
        color: {
            pattern: ['	#FF4500', '#24d2b5', '#6772e5', '#20aee3']
        }
    });

    // ==============================================================
    // Sales chart
    // ==============================================================
    Morris.Area({
        element: 'sales-chart',
        data: [{
                period: '27 April',
                Sales: 13624,
                Earning: 931,
                Marketing: 12
            }, {
                period: '26 April',
                Sales: 12693,
                Earning: 618,
                Marketing: 12
            }, {
                period: '25 April',
                Sales: 12075,
                Earning: 897,
                Marketing: 12
            }, {
                period: '24 April',
                Sales: 11178,
                Earning:  1037,
                Marketing: 12
            }, {
                period: '23 April',
                Sales: 10141,
                Earning: 1016,
                Marketing: 12
            }, {
                period: '22 April',
                Sales: 9125,
                Earning: 1111,
                Marketing: 11
            },
            {
                period: '21 April',
                Sales: 8014,
                Earning: 1426,
                Marketing: 11
            }
        ],
        xkey: 'period',
        ykeys: ['Sales', 'Earning', 'Marketing'],
        labels: ['Total ', ' New', 'Death'],
        pointSize: 0,
        fillOpacity: 0,
        pointStrokeColors: ['#20aee3', '#24d2b5', '#6772e5'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#20aee3', '#24d2b5', '#6772e5'],
        resize: true

    });


});
