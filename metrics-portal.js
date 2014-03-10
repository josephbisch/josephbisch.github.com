var plot;
$(function () {
    var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "dump.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    plot = $("#placeholder").plot(json["coords"], {
        points: {
            show: false
        },
        xaxis: {
            mode: "time"
        },
        legend: {
            show: true,
            container: "#legendholder",
            hideable: true
        },
        grid: {
            hoverable: true
        }
    }).data("plot");

    var yaxisLabel = $("<div style='transform: rotate(-90deg); transform-origin: 0 0; -moz-transform: rotate(-90deg); -moz-transform-origin: 0 0; -webkit-transform: rotate(-90deg); -webkit-transform-origin: 0 0; top: 50%; left: 2px; text-align: center; width: 300px; margin-top: 300px'></div>")
        .text("Number of Packages")
        .appendTo("#placeholder");

    yaxisLabel.css("margin-top", yaxisLabel.width());
    yaxisLabel.css("margin-left", -20);

    $('#start').datepicker({});
    $('#end').datepicker({});

    $("#placeholder").bind("plothover", function (event, pos, item) {
        // $("#x").text(pos.x);
        // $("#y").text(pos.y);
        if (item) {
            $("#charttooltip").remove();
            var x = item.datapoint[0];
            var y = item.datapoint[1];
            showChartTooltip(item.pageX, item.pageY, "(" + convertTime(x) + ", " + y + ")");
        } else {
            $("#charttooltip").remove();
        }
    });
});

function convertTime(unixtime) {
    var t = new Date(unixtime);
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var year = t.getFullYear();
    var month = months[t.getMonth()];
    var date = t.getDate();
    return date + '/' + month + '/' + year;
}

function setAxis(element) {
    var unixtime = Date.parse(element.value)
    if (element.id == "start") {
        plot.getOptions().xaxes[0].min = unixtime;
    }
    if (element.id == "end") {
        plot.getOptions().xaxes[0].max = unixtime;
    }
    plot.setupGrid()
    plot.draw()
}

function showChartTooltip(x, y, message) {
    $('<div id="charttooltip">' + message + '</div>').css({
        position: "absolute",
        display: "none",
        top: y + 5,
        left: x + 5,
        border: "1px solid #bfbfbf",
        padding: "2px",
        "background-color": "#fff",
        opacity: 1
    }).appendTo("#placeholder").fadeIn(200);
}

$("#placeholder").bind("plothover", function (event, pos, item) {
    if (item) {
        $("#charttooltip").remove();
        var x = item.datapoint[0];
        var y = item.datapoint[1];
        showChartTooltip(item.pageX, item.pageY, "Hello");
    } else {
        $("#charttooltip").remove();
    }
});
