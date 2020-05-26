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
                ['Bangladeshi/Indian', 4530],
                ['Singaporean', 1286],
                ['Chinese', 233],
                ['Myanmarian', 136],
                ['Malaysian', 95],
                ['Unidentified', 62],

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
            title: "Nationality",
            width: 20,
        },

        legend: {
            hide: true
            //or hide: 'data1'
            //or hide: ['data1', 'data2']
        },
        color: {
            pattern: ['	#FF4500', '#6772e5', '#24d2b5','F08080', '#20aee3', 'black']
        }
    });

    // ==============================================================
    // Sales chart
    // ==============================================================
    Morris.Area({
        element: 'sales-chart',
        data: [{
                May: '17 May',
                Total: 28038,
                New: 682,
                Death: 22
            }, {
                May: '18 May',
                Total: 28343,
                New: 305,
                Death: 22
            }, {
                May: '19 May',
                Total: 28794,
                New: 451,
                Death: 22
            }, {
                May: '20 May',
                Total: 29364,
                New:  570,
                Death: 22
            }, {
                May: '21 May',
                Total: 29812,
                New: 448,
                Death: 23
            }, {
                May: '22 May',
                Total: 30426,
                New: 614,
                Death: 23
            },
            {
                May: '23 May',
                Total: 31068,
                New: 642,
                Death: 23
            }
        ],
        xkey: 'May',
        ykeys: ['Total', 'New', 'Death'],
        labels: ['Total Cases ', ' New', 'Death'],
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

    function addRemoveClass(theRows) {

        theRows.removeClass("odd even");
        theRows.filter(":odd").addClass("odd");
        theRows.filter(":even").addClass("even");
    }

    var rows = $("table#myTable tr:not(:first-child)");

    addRemoveClass(rows);


    $("#selectField").on("change", function() {

        var selected = this.value;

        if (selected != "All") {

            rows.filter("[position=" + selected + "]").show();
            rows.not("[position=" + selected + "]").hide();
            var visibleRows = rows.filter("[position=" + selected + "]");
            addRemoveClass(visibleRows);
        } else {

            rows.show();
            addRemoveClass(rows);

        }

    });




});
